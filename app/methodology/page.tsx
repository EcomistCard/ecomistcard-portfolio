import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import MethodologyContent from "@/components/sections/MethodologyContent";

export const metadata: Metadata = {
  title: "Methodology",
  description: `How ${site.name} delivers: discovery, architecture, development, optimization, and ongoing support. A structured approach to technical engagements.`,
  openGraph: { title: `Methodology | ${site.name}`, description: site.description },
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        title="Methodology"
        description="A structured, repeatable process for going from discovery to launch. See how engagements move from strategy to architecture, implementation, and ongoing support."
      />
      <main className="min-h-screen bg-slate-50 dark:bg-transparent pb-24">
        <MethodologyContent />
      </main>
    </>
  );
}
