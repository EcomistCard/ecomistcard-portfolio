import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for technical strategy, consulting, and high-value development engagements.`,
  openGraph: { title: `Contact | ${site.name}`, description: site.description },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Share a bit about your project, timeline, and goals. I’ll follow up with next steps and whether we’re a good fit to work together."
      />
      <main className="min-h-screen bg-slate-50 dark:bg-transparent pb-24">
        <ContactContent />
      </main>
    </>
  );
}
