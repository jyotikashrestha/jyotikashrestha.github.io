/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#45364B",
        secondary: "#f0a81a",
        subheading: "#45364b",
        heading: "#2d2327",
        ternary: "#F6F6F6",
      },
      fontFamily: {
        jost: ["Jost"],
        "open-sans": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
