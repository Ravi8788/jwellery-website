import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  BUSINESS_HOURS,
  SITE,
  getWhatsAppUrl,
} from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} for wholesale enquiries, bulk orders, and retail partner support. Call, email, or WhatsApp us.`,
};

function ContactFormFallback() {
  return (
    <div className="h-[520px] animate-pulse border border-border bg-cream" />
  );
}

export default function ContactPage() {
  const mapQuery = encodeURIComponent(SITE.address);

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact BBS GOLD"
        description="Connect with our team for wholesale enquiries, manufacturing partnerships, and collection details."
      />
      <section className="bg-background section-padding !pt-12">
      <div className="container-luxury">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <div className="border border-border bg-white p-6 shadow-card md:p-8">
                <h2 className="font-display text-2xl text-charcoal">
                  Business Details
                </h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="label-caps text-muted">Address</p>
                      <p className="mt-1 text-charcoal">{SITE.address}</p>
                      <p className="text-sm text-muted">{SITE.parentCompany}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="label-caps text-muted">Phone</p>
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-charcoal hover:text-gold"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="label-caps text-muted">Email</p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="mt-1 block text-charcoal hover:text-gold"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="label-caps text-muted">Working Hours</p>
                      <ul className="mt-1 space-y-1 text-charcoal">
                        {BUSINESS_HOURS.map((row) => (
                          <li key={row.days} className="text-sm">
                            <span className="font-medium">{row.days}:</span>{" "}
                            {row.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={getWhatsAppUrl()}
                    external
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    href={SITE.instagram}
                    external
                    variant="outline"
                    aria-label="Visit Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden border border-border bg-cream shadow-card">
                <iframe
                  title="BBS GOLD location map"
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="h-64 w-full border-0 md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </FadeIn>
        </div>
      </div>
    </section>
    </>
  );
}
