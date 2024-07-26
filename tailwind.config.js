/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFF3E3",
        customBeige: "#FCF8F3",
        customBeige2: "#F9F1E7",
        customBeige3: "#FAF3EA",
        customGold: "#B88E2F",
        customGray: "#9F9F9F",
        customGray2: "#333333",
        customGray3: "#666666",
        customGray4: "#616161",
        customGray5: "#3A3A3A",
        customGray6: "#898989",
        customGray7: "#F4F5F7",
        customGray8: "#B0B0B0",
        customRed: "#E97171",
        customGreen: "#2EC1AC",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        scandinavianBackground:
          "url('./src/assets/images/home/scandinavian-interior-mockup-wall-decal-background.png')",
        topBarBackground: "url('./src/assets/images/topBar/topBarBg.png')",
      },
    },
  },
  plugins: [],
};
