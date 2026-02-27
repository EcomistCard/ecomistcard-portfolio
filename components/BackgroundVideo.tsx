"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/Logo-Background/0_Neon_Blue_1920x1080.mp4";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video
        .play()
        .catch(() => {
          // swallow autoplay errors – background video is non-critical
        });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="pointer-events-none fixed inset-0 h-full w-full object-cover"
        style={{ zIndex: -20 }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark overlay in dark mode for readability */}
      <div
        className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/60 dark:opacity-100 opacity-0"
        style={{ zIndex: -15 }}
        aria-hidden="true"
      />
      {/* Light mode: no extra overlay so body light bg and sections read clearly */}
      <div
        className="pointer-events-none fixed inset-0 opacity-0 dark:opacity-0"
        style={{ zIndex: -14 }}
        aria-hidden="true"
      />
    </>
  );
}
