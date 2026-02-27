export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  /** Optional image path for My Skills card (e.g. /asset/digital-product-engineering.png) */
  image?: string;
  outcomes?: string[];
  deliverables?: string[];
  idealFor?: string[];
}

export const services: Service[] = [
  {
    slug: "digital-product-engineering",
    title: "Digital Product Engineering",
    image: "/My%20Skills/digital-product-engineering.png",
    shortDescription: "End-to-end development of web applications, SaaS platforms, and digital products with focus on scalability and user experience.",
    longDescription: "From concept to launch, we engineer digital products that perform under scale and align with business objectives. Our approach combines modern architecture, clean code practices, and outcome-focused delivery to build systems that support growth and iteration.",
    outcomes: ["Scalable architecture from day one", "Clear technical roadmap", "Reduced time-to-market", "Maintainable codebase"],
    deliverables: ["Technical specification", "Architecture documentation", "Deployed product", "Handoff and knowledge transfer"],
    idealFor: ["Startups launching MVP or v2", "Teams needing a technical lead", "Products requiring high reliability"],
  },
  {
    slug: "ecommerce-systems-architecture",
    title: "E-Commerce Systems Architecture",
    image: "/My%20Skills/ecommerce-systems-architecture.png",
    shortDescription: "Custom e-commerce solutions, marketplace platforms, and payment integrations designed for high conversion and performance.",
    longDescription: "E-commerce that converts requires more than a theme—it requires intentional architecture. We design and implement storefronts, checkout flows, and backend systems that reduce friction, support promotions and scaling, and integrate cleanly with your operations.",
    outcomes: ["Conversion-optimized flows", "Unified catalog and inventory logic", "Scalable order and fulfillment pipeline", "Clear upgrade path"],
    deliverables: ["Architecture blueprint", "Integration specs", "Implementation support", "Performance baselines"],
    idealFor: ["Multi-product or multi-brand retailers", "Marketplaces and B2B stores", "Brands moving off legacy platforms"],
  },
  {
    slug: "shopify-infrastructure-optimization",
    title: "Shopify Infrastructure Optimization",
    image: "/My%20Skills/shopify-infrastructure-optimization.jpg",
    shortDescription: "Theme, app, and workflow optimization for Shopify stores to improve speed, clarity, and conversion without replatforming.",
    longDescription: "Maximize the platform you already use. We audit and optimize Shopify themes, app usage, and content structure so your store loads faster, navigates clearly, and presents a professional, trustworthy experience that supports conversion and retention.",
    outcomes: ["Faster load times and Core Web Vitals", "Clearer navigation and collections", "Reduced app bloat", "Mobile-first experience"],
    deliverables: ["Audit report", "Optimization roadmap", "Theme and config updates", "Documentation"],
    idealFor: ["Growing DTC brands on Shopify", "Stores with complex catalogs", "Teams wanting to reduce technical debt"],
  },
  {
    slug: "performance-engineering",
    title: "Performance Engineering",
    image: "/My%20Skills/performance-engineering.jpg",
    shortDescription: "Load times, Core Web Vitals, and front-end efficiency so your product feels fast and ranks well.",
    longDescription: "Performance is a product feature. We identify bottlenecks in front-end assets, APIs, and infrastructure, then implement fixes that improve perceived speed, SEO, and conversion. Work is data-driven and prioritized by impact.",
    outcomes: ["Improved LCP, FID, CLS", "Lower bounce and higher engagement", "Better SEO and crawlability", "Reduced infrastructure cost where applicable"],
    deliverables: ["Performance audit", "Optimization plan", "Implementation", "Before/after metrics"],
    idealFor: ["Sites with slow or inconsistent speed", "Teams preparing for traffic spikes", "SEO and conversion-focused brands"],
  },
  {
    slug: "conversion-architecture",
    title: "Conversion Architecture",
    image: "/My%20Skills/conversoion-architecture.jpg",
    shortDescription: "Structure and flow of key journeys—product pages, checkout, landing pages—to reduce friction and increase conversion.",
    longDescription: "Conversion is engineered, not accidental. We map critical user paths, identify friction points, and redesign hierarchy, copy placement, and CTAs so that structure supports trust and action. Works alongside design and copy for maximum impact.",
    outcomes: ["Clearer value proposition above the fold", "Fewer drop-offs at key steps", "Stronger trust signals", "Data-informed iteration path"],
    deliverables: ["Journey audit", "Recommendations and wireframes", "Implementation support", "Testing framework"],
    idealFor: ["High-intent stores and SaaS", "Landing and funnel pages", "Checkout and signup flows"],
  },
  {
    slug: "technical-auditing",
    title: "Technical Auditing",
    image: "/My%20Skills/technical-auditing.jpg",
    shortDescription: "Structured assessment of architecture, performance, security, and maintainability with actionable recommendations.",
    longDescription: "Before you invest in build or refactor, know where you stand. We deliver audits that cover stack choices, performance, security posture, code quality, and scalability risks—with clear priorities and next steps so you can decide with confidence.",
    outcomes: ["Risks and bottlenecks surfaced", "Prioritized roadmap", "Alignment between tech and business", "Informed budget and timeline"],
    deliverables: ["Audit report", "Executive summary", "Prioritized recommendations", "Optional follow-up workshop"],
    idealFor: ["Due diligence pre-engagement", "Teams inheriting legacy systems", "Leadership needing a technical view"],
  },
  {
    slug: "system-refactoring",
    title: "System Refactoring",
    image: "/My%20Skills/system-refactoring.jpg",
    shortDescription: "Incremental or targeted refactors to modernize stack, reduce debt, and improve reliability without full rewrites.",
    longDescription: "Legacy systems can be evolved. We plan and execute refactors that improve structure, testability, and performance without boiling the ocean. Work is phased to minimize risk and keep the business running while technical quality improves.",
    outcomes: ["Reduced technical debt", "Clearer codebase and ownership", "Easier onboarding and feature work", "Stable, incremental delivery"],
    deliverables: ["Refactor plan and phases", "Implementation", "Tests and documentation", "Handoff"],
    idealFor: ["Teams stuck in legacy code", "Systems that are hard to change", "Preparing for scale or sale"],
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    image: "/My%20Skills/technical-advisory.jpg",
    shortDescription: "Ongoing strategy, architecture review, and technical decision support for founders and leadership.",
    longDescription: "Strategic technical decisions deserve a clear, independent perspective. We provide advisory on stack choices, vendor and build decisions, hiring, and roadmap—aligned with your business goals and risk tolerance. Retainer or project-based.",
    outcomes: ["Confident technical decisions", "Aligned roadmap and priorities", "Fewer costly mistakes", "Faster alignment in the team"],
    deliverables: ["Structured sessions", "Written summaries and recommendations", "Optional lightweight architecture docs", "Ad-hoc async support"],
    idealFor: ["Founders without a CTO", "Teams before major build or buy decisions", "Scaling companies aligning tech and product"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
