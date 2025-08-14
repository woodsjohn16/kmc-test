import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          dark: "#0e1414",
        },
        accent: {
          red: "#cf1430",
        },
        divider: { 
          light: "#ffffff",
        }
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
