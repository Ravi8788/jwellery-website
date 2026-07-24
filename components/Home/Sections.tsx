import {
  COLLECTIONS,
  CRAFTSMANSHIP,
  FEATURED_COLLECTION_IDS,
  PLACEHOLDER_IMAGES,
  STATS,
  WHY_CHOOSE,
} from "@/lib/constants";
import { CollectionCard } from "@/components/Collections/CollectionCard";
import { SectionHeader, FadeIn } from "@/components/ui/SectionHeader";
import { SoftImage } from "@/components/ui/SoftImage";
import { Button } from "@/components/Buttons";

export function FeaturedCollections() {
  const featured = COLLECTIONS.filter((c) =>
    (FEATURED_COLLECTION_IDS as readonly string[]).includes(c.id)
  );

  return (
    <section className="bg-background section-padding">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Collections"
          title="Featured Collections"
          description="Premium wholesale ranges crafted for jewellery retailers and dealers - from bridal sets to daily wear."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
        <FadeIn className="mt-12 text-center">
          <Button href="/collections" variant="outline" className="!rounded-none">
            View All 32 Pieces
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export function ManufacturingExcellence() {
  return (
    <section className="bg-background-soft section-padding">
      <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-cream shadow-soft">
            <SoftImage
              src={PLACEHOLDER_IMAGES.manufacturing}
              alt="BBS GOLD manufacturing excellence"
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
            title="Manufacturing Excellence"
            description="For more than four decades, BBS GOLD has combined traditional jewellery-making techniques with modern manufacturing processes to deliver superior craftsmanship, purity, and quality."
            className="mb-8"
          />
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="border border-border bg-white p-5 shadow-card">
                  <p className="font-display text-2xl text-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Why Us"
          title="Why Choose BBS GOLD?"
          description="A multi-crore manufacturing and wholesale partner built on trust, purity, and long-term relationships."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="card-luxury h-full !rounded-none p-6">
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="font-display text-lg text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CraftsmanshipPreview() {
  const preview = CRAFTSMANSHIP.split("\n\n").slice(0, 2).join(" ");

  return (
    <section className="bg-cream section-padding">
      <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionHeader
            align="left"
            eyebrow="Artistry"
            title="Craftsmanship"
            description={preview}
            className="mb-8"
          />
          <FadeIn>
            <Button
              href="/about#craftsmanship"
              variant="outline"
              className="!rounded-none"
            >
              Learn More
            </Button>
          </FadeIn>
        </div>
        <FadeIn className="order-1 lg:order-2">
          <div className="relative aspect-[5/4] overflow-hidden border border-border bg-white shadow-soft">
            <SoftImage
              src={PLACEHOLDER_IMAGES.craftsmanship}
              alt="Artisan craftsmanship at BBS GOLD"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
