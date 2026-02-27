/**
 * In-memory rate limiter for the chat API.
 * Production: consider Redis or Vercel KV for multi-instance.
 */

const store = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30;

function getKey(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function checkRateLimit(req: Request): { ok: boolean; remaining: number } {
  const key = getKey(req);
  const now = Date.now();
  const entry = store.get(key);

  if (!entry) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQUESTS - 1 };
  }

  if (now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQUESTS - 1 };
  }

  entry.count += 1;
  if (entry.count > MAX_REQUESTS) {
    return { ok: false, remaining: 0 };
  }
  return { ok: true, remaining: MAX_REQUESTS - entry.count };
}
