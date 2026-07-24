import { SITE } from "@/lib/constants";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.parentCompany,
    url: SITE.url,
    logo: `${SITE.url}/images/brand/bbs-gold-logo.webp`,
    foundingDate: String(SITE.established),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phones,
    sameAs: [SITE.instagram],
    founder: {
      "@type": "Person",
      name: SITE.managingDirector,
      jobTitle: "Managing Director",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/og-image.svg`,
    url: SITE.url,
    telephone: SITE.phones,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Satara",
      addressRegion: "Maharashtra",
      streetAddress: SITE.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.map.lat,
      longitude: SITE.map.lng,
    },
    hasMap: SITE.map.url,
    foundingDate: String(SITE.established),
    priceRange: "$$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
