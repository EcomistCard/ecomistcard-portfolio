import { Search, DraftingCompass, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "Deep dive into your business goals, technical requirements, and user needs to create a comprehensive strategy and scope.",
  },
  {
    icon: DraftingCompass,
    title: "Architecture Blueprint",
    description:
      "Design scalable system architecture, select optimal tech stack, and plan development roadmap with clear milestones.",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description:
      "Agile development with continuous testing, code reviews, and iterative improvements. Quality and maintainability are non-negotiable.",
  },
  {
    icon: Rocket,
    title: "Optimization & Launch",
    description:
      "Performance optimization, security checks, and seamless deployment to production. We ensure stability before handoff.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Optional retainer for monitoring, updates, and strategic improvements to ensure long-term success and evolution.",
  },
];

export default function MethodologyContent() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Methodology</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A structured approach to delivering exceptional technical outcomes. Every engagement follows a clear path from discovery to delivery.
        </p>
      </div>

      <div className="relative space-y-12">
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative flex gap-8 items-start"
            >
              <div className="hidden lg:flex shrink-0 w-16 h-16 rounded-full bg-accent/20 border border-accent/30 items-center justify-center text-accent">
                <Icon className="w-7 h-7" />
              </div>
              <div className="lg:pt-1">
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
