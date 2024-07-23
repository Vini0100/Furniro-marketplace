/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFF3E3",
        customGold: "#B88E2F",
        customGray: "#9F9F9F",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
