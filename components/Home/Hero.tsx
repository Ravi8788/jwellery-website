"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_BANNERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTO_MS = 5500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_BANNERS.length;
  const current = HERO_BANNERS[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <section
      className="relative z-0 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="BBS GOLD featured banners"
    >
      {/* Fixed responsive heights — keep banner artwork top (logo) fully visible below navbar */}
      <div className="relative w-full overflow-hidden bg-[#F3EEE6]">
        <div
          className={cn(
            "relative w-full overflow-hidden",
            "h-[200px]",
            "sm:h-[260px]",
            "md:h-[320px]",
            "lg:h-[380px]",
            "xl:h-[420px]",
            "2xl:h-[460px]"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous banner"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 border border-black/10 bg-white/95 p-1.5 text-charcoal shadow-soft transition hover:border-gold sm:left-3 sm:p-2 md:left-5"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next banner"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 border border-black/10 bg-white/95 p-1.5 text-charcoal shadow-soft transition hover:border-gold sm:right-3 sm:p-2 md:right-5"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Dots + CTAs under banner — clean separation */}
      <div className="border-b border-border bg-white">
        <div className="container-luxury flex flex-col items-center justify-between gap-4 py-3.5 sm:flex-row sm:py-4">
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Banner slides"
          >
            {HERO_BANNERS.map((banner, i) => (
              <button
                key={banner.id}
                type="button"
                role="tab"
                aria-label={`Show banner ${i + 1}`}
                aria-selected={i === index}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1 overflow-hidden rounded-full transition-all duration-300",
                  i === index
                    ? "w-7 bg-gold sm:w-8"
                    : "w-2 bg-border hover:bg-gold/60"
                )}
              >
                {i === index && !paused && (
                  <motion.span
                    key={`progress-${index}`}
                    className="block h-full bg-maroon"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <Link
              href="/collections"
              className="inline-flex min-h-10 items-center justify-center bg-maroon px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-maroon-dark sm:min-h-11 sm:px-6 sm:text-[11px]"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center justify-center border border-charcoal px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:border-maroon hover:text-maroon sm:min-h-11 sm:px-6 sm:text-[11px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
