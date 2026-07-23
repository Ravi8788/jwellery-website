import Link from "next/link";
import { Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#290708] text-white">
      <div className="container-luxury py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white/5">
                <span className="font-display text-sm font-semibold tracking-wider text-gold">
                  BBS
                </span>
              </span>
              <span className="font-display text-xl font-semibold tracking-[0.08em] text-white">
                {SITE.parentCompany}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Connecting India&apos;s finest gold craftsmanship to retailers and
              partners nationwide. Premium quality, purity, and trust since{" "}
              {SITE.established}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-display text-xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="mb-5 font-display text-xl font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {SITE.url.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="mb-5 font-display text-xl font-semibold text-white">
              Our Location
            </h3>
            <div className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <address className="not-italic">
                {SITE.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-1 block">{SITE.parentCompany}</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury flex flex-col gap-4 py-5 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
            <p>
              © {year} {SITE.parentCompany}. All rights reserved.
            </p>
            <span className="hidden text-white/20 sm:inline">|</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center lg:text-left">
            Designed &amp; Developed by{" "}
            <a
              href={SITE.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold transition-colors hover:text-gold-light"
            >
              {SITE.developer.name}
            </a>
          </p>

          <div className="flex items-center justify-center gap-3 lg:justify-end">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bagade Bandhu Saraf on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
