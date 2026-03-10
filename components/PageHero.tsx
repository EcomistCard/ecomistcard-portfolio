 "use client";

import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  /** Optional small label above title (e.g. "What I offer") */
  label?: string;
  /** Optional background image from /public (e.g. "/hero-cardly-premium.png") */
  backgroundImageSrc?: string;
}

export default function PageHero({
  title,
  description,
  label,
  backgroundImageSrc,
}: PageHeroProps) {
  const hasImage = Boolean(backgroundImageSrc);

  return (
    <header
      className="relative w-full pt-28 pb-12 lg:pt-32 lg:pb-16"
      aria-label="Page header"
    >
      <div
        className={`absolute inset-0 ${
          hasImage
            ? ""
            : "bg-gray-100 border-b border-gray-200/80 dark:bg-slate-950 dark:border-white/10"
        }`}
        aria-hidden
      >
        {hasImage && (
          <>
            <Image
              src={backgroundImageSrc!}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/35" />
          </>
        )}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {label && (
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            {label}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </header>
  );
}

