import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/SEO/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Gold Jewellery Manufacturing & Wholesale Since 1985`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "BBS GOLD",
    "Bagade Bandhu Saraf",
    "gold jewellery manufacturer",
    "wholesale gold jewellery",
    "gold chains wholesale",
    "bridal jewellery manufacturer",
    "mangalsutra wholesale",
    "gold jewellery India",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Manufacturing Excellence Since 1985`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Manufacturing Excellence Since 1985`,
    description: SITE.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-charcoal antialiased">
        <JsonLd />
        <Navbar />
        <main className="min-h-screen pt-12 sm:pt-12 md:pt-14 lg:pt-14 xl:pt-14">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
