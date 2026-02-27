"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

interface Insight {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const insights: Insight[] = [
  {
    title: "Building Scalable Architecture for Startups",
    excerpt: "Key principles for designing systems that grow with your business, from MVP to scale.",
    date: "Jan 15, 2026",
    category: "Architecture",
  },
  {
    title: "Performance Optimization Strategies",
    excerpt: "Practical techniques to improve load times, reduce costs, and enhance user experience.",
    date: "Dec 20, 2025",
    category: "Performance",
  },
  {
    title: "Modern E-commerce Best Practices",
    excerpt: "Lessons learned from building high-converting e-commerce platforms and marketplaces.",
    date: "Nov 10, 2025",
    category: "E-commerce",
  },
];

export default function Authority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Thinking</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights on architecture, performance, and building scalable systems
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-medium">{insight.category}</span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  {insight.date}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {insight.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{insight.excerpt}</p>
              <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
