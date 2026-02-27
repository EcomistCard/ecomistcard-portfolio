import type { Metadata } from "next";
import { site } from "@/lib/site";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: `Technical services by ${site.name}: digital product engineering, e-commerce architecture, Shopify optimization, performance, conversion, auditing, refactoring, and advisory.`,
  openGraph: { title: `Services | ${site.name}`, description: site.description },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
