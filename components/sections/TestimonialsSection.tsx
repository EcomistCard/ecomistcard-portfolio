"use client";

import Image from "next/image";
import { site } from "@/lib/site";

const testimonials = site.testimonials ?? [
  { name: "Client Name", role: "Founder, Company", quote: "Delivered beyond expectations.", image: undefined },
  { name: "Client Name", role: "CEO, Company", quote: "Incredible professionalism and technical skills.", image: undefined },
  { name: "Client Name", role: "Director, Company", quote: "Seamless from start to finish.", image: undefined },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 lg:py-32 relative bg-gray-50/70 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 lg:p-10 border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {t.image && (
                <div className="flex justify-center mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10 shrink-0 ring-2 ring-gray-200/60 dark:ring-white/10">
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200/70 dark:border-white/10 flex flex-col items-start">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
