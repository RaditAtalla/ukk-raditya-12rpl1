/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ["Roboto Slab"],
        roboto: ["Roboto"],
      },
      colors: {
        black: "#0E0E0E",
      },
    },
  },
  plugins: [],
};
