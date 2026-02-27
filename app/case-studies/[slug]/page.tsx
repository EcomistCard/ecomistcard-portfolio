import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/caseStudies";
import CaseStudy from "@/components/sections/CaseStudy";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study | " + site.name };
  return {
    title: `Case Study: ${study.title}`,
    description: study.overview.slice(0, 160) + "...",
    openGraph: {
      title: `Case Study: ${study.title} | ${site.name}`,
      description: study.overview.slice(0, 160),
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const { slug: _s, ...data } = study;

  return (
    <main className="min-h-screen pt-40 pb-24 bg-slate-50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <Link
          href="/case-studies"
          className="text-accent hover:text-accent-hover font-medium text-sm transition-colors"
        >
          ← Case studies
        </Link>
      </div>
      <CaseStudy data={data} />
    </main>
  );
}
