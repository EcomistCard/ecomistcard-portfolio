"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { insights } from "@/data/insights";

export default function InsightsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      className="py-24 lg:py-28 relative border-y border-gray-200/60 dark:border-white/5 bg-white/70 dark:bg-white/5 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Insights</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technical thinking on architecture, performance, and scalable systems
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {insights.slice(0, 3).map((insight, index) => (
            <motion.div
              key={insight.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/insights/${insight.slug}`}
                className="block rounded-xl p-6 border border-gray-200/70 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md hover:border-accent/30 dark:hover:border-accent/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-accent font-medium">{insight.category}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(insight.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{insight.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            All insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
