"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trustStats } from "@/lib/design";

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-14 border-y border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm"
      aria-label="Credibility"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent dark:text-accent mb-1 tabular-nums">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
