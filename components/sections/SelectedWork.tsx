"use client";

import { motion, useInView } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { allCaseStudies } from "@/data/caseStudies";

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">Featured Projects</h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Showcasing my latest work and innovative solutions
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {allCaseStudies.map((study, index) =>
            study.featuredImage ? (
              <FeaturedCaseStudyCard
                key={study.slug}
                study={study}
                index={index}
                isInView={isInView}
              />
            ) : (
              <CaseStudyCard key={study.slug} study={study} index={index} isInView={isInView} />
            )
          )}
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

/** Animative featured card: large image + content, with hover parallax and scale for a “reality” feel */
function FeaturedCaseStudyCard({
  study,
  index,
  isInView,
}: {
  study: (typeof allCaseStudies)[number];
  index: number;
  isInView: boolean;
}) {
  const problem = study.challenge?.description ?? study.overview.slice(0, 120) + "...";
  const solution =
    study.approach?.[0]?.heading && study.approach[0].items?.length
      ? `${study.approach[0].heading}: ${study.approach[0].items.slice(0, 2).join("; ")}`
      : study.overview.slice(0, 200) + "...";
  const impact = study.outcome?.join(" ") ?? study.overview.slice(0, 100) + "...";
  const featuredImage = study.featuredImage!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/5 bg-white/95 dark:bg-slate-900/40 shadow-xl dark:shadow-none backdrop-blur-sm"
      whileHover={{ y: -6 }}
    >
      <div className="flex flex-col lg:flex-row min-h-0">
        {/* Featured image: “window” with parallax-style zoom on hover */}
        <Link
          href={`/case-studies/${study.slug}`}
          className="relative block w-full lg:w-[48%] xl:w-[45%] aspect-[4/3] lg:aspect-auto lg:min-h-[320px] shrink-0 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={featuredImage}
              alt={study.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={index === 0}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden
            />
          </motion.div>
          <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            View case study →
          </span>
        </Link>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="space-y-4">
            <span className="text-sm font-medium text-blue-700 dark:text-accent">{study.industry}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">The Challenge</h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">{problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Approach</h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">{solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {study.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-accent/10 dark:text-accent rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Outcome</h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">{impact}</p>
            </div>
          </div>
          <Link
            href={`/case-studies/${study.slug}`}
            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
          >
            <FileText className="w-4 h-4" />
            Full Case Study
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyCard({
  study,
  index,
  isInView,
}: {
  study: (typeof allCaseStudies)[number];
  index: number;
  isInView: boolean;
}) {
  const problem = study.challenge?.description ?? study.overview.slice(0, 120) + "...";
  const solution =
    study.approach?.[0]?.heading && study.approach[0].items?.length
      ? `${study.approach[0].heading}: ${study.approach[0].items.slice(0, 2).join("; ")}`
      : study.overview.slice(0, 200) + "...";
  const impact = study.outcome?.join(" ") ?? study.overview.slice(0, 100) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass rounded-2xl p-8 sm:p-10 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/60 dark:border-white/5"
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-sm font-medium text-blue-700 dark:text-accent">{study.industry}</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{study.title}</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">The Challenge</h4>
              <p className="text-gray-700 dark:text-gray-400">{problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Approach</h4>
              <p className="text-gray-700 dark:text-gray-400">{solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {study.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-accent/10 dark:text-accent rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">Outcome</h4>
              <p className="text-gray-700 dark:text-gray-400">{impact}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-48 flex flex-row lg:flex-col gap-4 shrink-0">
          <Link
            href={`/case-studies/${study.slug}`}
            className="flex-1 lg:flex-none px-6 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Full Case Study
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
