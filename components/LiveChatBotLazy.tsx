"use client";

import dynamic from "next/dynamic";

const LiveChatBot = dynamic(() => import("@/components/LiveChatBot"), {
  ssr: false,
  loading: () => null,
});

export default function LiveChatBotLazy() {
  return <LiveChatBot />;
}
