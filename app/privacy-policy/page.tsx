import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury mx-auto max-w-3xl">
        <SectionHeader
          align="left"
          eyebrow="Legal"
          title="Privacy Policy"
          className="mb-8"
        />
        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
            privacy. This policy explains how we collect and use information
            when you visit {SITE.url} or submit an enquiry.
          </p>
          <h3 className="font-display text-xl text-charcoal">Information We Collect</h3>
          <p>
            When you contact us, we may collect your name, email address, phone
            number, business details, and message content solely to respond to
            your enquiry and support wholesale partnerships.
          </p>
          <h3 className="font-display text-xl text-charcoal">How We Use Information</h3>
          <p>
            We use your information to respond to enquiries, provide product and
            wholesale information, and improve our services. We do not sell your
            personal data.
          </p>
          <h3 className="font-display text-xl text-charcoal">Contact</h3>
          <p>
            For privacy requests, email{" "}
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
