import type { CaseStudyData } from "@/components/sections/CaseStudy";

export type CaseStudyWithSlug = CaseStudyData & { slug: string };

export const survivalPrepCaseStudy: CaseStudyWithSlug = {
  slug: "survival-prep",
  title: "Survival Prep",
  industry: "Preparedness & Multi-Product Survival Accessories",
  overview:
    "Survival Prep is a multi-product e-commerce brand focused on survival accessories, emergency tools, and preparedness essentials. Operating in a competitive niche with high buyer intent and trust sensitivity, the store required a structured, performance-driven architecture to improve clarity, authority, and scalability.",
  challenge: {
    description:
      "The store contained a wide range of survival accessories across multiple categories, which created:",
    bulletPoints: [
      "Navigation complexity",
      "Collection overlap",
      "Product discoverability friction",
      "Mobile usability bottlenecks",
      "Conversion pathway inefficiencies",
    ],
  },
  strategicObjectives: [
    "Design a scalable product architecture",
    "Improve collection hierarchy clarity",
    "Optimize mobile-first experience",
    "Strengthen conversion structure",
    "Enhance perceived authority and trust",
  ],
  approach: [
    {
      heading: "Information Architecture Engineering",
      items: [
        "Re-structured product collections based on use-case grouping",
        "Simplified navigation depth",
        "Implemented logical product categorization",
        "Reduced redundancy across accessories",
      ],
    },
    {
      heading: "Conversion-Focused Product Pages",
      items: [
        "Reordered content hierarchy for clarity",
        "Structured benefit-driven product descriptions",
        "Improved CTA positioning",
        "Enhanced trust signals placement",
        "Optimized above-the-fold content",
      ],
    },
    {
      heading: "Performance & Technical Optimization",
      items: [
        "Optimized image assets",
        "Reduced unnecessary scripts",
        "Improved theme responsiveness",
        "Enhanced mobile usability",
        "Structured layout for performance stability",
      ],
    },
    {
      heading: "Authority Positioning",
      items: [
        "Clean tactical aesthetic without visual clutter",
        "Structured messaging for clarity",
        "Consistent brand presentation across collections",
        "Professional storefront layout",
      ],
    },
  ],
  technologyStack: [
    "Shopify (Liquid templating)",
    "Custom CSS adjustments",
    "JavaScript refinements",
    "Performance auditing tools",
    "SEO-focused structural improvements",
  ],
  outcome: [
    "Improved product discoverability",
    "Clearer category structure",
    "More intuitive mobile browsing experience",
    "Stronger conversion flow",
    "Scalable foundation for traffic growth",
  ],
  keyInsight:
    "In multi-product survival e-commerce, structure is revenue. By engineering clarity into complexity, the store evolved from a standard online shop into a performance-focused digital system built for long-term scalability.",
  featuredImage: "/Featured%20Projects/survival-featured.png",
};

export const smkfusionCaseStudy: CaseStudyWithSlug = {
  slug: "smkfusion",
  title: "SMKFusion Backend System Engineering",
  industry: "Multi-Niche E-Commerce / Shopify & Custom Integrations",
  overview:
    "SMKFusion is a multi-product, multi-niche e-commerce brand with high operational complexity. The client required a backend system capable of managing multiple product categories and inventory simultaneously, automating workflows across order processing and fulfillment, integrating third-party applications, and ensuring scalability for growing traffic. The goal was to create a robust, automated, and scalable backend architecture to support rapid business growth.",
  challenge: {
    description: "Core challenges identified:",
    bulletPoints: [
      "Multiple disconnected apps and workflows",
      "Manual order and inventory updates causing delays",
      "Slow data processing affecting reporting",
      "Lack of automation in marketing workflows",
      "Inconsistent integration between Shopify and external tools",
    ],
  },
  strategicObjectives: [
    "Design a modular backend system for multi-product management",
    "Automate order routing, fulfillment, and inventory sync",
    "Integrate third-party apps with clear protocols",
    "Ensure scalability and performance for traffic growth",
    "Establish reliable error handling and maintainable workflows",
  ],
  approach: [
    {
      heading: "Backend Architecture Design",
      items: [
        "Audited existing Shopify workflows",
        "Designed a modular backend system for multi-product management",
        "Established clear integration protocols for third-party apps",
        "Structured database connections for scalability",
      ],
    },
    {
      heading: "Automation Implementation",
      items: [
        "Automated order routing and fulfillment updates",
        "Implemented inventory syncing across multiple sales channels",
        "Configured automatic reporting dashboards",
        "Integrated email marketing automation triggers based on customer behavior",
      ],
    },
    {
      heading: "Performance & Scalability",
      items: [
        "Optimized Shopify Liquid backend code for faster processing",
        "Deferred non-critical API calls",
        "Introduced structured caching for repetitive operations",
        "Monitored backend metrics and load times",
      ],
    },
    {
      heading: "System Reliability & Authority",
      items: [
        "Implemented robust error logging and notifications",
        "Designed maintainable workflows for future expansion",
        "Standardized processes to reduce human error",
      ],
    },
  ],
  technologyStack: [
    "Shopify Liquid & Shopify APIs",
    "Node.js automation scripts",
    "Third-party integrations: email, analytics, inventory",
    "Performance monitoring tools",
    "Custom dashboards for reporting",
  ],
  outcome: [
    "Reduced manual order processing by 70%",
    "Automated inventory syncing across 5 sales channels",
    "Eliminated reporting delays with faster backend data processing",
    "Increased reliability of operations and reduced errors",
    "Scalable architecture ready for 3x traffic growth",
  ],
  keyInsight:
    "Strong backend systems are the backbone of multi-niche e-commerce. By automating workflows and engineering reliable backend architecture, SMKFusion now operates efficiently at scale, allowing the business to focus on growth rather than maintenance. Technical strategy + backend engineering = scalable e-commerce authority.",
  featuredImage: "/Featured%20Projects/smk-featured.png",
};

export const luxuryPetStoreCaseStudy: CaseStudyWithSlug = {
  slug: "luxury-pet-store",
  title: "Your Luxury Pet Store — Performance Optimization & Core Web Vitals",
  industry: "Premium Pet E-Commerce",
  overview:
    "Your Luxury Pet Store offers high-end pet products to a niche audience with high expectations for speed, trust, and usability. The store faced performance challenges: slow page load times on mobile, poor Core Web Vitals metrics (LCP, CLS, INP), decreased conversion rates on high-traffic product pages, and heavy third-party scripts affecting speed and UX. The objective was to implement performance-first optimization strategies that improve user experience, Core Web Vitals, and ultimately, revenue.",
  challenge: {
    description: "Core challenges identified:",
    bulletPoints: [
      "Largest images were unoptimized for mobile",
      "Third-party apps added unnecessary JS weight",
      "Theme structure caused layout shifts",
      "Above-the-fold content was slow to render",
      "Conversion CTAs loaded late on product pages",
    ],
  },
  strategicObjectives: [
    "Improve Core Web Vitals (LCP, CLS, INP)",
    "Optimize above-the-fold rendering",
    "Reduce third-party script impact",
    "Enhance mobile conversion and UX",
    "Establish ongoing performance monitoring",
  ],
  approach: [
    {
      heading: "Performance Audit & Analysis",
      items: [
        "Full Lighthouse & Core Web Vitals review",
        "Identified slow-loading assets and scripts",
        "Evaluated theme structure and critical render paths",
      ],
    },
    {
      heading: "Frontend Optimization",
      items: [
        "Compressed and lazy-loaded hero images",
        "Deferred non-critical JavaScript",
        "Minimized CSS & removed unused styles",
        "Optimized above-the-fold rendering",
      ],
    },
    {
      heading: "Conversion-Focused UX Enhancements",
      items: [
        "Preloaded key CTAs for faster clickability",
        "Ensured smooth scrolling & reduced layout shifts",
        "Reorganized product page hierarchy for clarity",
      ],
    },
    {
      heading: "Monitoring & Continuous Improvement",
      items: [
        "Implemented ongoing performance monitoring",
        "Set up automated alerts for Core Web Vital regressions",
        "Built scalable theme structure for future products",
      ],
    },
  ],
  technologyStack: [
    "Shopify (Liquid & theme optimization)",
    "JavaScript performance tuning",
    "Tailwind CSS refinement",
    "Performance auditing tools (Lighthouse, GTMetrix)",
    "SEO & Core Web Vitals monitoring tools",
  ],
  outcome: [
    "Largest Contentful Paint (LCP) improved by 45%",
    "Cumulative Layout Shift (CLS) reduced to 0.03",
    "Interaction to Next Paint (INP) improved by 35%",
    "Mobile conversion rate increased by 20%",
    "Overall store speed score reached 95+ (Lighthouse)",
  ],
  keyInsight:
    "Performance optimization directly drives trust and conversion. By focusing on Core Web Vitals and mobile-first UX, Your Luxury Pet Store transformed into a high-speed, professional e-commerce experience, positioning the brand as trustworthy, premium, and ready for growth. This demonstrates the critical intersection of technical excellence + business impact.",
  featuredImage: "/Featured%20Projects/luxury-pet-featured.png",
};

export const caseStudiesBySlug: Record<string, CaseStudyWithSlug> = {
  "survival-prep": survivalPrepCaseStudy,
  smkfusion: smkfusionCaseStudy,
  "luxury-pet-store": luxuryPetStoreCaseStudy,
};

export const allCaseStudies: CaseStudyWithSlug[] = [
  survivalPrepCaseStudy,
  smkfusionCaseStudy,
  luxuryPetStoreCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudyWithSlug | undefined {
  return caseStudiesBySlug[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return allCaseStudies.map((c) => c.slug);
}
