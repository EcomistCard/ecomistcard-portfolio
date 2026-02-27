import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { insights } from "@/data/insights";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: `Technical insights by ${site.name} on architecture, performance, e-commerce, and building scalable systems.`,
  openGraph: { title: `Insights | ${site.name}`, description: site.description },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Insights</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Technical thinking on architecture, performance, and building scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group block glass rounded-xl p-6 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/60 dark:border-white/5 hover:border-accent/30"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-medium">{insight.category}</span>
                <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                  <Calendar className="w-3 h-3" />
                  {new Date(insight.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                {insight.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{insight.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
