/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#7C3AED", // fialová
        neon: "#C7F000", // limetková
        peach: "#FF7A59", // losos
        paper: "#F2D5E3", // ružové pozadie
        brandBlue: "#4876ff",
        brandLime: "#d9f154",
        brandNavy: "#2e3192",
        brandOrange: "#ff7347",
        brandPink: "#f7d0e9",
        brandPurple: "#6F1E86",
        brandGray: "#fffdf9",
        yellow: "#F8D53F",
      },
      fontFamily: {
        sans: ["var(--font-space-mono)", "ui-sans-serif", "system-ui"],
        fredoka: ["var(--font-fredoka)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-disco)", "sans-serif"],
        bowlby: ["var(--font-bowlby)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
