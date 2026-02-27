"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [avatarError, setAvatarError] = useState(false);

  const about = site.aboutMe ?? {
    avatar: "/asset/avatar.jpg",
    bio: [site.description],
  };
  const avatarSrc = (about as { avatarAboutSection?: string }).avatarAboutSection ?? about.avatar ?? "/asset/avatar.jpg";
  const bioLines = Array.isArray(about.bio) && about.bio.length > 0 ? about.bio : [site.description];
  const vision = "vision" in about ? (about as { vision?: string }).vision : undefined;
  const values = "values" in about ? (about as { values?: string[] }).values : undefined;

  return (
    <section
      ref={ref}
      id="about-me"
      className="py-28 lg:py-32 relative overflow-hidden bg-white/80 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack engineer dedicated to building systems that create real impact
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="grid lg:grid-cols-[minmax(280px,380px),1fr] gap-12 lg:gap-16 items-center"
        >
          {/* Avatar */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 ring-1 ring-gray-200/60 dark:ring-white/10 shadow-xl">
              {!avatarError && avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={site.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 380px"
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
          </motion.div>

          {/* Details */}
          <div className="space-y-6">
            <motion.h3
              variants={item}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              {site.name}
            </motion.h3>
            <motion.p
              variants={item}
              className="text-lg text-accent font-medium"
            >
              {site.tagline}
            </motion.p>
            <div className="space-y-4">
              {bioLines.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={item}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            {vision && (
              <motion.div variants={item}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">My Vision</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{vision}</p>
              </motion.div>
            )}
            {values && values.length > 0 && (
              <motion.div variants={item}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">My Values</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {values.join(", ")}
                </p>
              </motion.div>
            )}
            <motion.div variants={item}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors group"
              >
                More about me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
