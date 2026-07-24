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
  /** Shown under designation - e.g. "Bagade Bandhu Saraf" or "BBS GOLD" */
  brandLabel: string;
  image: string;
  bio: string;
  /** Short points for home leader cards */
  highlights: string[];
  focus: string;
  /** Optional crop focus inside the circle (e.g. "50% 45%") */
  facePosition?: string;
  /** Set false when photo is still a placeholder */
  hasPortrait?: boolean;
};

export const LEADERSHIP_INTRO = {
  title: "Leadership",
  subtitle:
    "The visionaries driving BBS Gold forward with over four decades of excellence.",
  philosophy:
    "At BBS Gold, leadership is rooted in trust, craftsmanship, and long-term partnership. Our founders built the house on hard work and integrity in 1985; today our Managing Directors carry that legacy forward-driving growth, manufacturing excellence, and thoughtful expansion without ever diluting what made the brand endure.",
} as const;

export const FOUNDERS: LeadershipMember[] = [
  {
    id: "santosh-subhash-bagade",
    name: "Santosh Subhash Bagade",
    designation: "Founder",
    brandLabel: "Bagade Bandhu Saraf",
    image: "/images/team/santosh-bagade.webp",
    hasPortrait: true,
    focus: "Heritage, trust & wholesale foundations",
    highlights: [
      "Established BBS Gold in 1985",
      "Built a culture of purity and integrity",
      "Guided multi-decade wholesale growth",
    ],
    bio: `Santosh Subhash Bagade laid the foundation of BBS Gold in 1985 with a clear vision-to craft gold jewellery defined by purity, authenticity, and lasting trust. Through decades of disciplined hard work and unwavering dedication, he transformed a modest beginning into a respected manufacturing and wholesale house.`,
  },
  {
    id: "milind-subhash-bagade",
    name: "Milind Subhash Bagade",
    designation: "Founder",
    brandLabel: "BBS GOLD",
    image: "/images/team/milind-subhash-bagade.webp",
    hasPortrait: true,
    focus: "Craftsmanship, trust & partner relationships",
    highlights: [
      "Co-founded BBS Gold in 1985",
      "Strengthened trade partnerships",
      "Championed quality craftsmanship",
    ],
    bio: `Milind Subhash Bagade co-founded BBS Gold in 1985, helping establish the brand as a name synonymous with purity, trust, and fine craftsmanship. Through perseverance and a deep commitment to quality, he played a vital role in building the company’s foundations.`,
  },
];

export const MANAGING_DIRECTORS: LeadershipMember[] = [
  {
    id: "abhishek-santosh-bagade",
    name: "Abhishek Santosh Bagade",
    designation: "Managing Director",
    brandLabel: "Bagade Bandhu Saraf",
    image: "/images/team/abhishek-santosh-bagade.webp",
    hasPortrait: true,
    focus: "Growth, innovation & retail partnerships",
    highlights: [
      "Leads BBS Gold expansion and innovation",
      "Strengthens wholesale capabilities",
      "Upholds purity and craftsmanship standards",
    ],
    bio: `Abhishek Santosh Bagade is Managing Director of BBS Gold, leading the next chapter-driving growth, design innovation, and manufacturing excellence while honouring the legacy built since 1985.`,
  },
  {
    id: "tanmay-milind-bagade",
    name: "Tanmay Milind Bagade",
    designation: "Managing Director",
    brandLabel: "BBS GOLD",
    image: "/images/team/tanmay-milind-bagade.webp",
    hasPortrait: true,
    facePosition: "50% 42%",
    focus: "Manufacturing excellence & market expansion",
    highlights: [
      "Advances BBS Gold manufacturing excellence",
      "Elevates design and production standards",
      "Preserves legacy while scaling growth",
    ],
    bio: `Tanmay Milind Bagade serves as Managing Director of BBS Gold, advancing the company’s growth, innovation, and manufacturing excellence while honouring the legacy established by the founders in 1985.`,
  },
];

export const COMPANY_TIMELINE = [
  {
    year: "1985",
    title: "Foundation",
    description:
      "BBS Gold begins its journey in 1985-built on hard work, trust, and a commitment to pure gold craftsmanship.",
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
      "Traditional artistry meets refined production systems-delivering consistency for partners at scale.",
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
