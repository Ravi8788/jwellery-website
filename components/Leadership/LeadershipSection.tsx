"use client";

import { motion } from "framer-motion";
import { LeadershipCard } from "@/components/Leadership/LeadershipCard";
import {
  FOUNDERS,
  LEADERSHIP_INTRO,
  MANAGING_DIRECTORS,
} from "@/lib/data/leadership";

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="scroll-mt-24"
      aria-labelledby="leadership-heading"
    >
      {/* Intro — deep charcoal */}
      <div className="bg-[#0C0C0C] px-margin-mobile pb-12 pt-16 md:px-margin-desktop md:pb-16 md:pt-24 lg:pt-28">
        <div className="container-luxury !px-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Our People
            </p>
            <h2
              id="leadership-heading"
              className="font-display text-display-sm tracking-wide text-white md:text-display-md"
            >
              {LEADERSHIP_INTRO.title}
            </h2>
            <div
              className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              aria-hidden
            />
            <p className="mt-5 text-body-md leading-relaxed text-white/65 md:text-body-lg">
              {LEADERSHIP_INTRO.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/50 md:text-body-md">
              {LEADERSHIP_INTRO.philosophy}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founders — deep maroon / heritage */}
      <div className="relative overflow-hidden bg-[#2A0A0E] px-margin-mobile py-16 md:px-margin-desktop md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(212,175,55,0.12), transparent 45%), radial-gradient(ellipse at 80% 100%, rgba(139,30,45,0.35), transparent 50%)",
          }}
        />
        <div className="container-luxury relative !px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-8 text-center md:mb-12"
          >
            <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">
              Founders
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55">
              Established in 1985, our founders laid the foundation of BBS GOLD
              through hard work, trust, and dedication.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {FOUNDERS.map((member, i) => (
              <LeadershipCard
                key={member.id}
                member={member}
                index={i}
                tone="founders"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Managing Directors — deep ink / navy */}
      <div className="relative overflow-hidden bg-[#0B1520] px-margin-mobile py-16 md:px-margin-desktop md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 75% 0%, rgba(212,175,55,0.1), transparent 42%), radial-gradient(ellipse at 15% 100%, rgba(30,58,95,0.45), transparent 50%)",
          }}
        />
        <div className="container-luxury relative !px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-8 text-center md:mb-12"
          >
            <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">
              Managing Directors
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55">
              Leading the company&apos;s growth, innovation, manufacturing
              excellence, and expansion while preserving our legacy.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {MANAGING_DIRECTORS.map((member, i) => (
              <LeadershipCard
                key={member.id}
                member={member}
                index={i}
                tone="directors"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
