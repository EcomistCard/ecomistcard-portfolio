"use client";

import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", projectDetails: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", projectDetails: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Ready to discuss your project? Start a conversation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-background-section border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-gray-900 dark:text-white placeholder-gray-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-background-section border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-gray-900 dark:text-white placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Project details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white dark:bg-background-section border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-gray-900 dark:text-white placeholder-gray-500 resize-none"
              placeholder="Goals, timeline, and what you're looking for..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            Send message
            <Send className="w-5 h-5" />
          </button>
        </form>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Get in touch</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Whether you're launching a new product, optimizing existing systems, or need
              strategic technical guidance, I'm here to help bring your vision to life.
            </p>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@example.com</span>
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Connect</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10 transition-colors border border-gray-200/60 dark:border-white/5"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10 transition-colors border border-gray-200/60 dark:border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
