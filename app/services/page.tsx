import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: `Technical services by ${site.name}: digital product engineering, e-commerce architecture, Shopify optimization, performance, conversion, auditing, refactoring, and advisory.`,
  openGraph: { title: `Services | ${site.name}`, description: site.description },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What I offer"
        title="Services"
        description="Outcome-focused technical strategy and execution for high-value clients and consulting engagements. Every engagement is designed to ship fast, feel premium, and convert."
        backgroundImageSrc="/hero-cardly-premium.png"
      />
      <main className="min-h-screen pb-24 bg-slate-50/80 dark:bg-transparent">
        <ServicesPageContent />
      </main>
    </>
  );
}
