import Link from "next/link";
import { Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#290708] text-white">
      <div className="container-luxury py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandLogo size="sm" href={false} />
              <span className="font-display text-lg font-semibold tracking-[0.08em] text-white sm:text-xl">
                {SITE.name}
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
              {SITE.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-gold"
                  >
                    {phone}
                  </a>
                </li>
              ))}
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
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury flex flex-col items-start gap-5 py-5 text-left text-sm text-white/55 sm:gap-4 md:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
            <p className="text-left">
              © {year} {SITE.name}. All rights reserved.
            </p>
            <span className="hidden text-white/20 sm:inline" aria-hidden>
              |
            </span>
            <nav
              aria-label="Legal"
              className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1"
            >
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-left transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <p className="text-left">
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

          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BBS on Instagram"
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
