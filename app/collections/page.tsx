import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { CollectionsGrid } from "@/components/Collections/CollectionsGrid";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Collections",
  description: `Explore ${SITE.name} wholesale gold jewellery - 32 curated pieces across chains, mangalsutras, earrings, rings, bangles, temple and bridal.`,
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale Catalogue"
        title="Gold Jewellery Collections"
        description="32 premium pieces manufactured for jewellery retailers and dealers - from daily-wear chains to temple and bridal statement designs."
      />
      <section className="bg-background section-padding !pt-10">
        <div className="container-luxury">
          <CollectionsGrid />
        </div>
      </section>
    </>
  );
}
