import type { Collection } from "@/lib/types";
import type { ServiceItem, ValueItem, WhyChooseItem } from "@/lib/types";

export const SITE = {
  name: "BBS GOLD",
  legalName: "BBS GOLD",
  parentCompany: "Bagade Bandhu Saraf",
  managingDirector: "Abhishek Santosh Bagade",
  founder: "Santosh Bagade",
  tagline: "Manufacturing Excellence Since 1985",
  description:
    "BBS GOLD is a trusted gold jewellery manufacturer and wholesaler since 1985. With 40+ years of excellence, we supply premium gold jewellery to retailers and dealers across India.",
  url: "https://bbsgold.com",
  email: "info@bbsgold.com",
  phone: "+91 97303 46525",
  whatsapp: "919730346525",
  whatsappMessage: "Hi Bagade Bandhu Saraf!",
  address: "Bagade Bandhu Saraf, India",
  addressLines: ["Bagade Bandhu Saraf", "India"],
  established: 1985,
  experience: "40+ Years",
  industry: "Gold Jewellery Manufacturing & Wholesale",
  instagram:
    "https://www.instagram.com/bagadebandhusaraf?igsh=dTBhcTVwOHpmcmN6",
  social: {
    instagram:
      "https://www.instagram.com/bagadebandhusaraf?igsh=dTBhcTVwOHpmcmN6",
  },
  developer: {
    name: "Shris Innovation",
    url: "https://shrisinnovation.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Account Deletion", href: "/account-deletion" },
  ],
} as const;

export const BUSINESS_HOURS = [
  { days: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
  { days: "Sunday", hours: "By Appointment" },
] as const;

/** Homepage hero banners (BBS Jewellers creatives) — full artwork, no crop */
export const HERO_BANNERS = [
  {
    id: "rings-dark",
    src: "/images/banners/banner-1.webp",
    alt: "BBS Jewellers — pure gold rings, Bagade Bandhu Saraf since 1985",
    title: "Pure Gold",
  },
  {
    id: "chain-cream",
    src: "/images/banners/banner-2.webp",
    alt: "BBS Jewellers — elegant gold chain on cream, Bagade Bandhu Saraf since 1985",
    title: "Quiet Luxury",
  },
  {
    id: "bangle-emerald",
    src: "/images/banners/banner-3.webp",
    alt: "BBS Jewellers — where tradition meets timeless beauty",
    title: "Tradition & Beauty",
  },
  {
    id: "chain-dark",
    src: "/images/banners/banner-4.webp",
    alt: "BBS Jewellers — expertly crafted gold chain, Bagade Bandhu Saraf since 1985",
    title: "Expertly Crafted",
  },
  {
    id: "diya-cream",
    src: "/images/banners/banner-5.webp",
    alt: "BBS Jewellers — timeless values, treasured forever",
    title: "Timeless Values",
  },
] as const;

export const TRUST_PILLARS = [
  { title: "Pure Gold", subtitle: "Hallmarked purity" },
  { title: "Trust & Purity", subtitle: "Transparent quality" },
  { title: "Expertly Crafted", subtitle: "Master artisans" },
  { title: "Since 1985", subtitle: "40+ years legacy" },
  { title: "Trusted Generations", subtitle: "Retail partners across India" },
] as const;

export const COMPANY_OVERVIEW = `BBS GOLD is a trusted name in the gold jewellery industry, proudly carrying a legacy of excellence since 1985. What began as a small venture with limited capital and challenging circumstances has today grown into a well-established manufacturing and wholesale gold jewellery business with an annual turnover running into crores.

For more than four decades, BBS GOLD has been committed to delivering superior craftsmanship, exceptional quality, and complete customer satisfaction. Our journey is a testament to dedication, integrity, and the unwavering trust of our customers and business partners across generations.

With over 40 years of industry experience, we have built our reputation by combining traditional jewellery-making techniques with modern manufacturing processes. Today, BBS GOLD stands as a symbol of trust, purity, and excellence in the wholesale gold jewellery market.`;

export const OUR_STORY = `The foundation of BBS GOLD was laid in 1985 with a simple vision—to create high-quality gold jewellery that reflects authenticity, elegance, and value. Despite beginning with minimal resources and facing numerous challenges, our commitment to quality and customer relationships helped us steadily grow into a recognised and respected jewellery manufacturer and wholesaler.

Over the years, we have expanded our capabilities and product offerings while staying true to our core values. The trust and support of our customers have enabled us to achieve remarkable growth and establish a strong presence in the gold jewellery industry.

From humble beginnings to becoming a multi-crore jewellery business, our story reflects perseverance, hard work, and a passion for excellence.`;

export const ABOUT_HIGHLIGHTS = [
  "Established in 1985",
  "More than 40 years of experience in the gold jewellery industry",
  "Gold Jewellery Manufacturer and Wholesaler",
  "Trusted by jewellery retailers and business partners across India",
  "Multi-crore turnover business",
  "Known for premium quality, purity, and exclusive designs",
] as const;

export const MISSION = {
  summary:
    "Our mission is to establish BBS GOLD as one of India's most trusted and admired gold jewellery brands in the manufacturing and wholesale segment.",
  points: [
    "Deliver exceptional quality gold jewellery.",
    "Maintain the highest standards of purity and craftsmanship.",
    "Offer an extensive range of exclusive and innovative designs.",
    "Build long-term relationships with our customers and retail partners.",
    "Continuously innovate while preserving the heritage of Indian jewellery craftsmanship.",
    "Expand BBS GOLD's presence across the Indian jewellery market.",
  ],
};

export const VISION = `To become a leading and globally recognised gold jewellery manufacturing and wholesale brand that represents trust, purity, innovation, and timeless craftsmanship.

At BBS GOLD, we believe that success is not measured merely by growth but by the relationships and trust we build with our customers and business associates.`;

export const CORE_VALUES: ValueItem[] = [
  {
    title: "Trust",
    description:
      "For over four decades, trust has been the foundation of our business. We value every relationship and are committed to maintaining transparency and authenticity in everything we do.",
  },
  {
    title: "Purity",
    description:
      "We are dedicated to offering gold jewellery that meets the highest purity standards, ensuring complete confidence for our customers and retail partners.",
  },
  {
    title: "Quality",
    description:
      "Every jewellery piece manufactured by BBS GOLD undergoes stringent quality standards to deliver excellence in design and durability.",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve our designs and manufacturing techniques to meet changing market trends while preserving traditional artistry.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Customer satisfaction remains our highest priority. We believe in providing not just jewellery but a premium business experience.",
  },
];

export const CRAFTSMANSHIP = `At BBS GOLD, craftsmanship is at the heart of everything we create.

Our highly skilled artisans and manufacturing experts combine traditional techniques with advanced production methods to produce jewellery that reflects precision, elegance, and timeless beauty.

Every ornament is carefully designed and manufactured with meticulous attention to detail, ensuring superior finishing and unmatched quality. Our commitment to craftsmanship enables us to offer jewellery that meets the expectations of modern consumers while honouring India's rich jewellery heritage.

Whether it is traditional designs or contemporary collections, every BBS GOLD creation represents excellence and perfection.`;

export const OWNER_MESSAGE = {
  quote: `At BBS GOLD, we believe that jewellery is not merely a product—it is a legacy that carries emotions, traditions, and trust. Since 1985, our commitment has remained unchanged: to provide the finest quality gold jewellery with honesty, purity, and excellence.

Every piece we manufacture reflects our passion for craftsmanship and our dedication to serving our customers and business partners with integrity. The trust we have earned over the past four decades is our greatest achievement and our biggest responsibility.

We sincerely thank everyone who has been a part of our journey. Your faith in BBS GOLD inspires us to continue creating timeless jewellery and building a brand that future generations can proudly trust.

Trust our purity. Believe in our craftsmanship. Choose BBS GOLD.`,
  author: "Santosh Bagade",
  role: "Founder",
  image: "/images/team/santosh-bagade.webp",
};

/** Brand & team imagery */
export const PLACEHOLDER_IMAGES = {
  hero: "/images/banners/banner-5.webp",
  about: "/images/products/product-14.webp",
  craftsmanship: "/images/products/product-16.webp",
  manufacturing: "/images/products/product-05.webp",
  director: "/images/team/santosh-bagade.webp",
} as const;

export {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  FEATURED_PRODUCT_IDS,
} from "./products";

/** Alias used across pages — full 32-piece wholesale catalogue */
export { PRODUCTS as COLLECTIONS, FEATURED_PRODUCT_IDS as FEATURED_COLLECTION_IDS } from "./products";

export const SERVICES: ServiceItem[] = [
  {
    id: "manufacturing",
    title: "Gold Jewellery Manufacturing",
    description:
      "End-to-end gold jewellery manufacturing with traditional craftsmanship and modern production excellence.",
    icon: "factory",
  },
  {
    id: "wholesale",
    title: "Wholesale Supply",
    description:
      "Reliable wholesale supply for jewellery retailers, dealers, and business partners across India.",
    icon: "package",
  },
  {
    id: "custom",
    title: "Custom Jewellery Manufacturing",
    description:
      "Custom designs and private-label manufacturing tailored to your brand and market needs.",
    icon: "sparkles",
  },
  {
    id: "bulk",
    title: "Bulk Orders",
    description:
      "Efficient bulk order fulfilment with consistent quality, purity, and timely delivery.",
    icon: "boxes",
  },
  {
    id: "retail-support",
    title: "Retail Partner Support",
    description:
      "Dedicated support for retail jewellery stores — from assortment planning to ongoing supply.",
    icon: "handshake",
  },
  {
    id: "quality",
    title: "Premium Quality Assurance",
    description:
      "Stringent quality checks ensuring purity, finishing, and durability in every piece.",
    icon: "shield-check",
  },
  {
    id: "design",
    title: "Design Consultation",
    description:
      "Expert design consultation to help partners curate collections that sell.",
    icon: "pen-tool",
  },
];

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    title: "Trusted Since 1985",
    description: "Four decades of integrity and relationships built on transparency.",
  },
  {
    title: "40+ Years of Experience",
    description: "Deep industry expertise across manufacturing and wholesale markets.",
  },
  {
    title: "Premium Manufacturing",
    description: "Superior craftsmanship combining heritage techniques with modern process.",
  },
  {
    title: "Exclusive Wholesale Collections",
    description: "Curated ranges designed for jewellery retailers and dealers.",
  },
  {
    title: "Purity & Quality Standards",
    description: "Uncompromising standards of purity, finishing, and durability.",
  },
  {
    title: "Wide Design Variety",
    description: "From temple and bridal to lightweight daily wear and designer lines.",
  },
  {
    title: "Transparent Practices",
    description: "Clear, honest business practices that partners can rely on.",
  },
  {
    title: "Customer-Centric Approach",
    description: "Long-term partnerships focused on mutual growth and satisfaction.",
  },
];

export const STATS = [
  { value: "1985", label: "Established" },
  { value: "40+", label: "Years of Excellence" },
  { value: "Multi-Crore", label: "Manufacturing Business" },
  { value: "Pan-India", label: "Retail Partners" },
] as const;

export function getWhatsAppUrl(message?: string) {
  const text = message ?? SITE.whatsappMessage;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function getEnquiryUrl(collectionName?: string) {
  const subject = collectionName
    ? `Enquiry: ${collectionName}`
    : "Wholesale Enquiry";
  return `/contact?subject=${encodeURIComponent(subject)}#form`;
}
