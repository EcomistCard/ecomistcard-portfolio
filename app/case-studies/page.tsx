import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { allCaseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Selected case studies by ${site.name}: e-commerce, Shopify, and digital product engagements with measurable outcomes.`,
  openGraph: { title: `Case Studies | ${site.name}`, description: site.description },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Case Studies</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Selected engagements showcasing scalable solutions, clear methodology, and measurable impact.
          </p>
        </div>

        <div className="space-y-8">
          {allCaseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block glass rounded-xl p-8 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/60 dark:border-white/5 hover:border-accent/30"
            >
              <span className="text-sm text-accent font-medium">{study.industry}</span>
              <h2 className="text-2xl font-bold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                {study.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">{study.overview}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                Read case study
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200/60 dark:border-white/5">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in a strategic engagement? Explore the qualification process.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors"
          >
            Work with me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
