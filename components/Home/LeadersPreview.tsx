"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import {
  FOUNDERS,
  MANAGING_DIRECTORS,
  type LeadershipMember,
} from "@/lib/data/leadership";
import { cn } from "@/lib/utils";

type Tone = "founders" | "directors";

function LeaderInfoCard({
  member,
  tone,
  index,
}: {
  member: LeadershipMember;
  tone: Tone;
  index: number;
}) {
  const isFounder = tone === "founders";
  const accent = isFounder ? "#D4AF37" : "#C45A6E";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_8px_28px_rgba(26,26,26,0.06)] transition-all duration-300 hover:-translate-y-1 xs:p-6 sm:p-7",
        isFounder
          ? "border-[#D4AF37]/35 hover:border-[#D4AF37] hover:shadow-[0_16px_40px_rgba(212,175,55,0.18)]"
          : "border-[#E8A0B0]/45 hover:border-[#C45A6E] hover:shadow-[0_16px_40px_rgba(196,90,110,0.16)]"
      )}
    >
      <div className="mb-5 flex items-center gap-4 xs:gap-5 sm:gap-5">
        <LeaderPortrait
          src={member.image}
          alt={`${member.name}, ${member.designation} at BBS Gold`}
          tone={tone}
          size="md"
          facePosition={member.facePosition}
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg leading-snug text-charcoal xs:text-xl sm:text-2xl">
            {member.name}
          </h3>
          <p
            className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] xs:text-[11px]"
            style={{ color: accent }}
          >
            {member.designation}
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted xs:text-[11px]">
            {member.brandLabel}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {member.bio.length > 140 ? `${member.bio.slice(0, 140).trim()}…` : member.bio}
      </p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {member.highlights.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-charcoal/85">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px]"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border pt-4">
        <Link
          href="/about#leadership"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2"
          style={{ color: accent }}
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}

export function LeadersPreview() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="BBS Gold Leadership"
          title="Leaders of BBS Gold"
          description="Meet the founders and managing directors guiding BBS Gold with trust, craftsmanship, and four decades of excellence."
        />

        <FadeIn>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Founders
          </p>
        </FadeIn>
        <div className="mb-12 grid gap-5 xs:gap-6 sm:grid-cols-2 lg:gap-8">
          {FOUNDERS.map((member, i) => (
            <LeaderInfoCard
              key={member.id}
              member={member}
              tone="founders"
              index={i}
            />
          ))}
        </div>

        <FadeIn>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C45A6E]">
            Managing Directors
          </p>
        </FadeIn>
        <div className="grid gap-5 xs:gap-6 sm:grid-cols-2 lg:gap-8">
          {MANAGING_DIRECTORS.map((member, i) => (
            <LeaderInfoCard
              key={member.id}
              member={member}
              tone="directors"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
