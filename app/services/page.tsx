import type { Metadata } from "next";
import {
  Boxes,
  Factory,
  Handshake,
  Package,
  PenTool,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Services",
  description: `Gold jewellery manufacturing, wholesale supply, custom designs, bulk orders, and retail partner support from ${SITE.name}.`,
};

const ICONS: Record<string, LucideIcon> = {
  factory: Factory,
  package: Package,
  sparkles: Sparkles,
  boxes: Boxes,
  handshake: Handshake,
  "shield-check": ShieldCheck,
  "pen-tool": PenTool,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description="End-to-end manufacturing and wholesale support for jewellery retailers, dealers, and business partners."
      />

      <section className="bg-background section-padding !pt-12">
        <div className="container-luxury">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon] ?? Sparkles;
              return (
                <FadeIn key={service.id} delay={i * 0.06}>
                  <article className="card-luxury h-full !rounded-none p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-gold/40 bg-cream text-gold">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl text-charcoal">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding !pt-0">
        <div className="container-luxury text-center">
          <FadeIn>
            <div className="border border-gold/30 bg-white px-6 py-12 shadow-card md:px-12">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                Ready to partner with {SITE.name}?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Share your requirements for manufacturing, wholesale supply, or
                custom designs — our team is ready to assist.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact#form" className="!rounded-none">
                  Get in Touch
                </Button>
                <Button
                  href="/collections"
                  variant="outline"
                  className="!rounded-none"
                >
                  Browse Collections
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
