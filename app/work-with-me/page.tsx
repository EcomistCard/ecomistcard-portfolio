import type { Metadata } from "next";
import { site } from "@/lib/site";
import WorkWithMeContent from "@/components/sections/WorkWithMeContent";

export const metadata: Metadata = {
  title: "Work With Me",
  description: `Strategic technical engagements with ${site.name}. Qualification and engagement process for growth-focused organizations.`,
  openGraph: {
    title: `Work With Me | ${site.name}`,
    description: site.description,
  },
};

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <WorkWithMeContent />
    </main>
  );
}
