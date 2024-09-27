/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#328da8",
        colorSecondary: "#47acad",
        colorTertiary: "#2fa18a",
        colorQuanternary: "#87369e",
        colorGrayLight: "#efefef",
        colorGrarDark: "#333333",
        colorHover: "#edf5f8",
        colorLinkHover: "#cccccc",
        colorParagraph: "#4a4a4a",
        colorGreen: "#34eb49",
        colorWhite: "#ffffff",
        colorBlack: "#000000",
      },
    },
  },
  plugins: [],
};
