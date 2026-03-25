import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // M&U Brand Palette
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",  // Primary indigo
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          50:  "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",  // Purple accent
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        surface: {
          light: "#ffffff",
          dark: "#0a0a0f",
          "dark-card": "#111127",
          "dark-border": "#1e1e3a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Fira Code", "monospace"],
        display: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-dark": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.3) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(217,70,239,0.15) 0%, transparent 60%)",
        "hero-light": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(217,70,239,0.06) 0%, transparent 60%)",
        "card-glow": "radial-gradient(circle at top left, rgba(99,102,241,0.1), transparent 50%)",
        "grid-pattern": "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "beam": "beam 3s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        beam: {
          "0%": { opacity: "0", transform: "rotate(-45deg) translateX(-100%)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "rotate(-45deg) translateX(100%)" },
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(99,102,241,0.3)",
        "glow-md": "0 0 30px rgba(99,102,241,0.4)",
        "glow-lg": "0 0 60px rgba(99,102,241,0.5)",
        "glow-purple": "0 0 30px rgba(217,70,239,0.3)",
        "inner-glow": "inset 0 0 30px rgba(99,102,241,0.1)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.1)",
        "card-light": "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
