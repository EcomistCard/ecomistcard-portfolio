import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { getInsightBySlug, getAllInsightSlugs } from "@/data/insights";
import { Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Insight | " + site.name };
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: `${insight.title} | ${site.name}`,
      description: insight.excerpt,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  for (const line of lines) {
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <h2 key={i} className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
          {line.slice(2, -2)}
        </h2>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          {line}
        </p>
      );
    } else {
      elements.push(<br key={i} />);
    }
    i++;
  }
  return elements;
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-block text-accent hover:text-accent-hover font-medium text-sm mb-8 transition-colors"
        >
          ← Insights
        </Link>

        <header className="mb-10">
          <span className="text-sm text-accent font-medium">{insight.category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{insight.title}</h1>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {new Date(insight.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </header>

        <div className="prose prose-invert max-w-none text-gray-600 dark:text-gray-400">
          {renderContent(insight.content)}
        </div>
      </article>
    </main>
  );
}
