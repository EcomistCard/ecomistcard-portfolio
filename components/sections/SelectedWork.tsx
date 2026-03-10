 "use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { allCaseStudies } from "@/data/caseStudies";

function getOutcomeStat(study: (typeof allCaseStudies)[number]): string | undefined {
  if (Array.isArray(study.outcome) && study.outcome.length > 0) {
    return study.outcome[0];
  }
  return undefined;
}

function getOneSentenceOverview(overview: string): string {
  const trimmed = overview.trim();
  const firstPeriodIndex = trimmed.indexOf(".");
  if (firstPeriodIndex === -1 || firstPeriodIndex > 260) {
    return trimmed.length > 260 ? `${trimmed.slice(0, 257)}...` : trimmed;
  }
  return trimmed.slice(0, firstPeriodIndex + 1);
}

export default function SelectedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 lg:py-32 relative bg-white/80 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A focused look at recent work and the measurable outcomes it delivered.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {allCaseStudies.map((study, index) => {
            const outcomeStat = getOutcomeStat(study);
            const overviewSentence = getOneSentenceOverview(study.overview);

            return (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200/70 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="relative w-full aspect-[4/3] overflow-hidden"
                >
                  {study.featuredImage ? (
                    <Image
                      src={study.featuredImage}
                      alt={study.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900" />
                  )}
                </Link>

                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-2">
                    {study.industry}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {study.title}
                  </h3>

                  {outcomeStat && (
                    <p className="text-sm font-semibold text-accent mb-3">
                      {outcomeStat}
                    </p>
                  )}

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {overviewSentence}
                  </p>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    View Case Study
                    <FileText className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            View all projects
            <FileText className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

