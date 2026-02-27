"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Search, DraftingCompass, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Strategy" },
  { icon: DraftingCompass, title: "Architecture Blueprint" },
  { icon: Code2, title: "Development & Testing" },
  { icon: Rocket, title: "Optimization & Launch" },
  { icon: Headphones, title: "Ongoing Support" },
];

export default function ProcessPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="methodology"
      className="py-24 lg:py-28 relative overflow-hidden rounded-none border-y border-gray-200/60 dark:border-white/5 bg-white/70 dark:bg-white/5 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Methodology</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 dark:from-accent/20 dark:via-accent/40 dark:to-accent/20" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-accent/15 dark:bg-accent/20 flex items-center justify-center text-accent border border-accent/30 mb-4"
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.08, 1],
                            opacity: [1, 0.9, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      delay: index * 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            How we work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
