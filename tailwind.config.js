/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F6EFE8",
        },
      },
      fontFamily: {
        "sans-pro": ["Source Sans Pro", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
      },
      fontSize: {
        "7xl": ["4.375rem", "4rem"],
        "9xl": ["9.375rem", "9rem"],
      },
    },
  },
  plugins: [],
};
