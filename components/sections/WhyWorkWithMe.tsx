"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code2, Handshake, Zap } from "lucide-react";
import { whyWorkWithMe } from "@/lib/design";

const iconMap = { Target, Code2, Handshake, Zap } as const;

export default function WhyWorkWithMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-work-with-me"
      ref={ref}
      className="py-28 lg:py-32 relative overflow-hidden bg-gray-50/80 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Why work with me
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            What clients get
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Outcome-focused technical strategy and execution built for growth-focused organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyWorkWithMe.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-2xl p-6 lg:p-8 border border-gray-200/60 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 dark:bg-accent/20 text-accent mb-5">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
