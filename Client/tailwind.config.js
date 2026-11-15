/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmCream: "#F9F6EE",
        deepBrown: "#4A2E1B",
        warmGold: "#D4AF37",
        rustBrown: "#C45A2C",
        veganOrange: "#C45A2C",
      },
    },
  },
  plugins: [],
}

