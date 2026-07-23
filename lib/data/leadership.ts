/**
 * Leadership data for the About page.
 * Update names, bios, and image paths here when client assets arrive.
 *
 * Image convention: place portraits in /public/images/team/
 * e.g. /images/team/abhishek-bagade.webp
 */

export type LeadershipRole = "Founder" | "Managing Director";

export type LeadershipMember = {
  id: string;
  name: string;
  designation: LeadershipRole;
  image: string;
  bio: string;
  /** Set false when photo is still a placeholder */
  hasPortrait?: boolean;
};

export const LEADERSHIP_INTRO = {
  title: "Leadership",
  subtitle:
    "The visionaries driving BBS GOLD forward with over four decades of excellence.",
  philosophy:
    "At BBS GOLD, leadership is rooted in trust, craftsmanship, and long-term partnership. Our founders built the house on hard work and integrity in 1985; today our Managing Directors carry that legacy forward—driving growth, manufacturing excellence, and thoughtful expansion without ever diluting what made the brand endure.",
} as const;

export const FOUNDERS: LeadershipMember[] = [
  {
    id: "santosh-bagade",
    name: "Santosh Bagade",
    designation: "Founder",
    image: "/images/team/santosh-bagade.webp",
    hasPortrait: true,
    bio: `Santosh Bagade laid the foundation of BBS GOLD in 1985 with a clear vision—to craft gold jewellery defined by purity, authenticity, and lasting trust. Through decades of disciplined hard work and unwavering dedication, he transformed a modest beginning into a respected manufacturing and wholesale house. His leadership continues to inspire the values of integrity and excellence that define Bagade Bandhu Saraf.`,
  },
  {
    id: "milind-subhash-bagade",
    name: "Milind Subhash Bagade",
    designation: "Founder",
    image: "/images/team/milind-subhash-bagade.webp",
    hasPortrait: true,
    bio: `Milind Subhash Bagade co-founded BBS GOLD in 1985, helping establish Bagade Bandhu Saraf as a name synonymous with purity, trust, and fine craftsmanship. Through perseverance and a deep commitment to quality, he played a vital role in building the company’s foundations and nurturing lasting relationships with customers and trade partners. His vision continues to guide the values of dedication and excellence at the heart of BBS GOLD.`,
  },
];

export const MANAGING_DIRECTORS: LeadershipMember[] = [
  {
    id: "abhishek-santosh-bagade",
    name: "Abhishek Santosh Bagade",
    designation: "Managing Director",
    image: "/images/team/abhishek-santosh-bagade.webp",
    hasPortrait: true,
    bio: `Abhishek Santosh Bagade is Managing Director of Bagade Bandhu Saraf, leading BBS GOLD’s next chapter—driving growth, design innovation, and manufacturing excellence while honouring the legacy built since 1985. He focuses on expanding retail partnerships, strengthening wholesale capabilities, and ensuring every collection upholds the brand’s standards of purity and craftsmanship.`,
  },
  {
    id: "tanmay-milind-bagade",
    name: "Tanmay Milind Bagade",
    designation: "Managing Director",
    image: "/images/team/tanmay-milind-bagade.webp",
    hasPortrait: true,
    bio: `Tanmay Milind Bagade serves as Managing Director of BBS GOLD, advancing the company’s growth, innovation, and manufacturing excellence while honouring the legacy established by the founders in 1985. He is committed to strengthening wholesale partnerships, elevating design and production standards, and expanding the brand’s presence—preserving the trust and craftsmanship that define Bagade Bandhu Saraf.`,
  },
];

export const COMPANY_TIMELINE = [
  {
    year: "1985",
    title: "Foundation",
    description:
      "BBS GOLD begins its journey under Bagade Bandhu Saraf—built on hard work, trust, and a commitment to pure gold craftsmanship.",
  },
  {
    year: "1990s",
    title: "Roots Deepen",
    description:
      "Steady growth in manufacturing capability and wholesale relationships across the jewellery trade.",
  },
  {
    year: "2000s",
    title: "Scale & Trust",
    description:
      "Expanded collections and stronger retail partnerships while preserving hallmark standards of purity and finishing.",
  },
  {
    year: "2010s",
    title: "Modern Excellence",
    description:
      "Traditional artistry meets refined production systems—delivering consistency for partners at scale.",
  },
  {
    year: "Today",
    title: "Legacy Forward",
    description:
      "A multi-crore manufacturing and wholesale house, led by a new generation while honouring four decades of excellence.",
  },
] as const;

export const MANUFACTURING_EXCELLENCE = {
  title: "Manufacturing Excellence",
  subtitle:
    "Precision processes, skilled artisanship, and uncompromising quality at every stage.",
  points: [
    {
      title: "Heritage Meets Process",
      description:
        "Traditional jewellery-making techniques refined through disciplined, modern production workflows.",
    },
    {
      title: "Purity First",
      description:
        "Every piece is manufactured to exacting purity and finishing standards our retail partners can trust.",
    },
    {
      title: "Scale Without Compromise",
      description:
        "Bulk-ready capacity with the same attention to detail that defined our earliest creations.",
    },
    {
      title: "Partner-Ready Supply",
      description:
        "Reliable wholesale fulfilment designed for jewellery retailers and dealers across India.",
    },
  ],
} as const;
