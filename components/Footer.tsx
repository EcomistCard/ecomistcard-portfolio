import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { site } from "@/lib/site";

const iconClass = "w-5 h-5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors";

// Hard-coded, real social/contact destinations
const socialLinks = [
  { href: "https://github.com/EcomistCard", label: "GitHub", Icon: Github },
  { href: "https://x.com/cardly_martins", label: "Twitter (X)", Icon: Twitter },
  { href: "mailto:Cardlymartins@gmail.com", label: "Email", Icon: Mail },
];

const services = [
  { slug: "digital-product-engineering", label: "Digital Product Engineering" },
  { slug: "ecommerce-systems-architecture", label: "E-Commerce Systems Architecture" },
  { slug: "shopify-infrastructure-optimization", label: "Shopify Infrastructure Optimization" },
  { slug: "performance-engineering", label: "Performance Engineering" },
  { slug: "conversion-architecture", label: "Conversion Architecture" },
  { slug: "technical-auditing", label: "Technical Auditing" },
  { slug: "system-refactoring", label: "System Refactoring" },
  { slug: "technical-advisory", label: "Technical Advisory" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <Link href="/" className="text-lg font-semibold text-accent hover:text-accent-hover transition-colors">
              {site.name}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 max-w-xs">
              {site.tagline}. High-value technical strategy and execution for growth-focused organizations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
              Social
            </h3>
            <nav className="flex items-center gap-4" aria-label="Social links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") || href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={iconClass}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
              Core
            </h3>
            <ul className="space-y-2">
              {["/about", "/services", "/methodology", "/case-studies", "/insights", "/work-with-me", "/contact"].map((href) => {
                const label = href === "/work-with-me" ? "Work with me" : href.slice(1).replace(/-/g, " ");
                const title = label.charAt(0).toUpperCase() + label.slice(1);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map(({ slug, label }) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
              Case Studies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies/survival-prep" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  Survival Prep
                </Link>
              </li>
              <li>
                <Link href="/case-studies/smkfusion" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  SMKFusion
                </Link>
              </li>
              <li>
                <Link href="/case-studies/luxury-pet-store" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  Luxury Pet Store
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-3" aria-label="Social links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") || href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={iconClass}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </nav>
            <Link
              href="/contact"
              className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
