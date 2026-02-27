"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-background-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">About</h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I specialize in building scalable, high-performance digital systems that drive business growth. 
              With a focus on full-stack development and technical strategy, I help startups and established 
              brands transform their digital presence.
            </p>
            <p>
              My development philosophy centers on <span className="text-accent font-semibold">performance-first architecture</span>, 
              clean code practices, and systems thinking. I believe in building solutions that not only meet 
              current needs but are designed to scale seamlessly as businesses grow.
            </p>
            <p>
              Every project is an opportunity to push technical boundaries while maintaining pragmatic balance 
              between innovation and reliability. I approach each challenge with strategic thinking, ensuring 
              that technical decisions align with business objectives and long-term vision.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
