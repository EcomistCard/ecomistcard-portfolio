"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { site } from "@/lib/site";

const NAV_LOGO_SRC = "/Logo-Background/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLightNav = theme === "light";

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-3 border-b border-gray-200/80 dark:border-white/10 bg-white/90 dark:bg-black/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 h-8 md:h-10 font-semibold text-lg md:text-xl text-gray-900 dark:text-white">
              <span className="relative h-7 w-7 md:h-8 md:w-8 shrink-0">
                <Image src={NAV_LOGO_SRC} alt="" fill className="object-contain" sizes="32px" priority />
              </span>
              Cardly Martins
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  const navBg = isLightNav
    ? scrolled
      ? "bg-white/90 border-gray-200/60 shadow-sm"
      : "bg-white/80 border-gray-200/60 shadow-sm"
    : scrolled
      ? "bg-black/50 border-white/10"
      : "bg-black/40 border-white/10";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-3 border-b backdrop-blur-xl transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`relative flex items-center gap-2 h-8 md:h-10 font-semibold text-lg md:text-xl transition-opacity hover:opacity-90 ${isLightNav ? "text-gray-900" : "text-white"}`}
          >
            <span className="relative h-7 w-7 md:h-8 md:w-8 shrink-0">
              <Image src={NAV_LOGO_SRC} alt="" fill className="object-contain" sizes="32px" priority />
            </span>
            Cardly Martins
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-accent"
                    : isLightNav
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/80"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/work-with-me"
              className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === "/work-with-me"
                  ? "bg-accent/15 text-accent"
                  : isLightNav
                    ? "bg-accent hover:bg-accent-hover text-white shadow-sm"
                    : "border border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              }`}
            >
              Work With Me
            </Link>
            {/* Theme toggle: shows active mode (Moon = Dark, Sun = Light) with sliding pill - gratitude-style */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className={`ml-2 flex h-9 shrink-0 items-center rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isLightNav
                  ? "border-gray-300 bg-gray-100 hover:bg-gray-200"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }`}
            >
              <span className="relative flex w-20 items-center">
                <span
                  className={`absolute inset-y-0.5 left-0.5 h-7 w-7 rounded-full transition-all duration-300 ease-out ${
                    theme === "dark"
                      ? "translate-x-0 bg-slate-600"
                      : "translate-x-9 bg-white shadow-sm"
                  } ${isLightNav ? "" : ""}`}
                />
                <span className="flex w-full items-center justify-between px-1.5 py-1">
                  <span className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${theme === "dark" ? "text-amber-400" : "text-gray-400"}`}>
                    <Moon className="h-3.5 w-3.5" />
                  </span>
                  <span className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${theme === "light" ? "text-amber-600" : "text-white/70"}`}>
                    <Sun className="h-3.5 w-3.5" />
                  </span>
                </span>
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg transition-colors ${isLightNav ? "bg-gray-200/80 hover:bg-gray-300" : "bg-white/10 hover:bg-white/15"}`}
            >
              {theme === "dark" ? (
                <Sun className={`w-5 h-5 ${isLightNav ? "text-amber-500" : "text-amber-300"}`} />
              ) : (
                <Moon className={`w-5 h-5 ${isLightNav ? "text-slate-600" : "text-white/80"}`} />
              )}
            </button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isLightNav ? "bg-gray-200/80 hover:bg-gray-300" : "bg-white/10 hover:bg-white/15"}`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${isLightNav ? "text-gray-700" : "text-white"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isLightNav ? "text-gray-700" : "text-white"}`} />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-4 pb-4 space-y-1 border-t pt-4 ${isLightNav ? "border-gray-200/60" : "border-white/10"}`}
            >
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${isLightNav ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" : "text-white/90 hover:text-white hover:bg-white/10"}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/work-with-me"
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium text-center transition-colors ${isLightNav ? "bg-accent text-white hover:bg-accent-hover" : "border border-white/40 text-white hover:bg-white/10"}`}
              >
                Work With Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
