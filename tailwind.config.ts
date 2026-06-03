import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171715",
        soot: "#2c2b28",
        paper: "#f7f4ee",
        mist: "#e9e4dc",
        clay: "#9b7f67",
        moss: "#64705f",
        slate: "#69717a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "var(--font-noto-serif)", "serif"]
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(23, 23, 21, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
