"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { site } from "@/lib/site";

// Fallback if API fails or no images returned (hero images live in public/Carousel)
const FALLBACK_IMAGES = ["/Carousel/tt.png", "/Carousel/ure.png", "/Carousel/iue.png"];

const SLIDE_DURATION_MS = 5500;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HERO_AVATAR_SIZE = 96; // 96px base; responsive classes handle scaling

export default function Hero() {
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES);
  const [bgImageError, setBgImageError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [avatarError, setAvatarError] = useState(false);
  const heroAvatarSrc = site.aboutMe?.avatar || "/Avatar/avatar.png";
  const showAvatar = heroAvatarSrc && !avatarError;

  useEffect(() => {
    fetch("/api/hero-images")
      .then((res) => res.json())
      .then((list: string[]) => {
        if (Array.isArray(list) && list.length > 0) setImages(list);
      })
      .catch(() => {});
  }, []);

  const showSlideshow = images.length > 0 && !bgImageError;

  useEffect(() => {
    if (!showSlideshow || images.length <= 1) return;
    const t = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, [showSlideshow, images.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background: premium one-at-a-time slideshow with smooth crossfade */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        {showSlideshow && (
          <div className="absolute inset-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Image
                  src={
                    images[currentSlide].startsWith("/")
                      ? images[currentSlide]
                      : `/asset/${images[currentSlide]}`
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={currentSlide === 0}
                  unoptimized
                  onError={() => setBgImageError(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* Classic overlay: soft gradient for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/85"
          aria-hidden
        />
      </div>

      {/* Subtle ambient blobs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
        aria-hidden
      >
        <motion.div
          className="absolute top-[18%] right-[8%] w-[520px] h-[520px] rounded-full bg-accent/[0.05] blur-3xl"
          animate={{
            scale: [1, 1.06, 1],
            x: [0, 20, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[12%] left-[8%] w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl"
          animate={{
            scale: [1, 1.04, 1],
            x: [0, -16, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr,minmax(400px,1fr)] gap-16 lg:gap-24 items-center">
          {/* Left — headline, subheadline, CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Avatar: standout identity above headline; fails gracefully if image missing */}
            {showAvatar && (
              <motion.div
                variants={item}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-800/80 ring-2 ring-white/20 shadow-xl shrink-0">
                  <Image
                    src={heroAvatarSrc}
                    alt={site.name}
                    width={HERO_AVATAR_SIZE}
                    height={HERO_AVATAR_SIZE}
                    className="object-cover w-full h-full"
                    sizes="96px"
                    unoptimized
                    onError={() => setAvatarError(true)}
                  />
                </div>
              </motion.div>
            )}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              I Build Fast, Scalable Web Systems for Startups &amp; E-Commerce Brands
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              From Shopify optimization to full-stack platforms — I help growth-focused businesses
              ship faster, reduce technical debt, and scale with confidence.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Book a Strategy Call
              </Link>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-6 flex flex-col items-center lg:items-start"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300/90">
                <span>20+ Projects Delivered</span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span>3+ Years Experience</span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span>95+ Lighthouse Scores</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — premium classic slideshow frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] rounded-xl overflow-hidden bg-slate-900/50 shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[4/3] relative bg-slate-900">
                {showSlideshow && (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentSlide}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={
                          images[currentSlide].startsWith("/")
                            ? images[currentSlide]
                            : `/asset/${images[currentSlide]}`
                        }
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 420px"
                        unoptimized
                      />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
              {/* Classic slide indicators */}
              {images.length > 1 && (
                <div className="flex justify-center gap-1.5 py-3 px-4 bg-slate-900/70 border-t border-white/5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => setCurrentSlide(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "h-1.5 w-7 bg-white"
                          : "h-1.5 w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom indicators (mobile) */}
        {showSlideshow && images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 lg:hidden">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide ? "h-1.5 w-6 bg-white/95" : "h-1.5 w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
