"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ExplorePortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24 relative bg-slate-950 border-y border-slate-800"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-transparent to-accent/10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Ready to Build Something That Scales?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Whether you&apos;re launching a new product, fixing a slow store, or need a strategic
          technical partner — let&apos;s talk.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
