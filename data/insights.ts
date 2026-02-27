export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

export const insights: Insight[] = [
  {
    slug: "building-scalable-architecture-for-startups",
    title: "Building Scalable Architecture for Startups",
    excerpt: "Key principles for designing systems that grow with your business, from MVP to scale.",
    date: "2026-01-15",
    category: "Architecture",
    content: `
Good architecture doesn't mean overbuilding from day one—it means making decisions that don't block you later. For startups, the goal is to ship fast while keeping optionality open.

**Start with boundaries.** Define clear boundaries between domains (e.g., auth, catalog, orders). Even in a monolith, logical boundaries make it easier to extract services or swap implementations later.

**Defer infrastructure complexity.** Use managed services and standard patterns until you have evidence they're the bottleneck. Premature optimization—whether in code or infrastructure—costs time and flexibility.

**Invest in data shape.** Get your core entities and relationships right early. Migrations and refactors are cheaper when the model is coherent. Schema and API design compound over time.

**Measure and iterate.** Instrument from the start. Use metrics to decide where to invest in scale and resilience, not assumptions.
    `.trim(),
  },
  {
    slug: "performance-optimization-strategies",
    title: "Performance Optimization Strategies",
    excerpt: "Practical techniques to improve load times, reduce costs, and enhance user experience.",
    date: "2025-12-20",
    category: "Performance",
    content: `
Performance work should be targeted. Random optimizations rarely move the needle; structured audits do.

**Establish a baseline.** Capture Core Web Vitals, TTFB, and key user flows before changing anything. Without a baseline, you can't prove impact.

**Prioritize by impact.** Focus on the largest assets and the most critical paths. Often a small set of images, scripts, or API calls dominates load time. Fix those first.

**Front-end discipline.** Lazy load below-the-fold content. Defer non-critical scripts. Use responsive images and modern formats. These changes are high leverage and low risk.

**Back-end and infra.** Caching, CDN, and connection pooling often yield big gains. Align with business rules (e.g., cache invalidation on product updates) so performance doesn't come at the cost of correctness.
    `.trim(),
  },
  {
    slug: "modern-ecommerce-best-practices",
    title: "Modern E-Commerce Best Practices",
    excerpt: "Lessons learned from building high-converting e-commerce platforms and marketplaces.",
    date: "2025-11-10",
    category: "E-commerce",
    content: `
E-commerce that converts is a system: architecture, content, and flow working together.

**Structure supports conversion.** Clear navigation, logical collections, and benefit-driven product copy reduce friction. Invest in information architecture before adding features.

**Checkout is sacred.** Minimize steps and fields. Surface trust and security. Test every change with real or near-real payment flows. Small friction here has outsized impact.

**Mobile-first isn't optional.** A large share of traffic and conversion happens on mobile. Layout, touch targets, and performance must be designed for small screens first.

**Data and iteration.** Use analytics and testing to validate assumptions. Structure your data so you can answer: where do users drop off? What content drives conversion? Then iterate.
    `.trim(),
  },
];

export const insightsBySlug: Record<string, Insight> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
);

export function getInsightBySlug(slug: string): Insight | undefined {
  return insightsBySlug[slug];
}

export function getAllInsightSlugs(): string[] {
  return insights.map((i) => i.slug);
}
