"use client";

import { motion } from "framer-motion";
import type { LeadershipMember } from "@/lib/data/leadership";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import { cn } from "@/lib/utils";

type CardTone = "founders" | "directors";

type LeadershipCardProps = {
  member: LeadershipMember;
  index?: number;
  tone?: CardTone;
};

export function LeadershipCard({
  member,
  index = 0,
  tone = "founders",
}: LeadershipCardProps) {
  const isFounders = tone === "founders";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex h-full flex-col items-center overflow-hidden rounded-sm bg-white p-5 text-center xs:p-6 sm:p-8 md:p-10 lg:p-10",
        "transition-shadow duration-500",
        isFounders
          ? "border border-[#D4AF37]/55 shadow-[0_8px_28px_rgba(212,175,55,0.12)] hover:border-[#D4AF37] hover:shadow-[0_18px_44px_rgba(212,175,55,0.22)]"
          : "border border-[#E8A0B0]/60 shadow-[0_8px_28px_rgba(196,90,110,0.1)] hover:border-[#C45A6E] hover:shadow-[0_18px_44px_rgba(196,90,110,0.2)]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        aria-hidden
        style={{
          background: isFounders
            ? "linear-gradient(90deg, transparent, #D4AF37, transparent)"
            : "linear-gradient(90deg, transparent, #C45A6E, transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background: isFounders
            ? "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1), transparent 55%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(232,160,176,0.18), transparent 55%)",
        }}
      />

      <LeaderPortrait
        src={member.image}
        alt={`${member.name}, ${member.designation} at BBS Gold`}
        tone={tone}
        size="md"
        facePosition={member.facePosition}
        className="relative mb-7"
      />

      <h3 className="relative font-display text-2xl italic tracking-wide text-charcoal md:text-[1.65rem]">
        {member.name}
      </h3>

      <p
        className={cn(
          "relative mt-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
          isFounders ? "text-[#D4AF37]" : "text-[#C45A6E]"
        )}
      >
        {member.designation}
      </p>

      <p className="relative mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        {member.brandLabel}
      </p>

      <div
        className={cn(
          "relative mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent to-transparent",
          isFounders ? "via-[#D4AF37]" : "via-[#C45A6E]"
        )}
        aria-hidden
      />

      <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-[15px]">
        {member.bio}
      </p>
    </motion.article>
  );
}
