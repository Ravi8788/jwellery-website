"use client";

import { FadeIn } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-background-soft pt-8 pb-10 xs:pt-9 xs:pb-11 sm:pt-10 sm:pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20",
        className
      )}
    >
      <div className="container-luxury">
        <FadeIn>
          <p className="section-eyebrow mb-3">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-[0.04em] text-charcoal xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
            {title}
          </h1>
          <div className="mt-5 h-px w-16 bg-gold" />
          {description && (
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted xs:text-body-md sm:text-body-md md:text-body-lg">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
