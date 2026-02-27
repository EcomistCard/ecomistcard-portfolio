import type { Metadata } from "next";
import { site } from "@/lib/site";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.tagline}. ${site.description}`,
  openGraph: { title: `About | ${site.name}`, description: site.description },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <AboutContent />
    </main>
  );
}
