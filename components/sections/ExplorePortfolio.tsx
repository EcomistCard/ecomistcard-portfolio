"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  User,
  DraftingCompass,
  FolderOpen,
  BookOpen,
  Handshake,
  MessageCircle,
} from "lucide-react";
const exploreLinks = [
  { href: "/about", label: "About", description: "Background, values, and how I work", Icon: User },
  { href: "/methodology", label: "Methodology", description: "Structured approach to delivery", Icon: DraftingCompass },
  { href: "/case-studies", label: "Case Studies", description: "Full project stories and outcomes", Icon: FolderOpen },
  { href: "/insights", label: "Insights", description: "Technical thinking and articles", Icon: BookOpen },
  { href: "/work-with-me", label: "Work With Me", description: "Start a project or engagement", Icon: Handshake },
  { href: "/contact", label: "Contact", description: "Get in touch directly", Icon: MessageCircle },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ExplorePortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 lg:py-32 relative bg-slate-50/80 dark:bg-slate-900/30 border-y border-gray-200/60 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Explore
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            More to discover
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Dig deeper into how I work, past projects, and how we can collaborate.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {exploreLinks.map(({ href, label, description, Icon }) => (
            <motion.div key={href} variants={item}>
              <Link
                href={href}
                className="group flex items-start gap-4 p-5 lg:p-6 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-white/5 hover:border-accent/40 dark:hover:border-accent/40 hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 h-full"
              >
                <span className="flex shrink-0 w-12 h-12 rounded-xl bg-accent/15 dark:bg-accent/20 text-accent flex items-center justify-center group-hover:bg-accent/25 dark:group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    Visit page
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
