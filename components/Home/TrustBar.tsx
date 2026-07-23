"use client";

import { Gem, ShieldCheck, Hammer, Users, Award } from "lucide-react";
import { TRUST_PILLARS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/SectionHeader";

const ICONS = [Gem, ShieldCheck, Hammer, Award, Users];

export function TrustBar() {
  return (
    <section className="border-y border-gold/30 bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
          {TRUST_PILLARS.map((item, i) => {
            const Icon = ICONS[i] ?? Gem;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-2 px-3 py-6 text-center md:py-8">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold transition-transform duration-500 hover:scale-110 hover:border-maroon hover:text-maroon">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="font-display text-sm tracking-wide text-charcoal md:text-base">
                    {item.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                    {item.subtitle}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
