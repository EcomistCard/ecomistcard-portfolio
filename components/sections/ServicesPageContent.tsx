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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Long-form intro explaining how services work */}
      <section className="mb-16 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          A services model built for serious projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          Whether you are shipping a new product, stabilizing an existing platform, or preparing for
          a major growth phase, you need more than one-off tasks. You need a technical partner who
          can think in systems, design clean architecture, and execute with discipline.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          Each service below is structured as a clear engagement type&mdash;with defined outcomes,
          deliverables, and a process that respects your time. Clients typically start with one core
          engagement (for example, an audit or product build) and then extend into optimization or
          advisory once the foundations are in place.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base mb-4">
          <li>Outcome-first: scoped around measurable results, not vague deliverables.</li>
          <li>Architecture-minded: decisions are made to support scale, maintainability, and clarity.</li>
          <li>Transparent: you know what we&apos;re doing, why, and how it moves the business forward.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Browse the services below to see where your current needs fit best. You can dive into each
          service for a deeper breakdown of scope, process, and what you can expect from an
          engagement.
        </p>
      </section>

      {/* Services grid */}
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
  );
}
