/**
 * Hardcoded chatbot fallback when no API key or when the live API fails.
 * Uses FAQ keyword matching so the chatbot always responds.
 */

import { PORTFOLIO_FAQ } from "./faq";

const DEFAULT_REPLY =
  "I'm the portfolio assistant for Cardly Martins. I can tell you about his experience, projects (Survival Prep, SMKFusion, Luxury Pet Store), tech stack, and how to work with him. Ask me about any of those, or use the Contact page for direct inquiries.";

const GREETING_REPLIES: [string[], string][] = [
  [["hi", "hello", "hey", "good morning", "good afternoon", "good evening"], "Hello. I'm the assistant for Cardly Martins' portfolio. You can ask about his experience, projects, or services—or how to get in touch."],
  [["thanks", "thank you", "thx"], "You're welcome. If you have more questions about Cardly's work or how to collaborate, ask anytime."],
  [["help", "what can you do", "what do you know"], "I can answer questions about Cardly Martins: his background, case studies (Survival Prep, SMKFusion, Luxury Pet Store), tech stack, services, and how to work with him. Try: \"Tell me about your experience\" or \"What technologies do you use?\""],
  [["coding", "code help", "programming", "coding question"], "I'm best at questions about Cardly's portfolio, projects, and tech stack (Next.js, React, TypeScript, Node). For general coding help, I can still point you to the technologies and architecture he uses—or use the Contact page to discuss a technical project."],
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreMatch(userNorm: string, keywords: string[]): number {
  let score = 0;
  const words = userNorm.split(" ");
  for (const kw of keywords) {
    const kwNorm = normalize(kw);
    if (userNorm.includes(kwNorm)) {
      score += kwNorm.length > 2 ? 2 : 1;
    }
    for (const w of words) {
      if (w.length > 2 && kwNorm.includes(w)) score += 1;
    }
  }
  return score;
}

/**
 * Returns a hardcoded reply for the given user message.
 * Uses FAQ keyword matching and simple greeting/help intents.
 */
export function getHardcodedReply(userMessage: string): string {
  const trimmed = String(userMessage).trim();
  if (!trimmed) return DEFAULT_REPLY;

  const normalized = normalize(trimmed);

  // Greetings and help
  for (const [triggers, reply] of GREETING_REPLIES) {
    if (triggers.some((t) => normalized.startsWith(t) || normalized.includes(" " + t))) {
      return reply;
    }
  }

  // FAQ keyword match: pick the best-scoring answer
  let bestScore = 0;
  let bestAnswer: string | null = null;

  for (const item of PORTFOLIO_FAQ) {
    const score = scoreMatch(normalized, [item.q, ...item.keywords]);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.a;
    }
  }

  if (bestScore >= 2 && bestAnswer) return bestAnswer;

  return DEFAULT_REPLY;
}

/**
 * Turns a string into a ReadableStream that yields UTF-8 chunks (for streaming fallback).
 */
export function streamText(text: string): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const chunkSize = 12;
  let offset = 0;
  return new ReadableStream<Uint8Array>({
    pull(controller) {
      if (offset >= text.length) {
        controller.close();
        return;
      }
      const chunk = text.slice(offset, offset + chunkSize);
      offset += chunkSize;
      controller.enqueue(encoder.encode(chunk));
    },
  });
}
