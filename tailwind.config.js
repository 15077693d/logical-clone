/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "bauziet-variable": ["bauziet-variable"],
    },
    extend: {
      colors: {
        redForLogoBlend: "#F86A83",
        grayForLogoBlend: "#D2D3D4",
        grayForBackground: "#E7E9EA",
        grayForHeroLeft: "#F8FAF9",
        grayForHeroRight: "#B3B7B7",
        formBg: "#FFFFFF",
        inputBg: "#F8FAF9",
        inputBorder: "#E7E9EA",
        inputError: "#FF0000",
        inputBorderActive: "#ffffff",
        buttonBg: "#000000",
      },
      screens: {
        sm: "640px",
        md: "768px",
        preLG: "800px",
        lg: "1024px",
        preXL: "1201px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        "8xl": ["7rem", "1"],
      },
      backgroundImage: {
        "form-right": "url('/images/dark-bg.jpg')",
      },
    },
  },
  plugins: [],
};
