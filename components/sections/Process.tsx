"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, DraftingCompass, Code2, Rocket, Headphones } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, technical requirements, and user needs to create a comprehensive strategy.",
  },
  {
    icon: <DraftingCompass className="w-6 h-6" />,
    title: "Architecture Blueprint",
    description: "Design scalable system architecture, select optimal tech stack, and plan development roadmap.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development & Testing",
    description: "Agile development with continuous testing, code reviews, and iterative improvements.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Optimization & Launch",
    description: "Performance optimization, security audits, and seamless deployment to production.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Ongoing Support",
    description: "Continuous monitoring, updates, and strategic improvements to ensure long-term success.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-background-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-blue-500 to-accent opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent border-2 border-accent/30">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
