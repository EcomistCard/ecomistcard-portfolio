import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for technical strategy, consulting, and high-value development engagements.`,
  openGraph: { title: `Contact | ${site.name}`, description: site.description },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <ContactContent />
    </main>
  );
}
