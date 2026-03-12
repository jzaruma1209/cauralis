import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06BFAD",
        secondary: "#26BF87",
        lima: "#59D979",
        "accent-blue": "#192E59",
        "background-dark": "#0A1426",
        "background-light": "#f5f8f8",
      },
      fontFamily: {
        display: ["DM Sans", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #06BFAD 0%, #59D979 100%)",
        "gradient-hero-text": "linear-gradient(90deg, #06BFAD 0%, #59D979 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
