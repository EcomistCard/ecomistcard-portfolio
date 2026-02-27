"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, ShoppingCart, Zap, Target } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Digital Product Development",
    description: "End-to-end development of web applications, SaaS platforms, and digital products with focus on scalability and user experience.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Architecture",
    description: "Custom e-commerce solutions, marketplace platforms, and payment integrations designed for high conversion and performance.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Technical Optimization",
    description: "Performance audits, infrastructure optimization, and system refactoring to improve speed, scalability, and cost efficiency.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategic Consulting",
    description: "Technical strategy, architecture planning, and technology decisions to align with business goals and growth objectives.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Outcome-focused solutions for modern digital challenges
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-accent/50"
              whileHover={{ y: -4 }}
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
