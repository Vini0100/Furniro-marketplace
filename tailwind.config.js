/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFF3E3",
        customGold: "#B88E2F",
        customGray: "#9F9F9F",
        customGray2: "#333333",
        customGray3: "#666666",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        scandinavianBackground:
          "url('./src/assets/images/home/scandinavian-interior-mockup-wall-decal-background.png')",
      },
    },
  },
  plugins: [],
};
