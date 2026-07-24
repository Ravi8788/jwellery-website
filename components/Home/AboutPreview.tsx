import Link from "next/link";
import { ABOUT_HIGHLIGHTS, COMPANY_OVERVIEW, SITE } from "@/lib/constants";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { Button } from "@/components/Buttons";

export function AboutPreview() {
  const preview = COMPANY_OVERVIEW.split("\n\n")[0];

  return (
    <section className="bg-background-soft section-padding">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="About Us"
          title={`About ${SITE.name}`}
          description={preview}
        />
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {ABOUT_HIGHLIGHTS.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <div className="flex items-start gap-3 border border-border bg-white p-4 shadow-card transition-all duration-300 hover:border-gold/50 hover:shadow-lift">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-maroon" />
                <p className="text-sm text-charcoal">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button href="/about" variant="outline">
            Discover Our Story
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export function InstagramCTA() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-luxury text-center">
        <SectionHeader
          eyebrow="Social"
          title="Follow Our Journey"
          description="See our latest craftsmanship and collections on Instagram."
        />
        <FadeIn>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-maroon bg-white px-8 py-3.5 text-label-caps uppercase tracking-[0.12em] text-maroon shadow-card transition-all duration-300 hover:bg-maroon hover:text-white"
          >
            @bagadebandhusaraf
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury overflow-hidden border border-gold/40 bg-cream px-6 py-12 text-center md:px-12 md:py-16">
        <SectionHeader
          eyebrow="Partnership"
          title="Partner With BBS"
          description="Looking for a reliable gold jewellery manufacturer and wholesaler? Connect with our team for collections, bulk orders, and retail partner support."
          className="mb-8"
        />
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact#form" size="lg">
              Contact Us
            </Button>
            <Button href="/collections" variant="outline" size="lg">
              View Collections
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
