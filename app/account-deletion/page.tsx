import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Account Deletion",
  description: `Request deletion of your data associated with ${SITE.name}.`,
};

export default function AccountDeletionPage() {
  return (
    <section className="bg-background section-padding">
      <div className="container-luxury mx-auto max-w-3xl">
        <SectionHeader
          align="left"
          eyebrow="Legal"
          title="Account Deletion"
          className="mb-8"
        />
        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            {SITE.name} does not currently operate consumer user accounts on
            this website. If you previously shared personal details via our
            contact form or communication channels and wish to have that data
            deleted, please contact us.
          </p>
          <h3 className="font-display text-xl text-charcoal">How to Request Deletion</h3>
          <p>
            Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
              {SITE.email}
            </a>{" "}
            with the subject line &ldquo;Data Deletion Request&rdquo; and include
            the email or phone number used in prior correspondence. We will
            process verified requests within a reasonable timeframe.
          </p>
        </div>
      </div>
    </section>
  );
}
