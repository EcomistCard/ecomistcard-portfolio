export const site = {
  name: "Cardly Martins",
  /** Brand logos: light (white text + icon) for dark backgrounds; same asset inverted for light; icon for favicon & mobile */
  logo: {
    light: "/logo-light.png",
    dark: "/logo-light.png",
    icon: "/logo-icon.svg",
  },
  tagline: "Full-Stack Engineer & Technical Strategist",
  description:
    "Building scalable, high-performance digital systems for high-value clients and consulting engagements.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://cardlymartins.com",
  defaultTheme: "dark" as const,
  contact: {
    email: "Cardlymartins@gmail.com",
    github: "https://github.com/cardlymartins",
    twitter: "https://twitter.com",
    /** Used for "Learn more about me" on About page */
    facebook: "https://www.facebook.com/yourprofile",
  },
  /** About Me section: avatar = Hero; avatarAboutSection = About Me section only */
  aboutMe: {
    avatar: "/Avatar/avatar.png",
    /** Dedicated image for the About Me section (home) and About page */
    avatarAboutSection: "/Avatar/avatar-about-me.jpg",
    bio: [
      "I partner with startups and growth-focused brands to design and build systems that scale—from e-commerce and marketplaces to internal tools and integrations.",
      "With a focus on clean architecture, performance, and maintainability, I help teams ship faster and reduce technical debt.",
      "When I'm not coding, I'm thinking about product strategy, system design, and how to turn complex problems into simple, reliable solutions.",
    ],
    vision: "Building impactful digital solutions that empower businesses and individuals to reach their full potential.",
    values: ["Excellence", "Clean architecture", "Innovation", "Strategic partnership"],
  },
  /** Short testimonial snippets for hero (name + quote) */
  testimonialSnippets: [
    { name: "Client", quote: "Exceptional work! Delivered beyond expectations." },
    { name: "Client", quote: "Best investment for our digital transformation." },
    { name: "Client", quote: "Strategic approach and deep technical skills." },
  ],
  /** Full testimonials for dedicated section; optional image path for card avatar */
  testimonials: [
    { name: "Ashley Latasha", role: "Founder Of the Company Survival Prep", quote: "Cardly delivered beyond expectations. His ability to understand our vision and translate it into a functional, beautiful product was remarkable.", image: "/asset/testimonial-1.png" },
    { name: "Dorothy", role: "SMKFusion Company", quote: "Incredible professionalism and technical skills. Our platform now runs flawlessly thanks to his expertise.", image: "/asset/testimonial-2.png" },
    { name: "Michelle Morgan", role: "Eden Jewelry", quote: "Working with Cardly was seamless from start to finish. His strategic approach helped us achieve our goals faster.", image: "/asset/testimonial-3.png" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Methodology", href: "/methodology" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};
