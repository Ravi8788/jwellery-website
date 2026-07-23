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
        "border-b border-border bg-background-soft pt-10 pb-12 md:pt-14 md:pb-16",
        className
      )}
    >
      <div className="container-luxury">
        <FadeIn>
          <p className="section-eyebrow mb-3">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[0.04em] text-charcoal md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-5 h-px w-16 bg-gold" />
          {description && (
            <p className="mt-5 max-w-2xl text-body-md leading-relaxed text-muted md:text-body-lg">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
