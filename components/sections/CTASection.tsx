"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Twitter, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const contact = site.contact ?? { email: "Cardlymartins@gmail.com", github: "https://github.com/cardlymartins", twitter: "#" };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="lets-work"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-gray-50/90 to-white/80 dark:from-background dark:to-transparent"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,600px)] h-[400px] bg-accent/[0.06] dark:bg-accent/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-14 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass rounded-2xl p-8 sm:p-10 border border-gray-200/60 dark:border-white/10 text-left max-w-lg mx-auto mb-12 shadow-xl dark:shadow-none relative overflow-hidden"
        >
          {/* Premium border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-2 ring-accent/20 dark:ring-accent/30" aria-hidden />
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h3>
          <div className="space-y-3">
            <motion.a
              variants={item}
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 text-accent group-hover:bg-accent/20 dark:group-hover:bg-accent/25 transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
              </span>
              <span className="font-medium">{contact.email}</span>
            </motion.a>
            <motion.a
              variants={item}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 text-accent group-hover:bg-accent/20 dark:group-hover:bg-accent/25 transition-colors">
                <Github className="w-5 h-5 shrink-0" />
              </span>
              <span className="font-medium">GitHub</span>
            </motion.a>
            <motion.a
              variants={item}
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 -mx-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 text-accent group-hover:bg-accent/20 dark:group-hover:bg-accent/25 transition-colors">
                <Twitter className="w-5 h-5 shrink-0" />
              </span>
              <span className="font-medium">Twitter (X)</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Send Message
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
