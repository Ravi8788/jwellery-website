# BBS GOLD — Luxury Gold Jewellery Website

Premium manufacturing & wholesale website for **BBS GOLD** (Bagade Bandhu Saraf), established 1985.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Playfair Display + Inter)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Company story, mission, vision, values, MD message |
| `/collections` | Wholesale collection catalogue |
| `/services` | Manufacturing & wholesale services |
| `/contact` | Form, map, WhatsApp, Instagram |
| `/privacy-policy` | Privacy |
| `/terms` | Terms |
| `/account-deletion` | Data deletion |

## Content & images

Brand copy lives in `lib/constants/index.ts`. Collection and director images currently use placeholders — replace `PLACEHOLDER_IMAGES` and each collection `image` URL when client assets are ready.

Update phone, email, address, and WhatsApp number in `SITE` before production launch.

## Build

```bash
npm run build
npm start
```
