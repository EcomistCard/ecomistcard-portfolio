/**
 * Design system: hardcoded tokens for consistency, performance, and client-ready presentation.
 * Use these in Tailwind (via tailwind.config) and components.
 */

export const design = {
  /** Primary brand & accent */
  colors: {
    accent: "#3b82f6",
    accentHover: "#2563eb",
    accentMuted: "rgba(59, 130, 246, 0.12)",
    /** Dark theme backgrounds */
    background: "#0f172a",
    backgroundSection: "#1e293b",
    /** Light theme */
    backgroundLight: "#ffffff",
    backgroundSectionLight: "#f8fafc",
    /** Neutrals for text and borders */
    textPrimary: "#0f172a",
    textSecondary: "#64748b",
    textMuted: "#94a3b8",
    border: "rgba(148, 163, 184, 0.25)",
    borderDark: "rgba(255, 255, 255, 0.1)",
  },

  /** Typography: font families (loaded in layout) */
  font: {
    sans: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    heading: "var(--font-heading), var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  },

  /** Section spacing (py) for rhythm */
  spacing: {
    section: "7rem",   // py-28
    sectionLg: "8rem", // py-32
    block: "5rem",    // mb-20
  },

  /** Border radius */
  radius: {
    card: "1rem",
    button: "0.75rem",
    badge: "9999px",
  },

  /** Max widths */
  container: "80rem", // max-w-7xl
} as const;

/** Trust bar stats for homepage (client credibility) */
export const trustStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "High-Value", label: "Client Focus" },
  { value: "Full-Stack", label: "Technical Depth" },
  { value: "Strategy + Code", label: "End-to-End" },
] as const;

/** Why work with me – value propositions */
export const whyWorkWithMe = [
  {
    title: "Outcome-focused delivery",
    description: "Every engagement is scoped to measurable results: faster load times, higher conversion, scalable architecture.",
    icon: "Target",
  },
  {
    title: "Clean, maintainable systems",
    description: "Code and architecture built for the long term so your team can iterate without technical debt piling up.",
    icon: "Code2",
  },
  {
    title: "Strategic technical partner",
    description: "From discovery to launch, I align technical decisions with business goals so you ship with confidence.",
    icon: "Handshake",
  },
  {
    title: "Fast, professional communication",
    description: "Clear timelines, regular updates, and responsive collaboration so projects stay on track.",
    icon: "Zap",
  },
] as const;
