import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SelectedWork from "@/components/sections/SelectedWork";
import ExplorePortfolio from "@/components/sections/ExplorePortfolio";
import ProcessPreview from "@/components/sections/ProcessPreview";
import InsightsPreview from "@/components/sections/InsightsPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
  openGraph: { title: site.name, description: site.description },
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <AboutMe />
      <ServicesPreview />
      <SelectedWork />
      <ExplorePortfolio />
      <ProcessPreview />
      <InsightsPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
