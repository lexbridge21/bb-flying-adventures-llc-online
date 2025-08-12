/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blanco: ["Blanco", "serif"],
        chiswick: ["Chiswick", "serif"],
      },
      colors: {
        black: "#000000", // ensure black is defined
      },
    },
  },
  plugins: [],
};
