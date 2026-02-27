import Link from "next/link";
import { ArrowRight, Check, X, Target, Zap } from "lucide-react";
import { site } from "@/lib/site";
import { allCaseStudies } from "@/data/caseStudies";
import QualificationForm from "./QualificationForm";

const IDEAL_CLIENTS = [
  "Growth-focused e-commerce brands ($50k+ monthly revenue)",
  "Startups and scale-ups with technical bottlenecks",
  "Teams with budget and urgency ($15k+ engagement range)",
  "Founders who value strategic partnership over commodity work",
  "Organizations ready to move within 1–6 months",
];

const NON_IDEAL_CLIENTS = [
  "Early-stage ideas without traction or budget",
  "Projects under $5k or seeking lowest-cost options",
  "Teams without decision authority or timeline",
  "Commodity development without strategic component",
  "Long exploratory phases without commitment",
];

const ENGAGEMENT_STEPS = [
  {
    step: 1,
    title: "Qualification",
    description: "Complete the form below. I review each submission and respond personally to fits within a few business days.",
  },
  {
    step: 2,
    title: "Strategy call",
    description: "A focused conversation to align on goals, scope, and approach. We'll determine fit and next steps.",
  },
  {
    step: 3,
    title: "Proposal & engagement",
    description: "Structured proposal with clear outcomes, deliverables, and timeline. Agreement and kickoff.",
  },
];

export default function WorkWithMeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
            Strategic engagements
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Work with{" "}
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            High-ticket technical strategy and execution for organizations that value clarity, structure, and measurable outcomes. Limited engagements, high impact.
          </p>
        </div>
      </section>

      {/* Ideal / Non-ideal */}
      <section className="py-20 border-t border-gray-200/60 dark:border-white/5 bg-gray-100/50 dark:bg-background-section/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ideal fit</h2>
              </div>
              <ul className="space-y-3">
                {IDEAL_CLIENTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <Check className="w-5 h-5 text-emerald-500/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Not the right fit</h2>
              </div>
              <ul className="space-y-3">
                {NON_IDEAL_CLIENTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                    <span className="text-gray-600 dark:text-gray-500">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Engagement process</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A structured path from qualification to engagement.
            </p>
          </div>

          <div className="space-y-8">
            {ENGAGEMENT_STEPS.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center text-accent font-semibold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlights */}
      <section className="py-20 border-t border-gray-200/60 dark:border-white/5 bg-gray-100/50 dark:bg-background-section/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Selected outcomes</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Representative engagements showcasing structure, clarity, and measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {allCaseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block glass rounded-xl p-6 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/60 dark:border-white/5 hover:border-accent/30 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-accent">{study.industry}</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm line-clamp-2 mb-4">
                  {study.overview}
                </p>
                <span className="text-sm font-medium text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read case study
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification form */}
      <section className="py-20 border-t border-gray-200/60 dark:border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Qualification form</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Complete this form to explore a strategic engagement. I review each submission personally.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 sm:p-10 border border-gray-200/60 dark:border-white/5">
            <QualificationForm />
          </div>
        </div>
      </section>
    </>
  );
}
