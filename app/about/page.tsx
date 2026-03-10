import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.tagline}. ${site.description}`,
  openGraph: { title: `About | ${site.name}`, description: site.description },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        description={`${site.name} — ${site.tagline}. Learn how I think about systems, partnerships, and building long-term technical foundations.`}
      />
      <main className="min-h-screen bg-slate-50 dark:bg-transparent pb-24">
        <AboutContent />
      </main>
    </>
  );
}
