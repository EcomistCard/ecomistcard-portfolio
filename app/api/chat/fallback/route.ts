import { NextRequest, NextResponse } from "next/server";
import { getHardcodedReply } from "@/lib/chatFallback";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/chat/fallback?message=...
 * Returns a hardcoded reply for the given message. Used when the main chat POST
 * fails so the chatbot always has something to show.
 */
export async function GET(req: NextRequest) {
  const message = req.nextUrl.searchParams.get("message") ?? "";
  const reply = getHardcodedReply(message);
  return NextResponse.json({ reply }, { headers: { "Cache-Control": "no-store" } });
}
