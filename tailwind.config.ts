import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-signika)", "sans-serif"], // Set Signika as default sans font
        geistSans: ["var(--font-geist-sans)", "sans-serif"], // Optional: If you need to use geistSans explicitly
        geistMono: ["var(--font-geist-mono)", "monospace"],  // Optional: If you need to use geistMono explicitly
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
