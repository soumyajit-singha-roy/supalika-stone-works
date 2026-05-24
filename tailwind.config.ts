import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#060A10",
          800: "#090D12",
          700: "#0A1628",
          600: "#111822",
          500: "#1E2A3A",
        },
        gold: {
          DEFAULT: "#C9922A",
          light: "#E8681A",
          muted: "rgba(201,146,42,0.15)",
        },
        concrete: "#F0EDE8",
        slate: {
          muted: "#A0AEC0",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(48px, 11vw, 130px)", { lineHeight: "0.95", letterSpacing: "0.02em" }],
        "section": ["clamp(36px, 8vw, 72px)", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "stat": ["72px", { lineHeight: "1" }],
        "stat-lg": ["88px", { lineHeight: "1" }],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(201,146,42,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(201,146,42,0.6)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9922A, #E8681A)",
        "dark-gradient": "linear-gradient(135deg, #111822, #0E1520)",
      },
    },
  },
  plugins: [],
};
export default config;
