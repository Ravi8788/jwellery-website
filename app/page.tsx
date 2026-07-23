import { Hero } from "@/components/Home/Hero";
import { TrustBar } from "@/components/Home/TrustBar";
import {
  AboutPreview,
  ContactCTA,
  InstagramCTA,
} from "@/components/Home/AboutPreview";
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
      <TrustBar />
      <AboutPreview />
      <FeaturedCollections />
      <ManufacturingExcellence />
      <WhyChoose />
      <CraftsmanshipPreview />
      <InstagramCTA />
      <ContactCTA />
    </>
  );
}
