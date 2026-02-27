/**
 * Chat types and constants for the Live AI ChatBot.
 */

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

/** Max messages to send as conversation context (short-term memory). */
export const MAX_CONTEXT_MESSAGES = 20;

/** Suggested prompts shown when the chat is opened. */
export const SUGGESTED_PROMPTS = [
  "Tell me about your experience",
  "Explain your SaaS project",
  "What technologies do you specialize in?",
  "How did you optimize performance?",
  "Can you help me with a coding question?",
] as const;
