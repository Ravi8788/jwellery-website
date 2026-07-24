import type { Metadata } from "next";
import {
  ABOUT_HIGHLIGHTS,
  COMPANY_OVERVIEW,
  CORE_VALUES,
  CRAFTSMANSHIP,
  MISSION,
  OUR_STORY,
  PLACEHOLDER_IMAGES,
  SITE,
  VISION,
} from "@/lib/constants";
import {
  COMPANY_TIMELINE,
  MANUFACTURING_EXCELLENCE,
} from "@/lib/data/leadership";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { SoftImage } from "@/components/ui/SoftImage";
import { LeadershipSection } from "@/components/Leadership";
import { ContactCTA } from "@/components/Home/AboutPreview";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — established ${SITE.established}, ${SITE.experience} of gold jewellery manufacturing and wholesale excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Legacy"
        title={`About ${SITE.name}`}
        description={`Established ${SITE.established} · ${SITE.experience} of excellence.`}
      />

      {/* Company overview */}
      <section className="bg-background section-padding !pt-12">
        <div className="container-luxury">
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-5 text-body-md leading-relaxed text-muted md:text-body-lg">
              {COMPANY_OVERVIEW.split("\n\n").map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background-soft section-padding">
        <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-cream shadow-soft">
              <SoftImage
                src={PLACEHOLDER_IMAGES.about}
                alt="BBS GOLD heritage and craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Since 1985"
              title="Our Story"
              className="mb-6"
            />
            <div className="space-y-4 leading-relaxed text-muted">
              {OUR_STORY.split("\n\n").map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border border-border bg-white p-3.5 shadow-card"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <p className="text-sm text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background section-padding">
        <div className="container-luxury grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full border border-border bg-white p-8 shadow-card md:p-10">
              <p className="section-eyebrow mb-3">Mission</p>
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{MISSION.summary}</p>
              <ul className="mt-6 space-y-3">
                {MISSION.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full border border-border bg-white p-8 shadow-card md:p-10">
              <p className="section-eyebrow mb-3">Vision</p>
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                Our Vision
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                {VISION.split("\n\n").map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream section-padding">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Principles"
            title="Core Values"
            description="The foundations that have guided BBS GOLD for over four decades."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.06}>
                <div className="card-luxury h-full !rounded-none p-6">
                  <h3 className="font-display text-xl text-gold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="bg-background section-padding">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Capability"
            title={MANUFACTURING_EXCELLENCE.title}
            description={MANUFACTURING_EXCELLENCE.subtitle}
          />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <div className="relative aspect-[5/4] overflow-hidden border border-border bg-cream shadow-soft">
                <SoftImage
                  src={PLACEHOLDER_IMAGES.manufacturing}
                  alt="Manufacturing excellence at BBS GOLD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {MANUFACTURING_EXCELLENCE.points.map((point, i) => (
                <FadeIn key={point.title} delay={i * 0.07}>
                  <div className="h-full border border-border bg-white p-5 shadow-card">
                    <p className="font-display text-lg text-charcoal">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — Founders + Managing Directors */}
      <LeadershipSection />

      {/* Craftsmanship */}
      <section
        id="craftsmanship"
        className="scroll-mt-24 bg-background-soft section-padding"
      >
        <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Excellence"
              title="Craftsmanship"
              className="mb-6"
            />
            <div className="space-y-4 leading-relaxed text-muted">
              {CRAFTSMANSHIP.split("\n\n").map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </div>
          <FadeIn>
            <div className="relative aspect-[5/4] overflow-hidden border border-border bg-cream shadow-soft">
              <SoftImage
                src={PLACEHOLDER_IMAGES.craftsmanship}
                alt="Craftsmanship at BBS GOLD"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline 1985 → Present */}
      <section className="bg-background section-padding">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Our Journey"
            title="Timeline"
            description="From 1985 to the present — milestones that shaped BBS GOLD."
          />
          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-gold via-border to-gold/40 md:left-1/2 md:-translate-x-px"
              aria-hidden
            />
            <ol className="space-y-8 md:space-y-10">
              {COMPANY_TIMELINE.map((item, i) => {
                const right = i % 2 === 1;
                return (
                  <FadeIn key={item.year} delay={i * 0.05}>
                    <li
                      className={`relative grid gap-3 pl-8 md:grid-cols-2 md:gap-10 md:pl-0 ${
                        right ? "" : ""
                      }`}
                    >
                      <span
                        className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-white shadow-soft md:left-1/2 md:-translate-x-1/2"
                        aria-hidden
                      />
                      <div
                        className={
                          right
                            ? "md:col-start-2 md:text-left"
                            : "md:col-start-1 md:pr-8 md:text-right"
                        }
                      >
                        <p className="label-caps text-maroon">{item.year}</p>
                        <h3 className="mt-1 font-display text-xl text-charcoal md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted md:text-body-md">
                          {item.description}
                        </p>
                      </div>
                      {!right && <div className="hidden md:block" aria-hidden />}
                    </li>
                  </FadeIn>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
