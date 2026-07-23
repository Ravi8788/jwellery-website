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
      className="scroll-mt-24 bg-white section-padding"
      aria-labelledby="leadership-heading"
    >
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Our People
          </p>
          <h2
            id="leadership-heading"
            className="font-display text-display-sm tracking-wide text-charcoal md:text-display-md"
          >
            {LEADERSHIP_INTRO.title}
          </h2>
          <div
            className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            aria-hidden
          />
          <p className="mt-5 text-body-md leading-relaxed text-muted md:text-body-lg">
            {LEADERSHIP_INTRO.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted/90 md:text-body-md">
            {LEADERSHIP_INTRO.philosophy}
          </p>
        </motion.div>

        {/* Founders — gold highlight */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-8 text-center md:mb-12"
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Gold Legacy
            </p>
            <h3 className="font-display text-2xl tracking-wide text-charcoal md:text-3xl">
              Founders
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
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

        {/* Managing Directors — soft pink highlight */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-8 text-center md:mb-12"
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C45A6E]">
              Next Generation
            </p>
            <h3 className="font-display text-2xl tracking-wide text-charcoal md:text-3xl">
              Managing Directors
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
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
