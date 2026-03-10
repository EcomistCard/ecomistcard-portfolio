"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Facebook, ArrowRight, Sparkles, Target, Heart } from "lucide-react";
import { site } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutContent() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [avatarError, setAvatarError] = useState(false);

  const about = site.aboutMe ?? {
    avatar: "/Avatar/avatar.png",
    bio: [site.description],
  };
  const avatarSrc = (about as { avatarAboutSection?: string }).avatarAboutSection ?? about.avatar ?? "/Avatar/avatar.png";
  const bioLines =
    Array.isArray(about.bio) && about.bio.length > 0 ? about.bio : [site.description];
  const vision = "vision" in about ? (about as { vision?: string }).vision : undefined;
  const values =
    "values" in about ? (about as { values?: string[] }).values : undefined;
  const facebookUrl =
    (site.contact as { facebook?: string })?.facebook || "https://www.facebook.com";

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 lg:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
          About
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          {site.name} — {site.tagline}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8 lg:space-y-10"
      >
        {/* Hero card: Avatar + intro */}
        <motion.article
          variants={cardItem}
          className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/60 shadow-xl dark:shadow-none backdrop-blur-sm p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
        >
          <div className="shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 ring-2 ring-gray-200/60 dark:ring-white/15 shadow-lg">
              {!avatarError && avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={site.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 160px, 192px"
                  priority
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-4xl font-bold text-slate-500 dark:text-slate-400">
                  {site.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {site.name}
            </h2>
            <p className="text-accent font-semibold text-lg mb-4">{site.tagline}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {site.description}
            </p>
          </div>
        </motion.article>

        {/* Bio card */}
        <motion.article
          variants={cardItem}
          className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/60 shadow-lg dark:shadow-none backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              My Story & Approach
            </h3>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            {bioLines.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.article>

        {/* Vision card */}
        {vision && (
          <motion.article
            variants={cardItem}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/60 shadow-lg dark:shadow-none backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Target className="w-5 h-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                My Vision
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-[52px] sm:pl-0">
              {vision}
            </p>
          </motion.article>
        )}

        {/* Values card */}
        {values && values.length > 0 && (
          <motion.article
            variants={cardItem}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/60 shadow-lg dark:shadow-none backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Heart className="w-5 h-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                What I Value
              </h3>
            </div>
            <ul className="flex flex-wrap gap-3 pl-[52px] sm:pl-0">
              {values.map((value, i) => (
                <li
                  key={i}
                  className="px-4 py-2 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base"
                >
                  {value}
                </li>
              ))}
            </ul>
          </motion.article>
        )}

        {/* CTA card: Learn more on Facebook */}
        <motion.article
          variants={cardItem}
          className="relative overflow-hidden rounded-2xl border-2 border-accent/30 dark:border-accent/40 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 p-6 sm:p-8 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 max-w-xl mx-auto">
            Want to see more of my day-to-day, projects, and thoughts? Connect with me on Facebook.
          </p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200"
          >
            <Facebook className="w-5 h-5" />
            Learn more about me on Facebook
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.article>
      </motion.div>
    </section>
  );
}
