"use client";

import { motion } from "framer-motion";
import { SoftImage } from "@/components/ui/SoftImage";
import type { LeadershipMember } from "@/lib/data/leadership";
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
        "group relative flex h-full flex-col items-center overflow-hidden rounded-sm p-8 text-center md:p-10",
        "backdrop-blur-md transition-shadow duration-500",
        isFounders
          ? "border border-[#D4AF37]/40 bg-[#3A1218]/55 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#D4AF37]/75 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
          : "border border-[#D4AF37]/35 bg-[#121C28]/70 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-[#D4AF37]/70 hover:shadow-[0_20px_50px_rgba(212,175,55,0.16)]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background: isFounders
            ? "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.14), transparent 55%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1), transparent 55%)",
        }}
      />

      <div className="relative mb-7">
        <div
          className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 transition-colors duration-500 group-hover:border-[#D4AF37]/80"
          aria-hidden
        />
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-[#D4AF37]/55 bg-[#1A1A1A] shadow-[0_0_0_4px_rgba(212,175,55,0.08)] md:h-40 md:w-40">
          <SoftImage
            src={member.image}
            alt={`${member.name}, ${member.designation} at BBS GOLD`}
            fill
            sizes="160px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            fallbackSrc="/images/placeholders/director.svg"
          />
        </div>
      </div>

      <h3 className="relative font-display text-2xl italic tracking-wide text-white md:text-[1.65rem]">
        {member.name}
      </h3>

      <p className="relative mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
        {member.designation}
      </p>

      <div
        className="relative mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        aria-hidden
      />

      <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-white/70 md:text-[15px]">
        {member.bio}
      </p>
    </motion.article>
  );
}
