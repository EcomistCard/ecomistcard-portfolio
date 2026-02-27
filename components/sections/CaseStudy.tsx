import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface CaseStudyApproachStep {
  heading: string;
  items: string[];
}

export interface CaseStudyData {
  title: string;
  industry: string;
  overview: string;
  challenge?: {
    description: string;
    bulletPoints?: string[];
  };
  strategicObjectives?: string[];
  approach?: CaseStudyApproachStep[];
  technologyStack: string[];
  outcome?: string[];
  keyInsight?: string;
  liveLink?: string;
  githubLink?: string;
  /** Optional hero/featured image for the case study (e.g. on Featured Projects) */
  featuredImage?: string;
}

interface CaseStudyProps {
  data: CaseStudyData;
  className?: string;
}

function SectionDivider() {
  return (
    <hr className="border-gray-600/50 dark:border-gray-500/30 my-10" />
  );
}

export default function CaseStudy({ data, className = "" }: CaseStudyProps) {
  const {
    title,
    industry,
    overview,
    challenge,
    strategicObjectives,
    approach,
    technologyStack,
    outcome,
    keyInsight,
    liveLink,
    githubLink,
  } = data;

  return (
    <article className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      {/* Header */}
      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
          Case Study: {title}
        </h1>
        <p className="text-sm font-medium text-blue-700 dark:text-accent">{industry}</p>
        {(liveLink || githubLink) && (
          <div className="flex gap-4 mt-6">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass hover:bg-gray-100/80 dark:hover:bg-white/10 rounded-lg font-medium transition-colors text-sm border border-gray-200/60 dark:border-white/5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        )}
      </header>

      <SectionDivider />

      {/* Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{overview}</p>
      </section>

      {challenge && (
        <>
          <SectionDivider />
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              The Challenge
            </h2>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">{challenge.description}</p>
            {challenge.bulletPoints && challenge.bulletPoints.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
                {challenge.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}

      {strategicObjectives && strategicObjectives.length > 0 && (
        <>
          <SectionDivider />
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Strategic Objectives
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
              {strategicObjectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      {approach && approach.length > 0 && (
        <>
          <SectionDivider />
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              My Approach
            </h2>
            <div className="space-y-6">
              {approach.map((step, stepIndex) => (
                <div key={stepIndex}>
                  <h3 className="font-medium text-gray-800 dark:text-gray-300 mb-2">
                    {stepIndex + 1}. {step.heading}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 ml-2">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* Technology Stack */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologyStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-accent/10 dark:text-accent rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {outcome && outcome.length > 0 && (
        <>
          <SectionDivider />
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Outcome
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
              {outcome.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      {keyInsight && (
        <>
          <SectionDivider />
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Key Insight
            </h2>
            <blockquote className="text-gray-700 dark:text-gray-300 italic border-l-4 border-accent pl-4 py-2">
              {keyInsight}
            </blockquote>
          </section>
        </>
      )}

      <SectionDivider />

      <section className="pt-4">
        <p className="text-gray-600 dark:text-gray-500 text-sm mb-4">
          Interested in a strategic engagement? Explore the qualification process.
        </p>
        <Link
          href="/work-with-me"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
        >
          Work with me
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  );
}
