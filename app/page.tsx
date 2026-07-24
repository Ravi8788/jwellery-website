import { Hero } from "@/components/Home/Hero";
import {
  AboutPreview,
  ContactCTA,
  InstagramCTA,
} from "@/components/Home/AboutPreview";
import { LeadersPreview } from "@/components/Home/LeadersPreview";
import {
  CraftsmanshipPreview,
  FeaturedCollections,
  ManufacturingExcellence,
  WhyChoose,
} from "@/components/Home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <LeadersPreview />
      <FeaturedCollections />
      <ManufacturingExcellence />
      <WhyChoose />
      <CraftsmanshipPreview />
      <InstagramCTA />
      <ContactCTA />
    </>
  );
}
