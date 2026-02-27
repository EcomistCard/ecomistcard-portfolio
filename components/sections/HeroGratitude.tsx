"use client";

import Link from "next/link";
import { site } from "@/lib/site";

const snippets = site.testimonialSnippets ?? [
  { name: "Client", quote: "Exceptional work! Delivered beyond expectations." },
  { name: "Client", quote: "Best investment for our digital transformation." },
  { name: "Client", quote: "Strategic approach and deep technical skills." },
];

export default function HeroGratitude() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 z-0" aria-hidden />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
          {site.name}
        </h1>
        <p className="text-xl sm:text-2xl text-accent font-semibold mb-6">
          Full-Stack Engineer
        </p>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          {site.tagline}
        </p>
        <p className="text-slate-400 max-w-xl mx-auto mb-12">
          {site.description}
        </p>

        {/* Testimonial snippets - gratitude style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          {snippets.map((t, i) => (
            <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-white/90 text-sm font-medium mb-1">{t.name}</p>
              <p className="text-slate-400 text-sm">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/work-with-me"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
          >
            Hire Me
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-medium rounded-lg transition-colors"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
