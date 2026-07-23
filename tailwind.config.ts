import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "background-soft": "#FAF8F5",
        cream: "#F7F1E8",
        charcoal: "#1A1A1A",
        muted: "#5C5C5C",
        gold: "#C9A227",
        "gold-dark": "#A8861C",
        "gold-light": "#E8D48B",
        maroon: "#8B1E2D",
        "maroon-dark": "#6E1623",
        "maroon-soft": "#F8EEF0",
        footer: "#290708",
        "footer-muted": "#C9B2B3",
        border: "#E8E0D4",
      },
      borderRadius: {
        luxury: "0.25rem",
      },
      spacing: {
        "container-max": "1280px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "section-gap": "96px",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "1.1", letterSpacing: "0.04em", fontWeight: "600" },
        ],
        "display-md": [
          "48px",
          { lineHeight: "1.15", letterSpacing: "0.03em", fontWeight: "600" },
        ],
        "display-sm": [
          "36px",
          { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        "headline-lg": ["40px", { lineHeight: "1.25", fontWeight: "500" }],
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.75", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.7", fontWeight: "400" }],
        "label-caps": [
          "12px",
          { lineHeight: "1.4", letterSpacing: "0.14em", fontWeight: "600" },
        ],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(26, 26, 26, 0.06)",
        lift: "0 16px 40px rgba(139, 30, 45, 0.12)",
        card: "0 4px 24px rgba(26, 26, 26, 0.05)",
        gold: "0 8px 28px rgba(201, 162, 39, 0.18)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
