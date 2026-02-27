import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { Check } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | " + site.name };
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-block text-accent hover:text-accent-hover font-medium text-sm mb-8 transition-colors"
        >
          ← Services
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{service.shortDescription}</p>
        </header>

        <div className="space-y-10 text-gray-600 dark:text-gray-400">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p className="leading-relaxed">{service.longDescription}</p>
          </div>

          {service.outcomes && service.outcomes.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Outcomes</h2>
              <ul className="space-y-2">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deliverables</h2>
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.idealFor && service.idealFor.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ideal for</h2>
              <ul className="space-y-2">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200/60 dark:border-white/10 space-y-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors"
          >
            Discuss this service
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Or{" "}
            <Link href="/work-with-me" className="text-accent hover:text-accent-hover font-medium">
              complete the qualification form
            </Link>{" "}
            to explore a strategic engagement.
          </p>
        </div>
      </div>
    </main>
  );
}
