/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        crema: "#fff5e1",
        rosa: "#ffc0cb",
        chocolate: {
          DEFAULT: "#8b4513",
          hover: "#6b3410",
          dark: "#4a240b",
        },
        marron: "#5d4037",
        dorado: "#ffd700",
        menta: "#98e4d6",
        salmon: "#ffa07a",
      },
    },
  },
  plugins: [],
};