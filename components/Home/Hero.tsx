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
  const nextIndex = (index + 1) % total;

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
      className="relative z-0 overflow-x-hidden bg-[#F7F5F2]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="BBS GOLD featured banners"
    >
      <div className="relative px-3 pb-2 pt-3 xs:px-4 xs:pt-3 sm:px-6 sm:pb-3 sm:pt-4 md:px-8 md:pt-5 lg:px-10 xl:px-12">
        <div className="relative mx-auto w-full max-w-xl xs:max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <div className="relative aspect-[1024/682] w-full overflow-hidden rounded-xl bg-[#EDE9E3] shadow-[0_8px_28px_rgba(0,0,0,0.12)] xs:rounded-2xl sm:rounded-3xl">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  priority={index === 0}
                  quality={65}
                  sizes="(max-width: 475px) 94vw, (max-width: 640px) 90vw, (max-width: 768px) 48rem, (max-width: 1024px) 56rem, (max-width: 1280px) 64rem, 72rem"
                  className="object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prefetch only the next slide */}
            <Image
              src={HERO_BANNERS[nextIndex].src}
              alt=""
              fill
              quality={60}
              sizes="(max-width: 640px) 90vw, 72rem"
              className="pointer-events-none absolute inset-0 -z-10 object-contain opacity-0"
              aria-hidden
            />
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous banner"
            className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition hover:scale-105 hover:text-maroon xs:h-8 xs:w-8 sm:left-0 sm:h-10 sm:w-10 sm:-translate-x-1/2 md:h-11 md:w-11 lg:h-12 lg:w-12"
          >
            <ChevronLeft className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next banner"
            className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition hover:scale-105 hover:text-maroon xs:h-8 xs:w-8 sm:right-0 sm:h-10 sm:w-10 sm:translate-x-1/2 md:h-11 md:w-11 lg:h-12 lg:w-12"
          >
            <ChevronRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="border-b border-border bg-white">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-3 xs:gap-3.5 xs:py-3.5 sm:flex-row sm:gap-4 sm:py-4 md:py-5 lg:py-5">
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
                    ? "w-6 bg-gold xs:w-7 sm:w-8 md:w-9"
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

          <div className="flex flex-wrap justify-center gap-2 xs:gap-2.5 sm:gap-3">
            <Link
              href="/collections"
              className="inline-flex min-h-9 items-center justify-center bg-maroon px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-maroon-dark xs:min-h-10 xs:px-5 xs:py-2.5 sm:min-h-11 sm:px-6 sm:text-[11px] md:min-h-12 md:px-7 lg:min-h-12 xl:px-8"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-9 items-center justify-center border border-charcoal px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:border-maroon hover:text-maroon xs:min-h-10 xs:px-5 xs:py-2.5 sm:min-h-11 sm:px-6 sm:text-[11px] md:min-h-12 md:px-7 lg:min-h-12 xl:px-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
