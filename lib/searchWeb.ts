/**
 * Free web search context via DuckDuckGo Instant Answer API.
 * No API key required. Used to give the chatbot optional web context for general questions.
 * Rate-limit is handled by the chat route (one search per request).
 */

const DDG_BASE = "https://api.duckduckgo.com/";

interface DuckDuckGoResult {
  AbstractText?: string;
  Abstract?: string;
  AbstractURL?: string;
  AbstractSource?: string;
  RelatedTopics?: Array<{ Text?: string; FirstURL?: string } | string>;
  Results?: Array<{ Text?: string; FirstURL?: string }>;
  Answer?: string;
  Definition?: string;
  DefinitionSource?: string;
}

/**
 * Fetches optional web context for a query. Returns a short string to inject into the prompt.
 * Safe to call; returns empty string on any failure or empty response.
 */
export async function fetchWebContext(query: string): Promise<string> {
  const trimmed = String(query).trim().slice(0, 200);
  if (!trimmed) return "";

  try {
    const url = `${DDG_BASE}?q=${encodeURIComponent(trimmed)}&format=json&no_redirect=1`;
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return "";

    const data = (await res.json()) as DuckDuckGoResult;
    const parts: string[] = [];

    if (data.AbstractText) parts.push(data.AbstractText);
    else if (data.Abstract) parts.push(data.Abstract);
    if (data.Answer) parts.push(data.Answer);
    if (data.Definition) parts.push(data.Definition);

    if (Array.isArray(data.RelatedTopics)) {
      const texts = data.RelatedTopics.slice(0, 3).map((t) => {
        if (typeof t === "string") return t;
        return (t as { Text?: string }).Text ?? "";
      }).filter(Boolean);
      if (texts.length) parts.push(texts.join(" "));
    }

    if (Array.isArray(data.Results) && data.Results.length > 0) {
      const snippets = data.Results.slice(0, 2).map((r) => r.Text).filter(Boolean) as string[];
      if (snippets.length) parts.push(snippets.join(" "));
    }

    const combined = parts.join(" ").trim().slice(0, 1500);
    return combined ? `Web context (use if relevant): ${combined}` : "";
  } catch {
    return "";
  }
}
