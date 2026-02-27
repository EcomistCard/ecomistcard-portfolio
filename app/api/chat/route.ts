import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/systemPrompt";
import { MAX_CONTEXT_MESSAGES } from "@/lib/chat";
import { checkRateLimit } from "@/lib/rateLimit";
import { fetchWebContext } from "@/lib/searchWeb";
import { getHardcodedReply, streamText } from "@/lib/chatFallback";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

const GROQ_FETCH_TIMEOUT_MS = 20000;

/** OpenAI-compatible streaming (used by both Groq and OpenAI). */
async function streamFromProvider(
  url: string,
  apiKey: string,
  body: { model: string; messages: ChatMessage[]; stream: true; max_tokens: number; temperature: number }
): Promise<ReadableStream<Uint8Array>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GROQ_FETCH_TIMEOUT_MS);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
    signal: controller.signal,
  });
  clearTimeout(timeoutId);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error: ${res.status} ${err}`);
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response body");

  const decoder = new TextDecoder();
  let buffer = "";
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data) as { choices?: Array<{ delta?: { content?: string } }> };
            const text = parsed.choices?.[0]?.delta?.content;
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          } catch {
            // ignore parse errors for incomplete chunks
          }
        }
      }
    },
  });
}

/** Prefer Groq (free), fallback to OpenAI. */
function getProvider(): { url: string; apiKey: string; model: string } | null {
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    return {
      url: "https://api.groq.com/openai/v1/chat/completions",
      apiKey: groqKey,
      model: process.env.GROQ_CHAT_MODEL || "llama-3.3-70b-versatile",
    };
  }
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    return {
      url: "https://api.openai.com/v1/chat/completions",
      apiKey: openaiKey,
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
    };
  }
  return null;
}

function getOpenAIMessages(body: { messages?: { role: string; content: string }[] }): ChatMessage[] {
  const raw = body.messages ?? [];
  const trimmed = raw.slice(-MAX_CONTEXT_MESSAGES);
  return [
    { role: "system", content: getSystemPrompt() },
    ...trimmed.map((m) => ({
      role: (m.role === "assistant" || m.role === "user" ? m.role : "user") as "user" | "assistant",
      content: String(m.content).slice(0, 8000),
    })),
  ];
}

export async function POST(req: NextRequest) {
  const rate = checkRateLimit(req);
  if (!rate.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!Array.isArray(body.messages)) {
    body.messages = [];
  }
  const totalLen = body.messages.reduce((s, m) => s + String(m?.content ?? "").length, 0);
  if (totalLen > 100_000) {
    return NextResponse.json(
      { error: "Request too large. Please shorten the conversation." },
      { status: 400 }
    );
  }

  let messages = getOpenAIMessages(body);
  const last = messages[messages.length - 1];
  if (!last || last.role !== "user" || !String(last.content).trim()) {
    return NextResponse.json({ error: "Message content is required" }, { status: 400 });
  }

  const userContent = String(last.content).trim();

  // Force hardcoded mode: always use FAQ/portfolio replies (no external API). Guarantees a response.
  const useHardcoded =
    process.env.USE_HARDCODED_CHAT === "true" || process.env.USE_HARDCODED_CHAT === "1";
  if (useHardcoded) {
    const reply = getHardcodedReply(userContent);
    return new NextResponse(streamText(reply), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-RateLimit-Remaining": String(rate.remaining),
      },
    });
  }

  const provider = getProvider();

  // No API key: always respond with hardcoded FAQ/portfolio replies
  if (!provider) {
    const reply = getHardcodedReply(userContent);
    return new NextResponse(streamText(reply), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-RateLimit-Remaining": String(rate.remaining),
      },
    });
  }

  try {
    // Optional web context: don't block chat if DuckDuckGo is slow; use at most 2.5s
    const webContextPromise = fetchWebContext(last.content);
    const webContext = await Promise.race([
      webContextPromise,
      new Promise<string>((resolve) => setTimeout(() => resolve(""), 2500)),
    ]);
    if (webContext) {
      messages = [
        ...messages.slice(0, -1),
        {
          role: "user" as const,
          content: `${last.content}\n\n[${webContext}]`,
        },
      ];
    }

    const stream = await streamFromProvider(provider.url, provider.apiKey, {
      model: provider.model,
      messages,
      stream: true,
      max_tokens: 1024,
      temperature: 0.7,
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-RateLimit-Remaining": String(rate.remaining),
      },
    });
  } catch (err) {
    console.error("[chat]", err);
    // API failed: fallback to hardcoded reply so the chatbot still responds
    const reply = getHardcodedReply(userContent);
    return new NextResponse(streamText(reply), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-RateLimit-Remaining": String(rate.remaining),
      },
    });
  }
}
