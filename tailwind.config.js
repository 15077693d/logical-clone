/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      screens: {
        preXL: "1201px",
      },
      fontSize: {
        "8xl": ["7rem"],
      },
    },
  },
  plugins: [],
};
