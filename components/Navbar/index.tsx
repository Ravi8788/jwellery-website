"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(24);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 h-14 w-full border-b transition-all duration-300 sm:h-16 lg:h-[4.5rem]",
          scrolled
            ? "border-border bg-white/95 shadow-soft backdrop-blur-md"
            : "border-border/70 bg-white/95 backdrop-blur-sm"
        )}
      >
        <nav
          className="container-luxury flex h-full items-center justify-between gap-3"
          aria-label="Main navigation"
        >
          <BrandLogo size="md" priority />

          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {NAV_LINKS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300",
                    active
                      ? "border border-gold text-maroon"
                      : "border border-transparent text-charcoal/80 hover:border-gold/50 hover:text-maroon"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#form"
              className="hidden items-center justify-center border border-maroon bg-maroon px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-maroon-dark md:inline-flex"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-sm p-1.5 text-charcoal transition-colors hover:text-gold lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col border-l border-border bg-white shadow-soft lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-charcoal hover:text-gold"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-5">
                {NAV_LINKS.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors",
                        active
                          ? "border-gold text-maroon"
                          : "border-transparent text-charcoal hover:border-gold/40"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact#form"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center justify-center border border-maroon bg-maroon px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-maroon-dark"
                >
                  Enquire Now
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
