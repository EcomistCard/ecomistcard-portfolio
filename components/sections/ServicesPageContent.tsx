"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ServicesPageContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <main className="min-h-screen pt-28 pb-24 bg-slate-50/80 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width hero banner for Services */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-16 overflow-hidden rounded-3xl bg-slate-950 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]"
        >
          {/* Background image + gradient overlay */}
          <div className="absolute inset-0">
            <Image
              src="/hero-cardly-premium.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/35" />
          </div>

          {/* Text content over the banner */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-6 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-16 max-w-xl">
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-[0.25em] mb-3">
                What I offer
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Services
              </h1>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
                Outcome-focused technical strategy and execution for high-value clients and consulting
                engagements. Every engagement is designed to ship fast, feel premium, and convert.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={cardItem}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-2xl overflow-hidden border border-gray-200/70 dark:border-white/10 bg-white dark:bg-white/5 shadow-lg hover:shadow-xl dark:shadow-none hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card image or gradient placeholder */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-slate-800/60 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                      <Sparkles className="w-12 h-12 text-accent/60" />
                    </div>
                  )}
                  {/* Subtle gradient overlay for text readability on image */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden
                  />
                </div>

                <div className="p-6 lg:p-7">
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent transition-colors line-clamp-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200">
                    Learn more
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
