/**
 * Hardcoded FAQ for the portfolio chatbot.
 * Used to answer common questions without relying solely on the LLM.
 * All content is derived from the site and portfolio context.
 */

export interface FAQItem {
  q: string;
  a: string;
  keywords: string[]; // for optional matching
}

export const PORTFOLIO_FAQ: FAQItem[] = [
  {
    q: "Who is Cardly Martins?",
    a: "Cardly Martins is a Full-Stack Engineer and Technical Strategist. He builds scalable, high-performance digital systems for high-value clients and consulting engagements, with a focus on clean architecture, performance, and maintainability.",
    keywords: ["who", "cardly", "martins", "about", "background", "developer", "experience", "your experience", "tell me about"],
  },
  {
    q: "What services does Cardly offer?",
    a: "Cardly specializes in high-performance web applications, SaaS architecture, e-commerce systems, Core Web Vitals optimization, AI integrations, and modern UI engineering. He partners with startups and growth-focused brands to design and build systems that scale.",
    keywords: ["services", "offer", "what do you do", "hire", "consulting"],
  },
  {
    q: "What technologies does Cardly use?",
    a: "Core tech stack: Next.js, React, TypeScript, Node.js. Strengths include performance optimization, API design, clean UI systems, and architecture planning.",
    keywords: ["tech", "technologies", "stack", "skills", "nextjs", "react", "typescript", "node"],
  },
  {
    q: "Tell me about Survival Prep project",
    a: "Survival Prep is a case study featuring scalable e-commerce structure, conversion-focused architecture, and structured product taxonomy. Client testimonial: 'Cardly delivered beyond expectations. His ability to understand our vision and translate it into a functional, beautiful product was remarkable.' — Ashley Latasha, Founder.",
    keywords: ["survival prep", "e-commerce", "ecommerce", "case study"],
  },
  {
    q: "Tell me about SMKFusion project",
    a: "SMKFusion is a workflow automation SaaS with modular system architecture, role-based access control, and API integrations. Testimonial: 'Incredible professionalism and technical skills. Our platform now runs flawlessly thanks to his expertise.' — Dorothy, SMKFusion Company.",
    keywords: ["smkfusion", "saas", "workflow", "automation", "saas project", "explain your saas", "your saas"],
  },
  {
    q: "Tell me about the Luxury Pet Store project",
    a: "Luxury Pet Store focused on Core Web Vitals optimization, performance refactoring, Lighthouse score improvements, load time reduction, and conversion improvement.",
    keywords: ["luxury pet", "performance", "core web vitals", "lighthouse", "optimization", "optimize performance", "how did you optimize"],
  },
  {
    q: "How can I work with or hire Cardly?",
    a: "For new projects or consulting, use the Contact page on this website. Cardly works with startups and growth-focused brands on digital product engineering, e-commerce, and technical strategy.",
    keywords: ["hire", "work together", "contact", "engage", "project", "collaborate"],
  },
  {
    q: "What is Cardly's approach to development?",
    a: "Focus on clean architecture, performance, and maintainability. He helps teams ship faster and reduce technical debt, with an emphasis on product strategy, system design, and turning complex problems into simple, reliable solutions.",
    keywords: ["approach", "methodology", "how", "process", "values"],
  },
];

/** Format FAQ as a single string for inclusion in the system prompt. */
export function getFAQBlock(): string {
  const lines = PORTFOLIO_FAQ.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
  return `## FAQ (use when the user asks similar questions)\n${lines}`;
}
