import type { Metadata } from "next";
import { site } from "@/lib/site";
import MethodologyContent from "@/components/sections/MethodologyContent";

export const metadata: Metadata = {
  title: "Methodology",
  description: `How ${site.name} delivers: discovery, architecture, development, optimization, and ongoing support. A structured approach to technical engagements.`,
  openGraph: { title: `Methodology | ${site.name}`, description: site.description },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <MethodologyContent />
    </main>
  );
}
