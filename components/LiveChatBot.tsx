"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Square } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { SUGGESTED_PROMPTS } from "@/lib/chat";
import { site } from "@/lib/site";

/** Bouncing dots typing indicator. */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5" aria-hidden>
      <span
        className="h-2 w-2 rounded-full bg-accent/80 animate-bounce"
        style={{ animationDelay: "0ms", animationDuration: "0.6s" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-accent/80 animate-bounce"
        style={{ animationDelay: "150ms", animationDuration: "0.6s" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-accent/80 animate-bounce"
        style={{ animationDelay: "300ms", animationDuration: "0.6s" }}
      />
    </div>
  );
}

export default function LiveChatBot() {
  const [open, setOpen] = useState(false);
  const { messages, isLoading, error, sendMessage, stopStreaming, clearMessages } = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("textarea");
    const text = input?.value?.trim();
    if (text) {
      input!.value = "";
      sendMessage(text);
    }
  };

  const showSuggestions = open && messages.length === 0 && !isLoading;

  return (
    <>
      {/* Floating button — bottom-right, high z-index */}
      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 shadow-xl ring-1 ring-white/10 hover:bg-slate-700 hover:ring-accent/50 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-accent" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[99] flex w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-sm"
            style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}
          >
            {/* Header — SaaS-style */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-800/90 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 ring-1 ring-accent/30">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">{site.name} Assistant</p>
                  <p className="text-xs text-slate-400">AI · Professional</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearMessages}
                className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Messages — auto-scroll container */}
            <div
              ref={listRef}
              className="flex min-h-[280px] max-h-[50vh] flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 scroll-smooth"
            >
              {messages.length === 0 && !showSuggestions && (
                <p className="text-center text-sm text-slate-500">Send a message to start.</p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === "user"
                        ? "bg-accent text-white"
                        : "bg-slate-800 text-slate-200 ring-1 ring-white/5"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">
                      {m.content || null}
                    </div>
                    {m.role === "assistant" && isLoading && !m.content && (
                      <TypingIndicator />
                    )}
                  </div>
                </div>
              ))}

              {/* Suggested prompts on open */}
              {showSuggestions && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-slate-500">Suggested questions</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendMessage(prompt)}
                        className="rounded-xl border border-white/10 bg-slate-800/80 px-3 py-2 text-left text-xs text-slate-300 transition-colors hover:border-accent/40 hover:bg-slate-800 hover:text-white"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="mx-4 mb-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                {error}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-800/50 p-3">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  name="message"
                  rows={1}
                  placeholder="Ask anything…"
                  disabled={isLoading}
                  className="min-h-[44px] flex-1 resize-none rounded-xl border border-white/10 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 disabled:opacity-60 transition-colors"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      (e.target as HTMLTextAreaElement).form?.requestSubmit();
                    }
                  }}
                />
                {isLoading ? (
                  <button
                    type="button"
                    onClick={stopStreaming}
                    className="flex h-11 min-w-[44px] shrink-0 items-center justify-center gap-1.5 rounded-xl bg-slate-600 text-white hover:bg-slate-500 transition-colors"
                    aria-label="Stop generating"
                  >
                    <Square className="h-4 w-4" />
                    <span className="hidden sm:inline text-xs font-medium">Stop</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors"
                    aria-label="Send"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
