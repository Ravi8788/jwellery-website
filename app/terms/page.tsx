import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury mx-auto max-w-3xl">
        <SectionHeader
          align="left"
          eyebrow="Legal"
          title="Terms & Conditions"
          className="mb-8"
        />
        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            By accessing {SITE.url}, you agree to these terms. Content on this
            website is for general information about {SITE.name}&apos;s
            manufacturing and wholesale offerings.
          </p>
          <h3 className="font-display text-xl text-charcoal">Wholesale Enquiries</h3>
          <p>
            Product availability, pricing, and specifications are confirmed
            directly with our team. Website imagery may include placeholders
            pending final product photography.
          </p>
          <h3 className="font-display text-xl text-charcoal">Intellectual Property</h3>
          <p>
            All branding, text, and design elements related to {SITE.name} are
            protected. Unauthorised reproduction is prohibited.
          </p>
          <h3 className="font-display text-xl text-charcoal">Contact</h3>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
