/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      redForLogoBlend: "#F86A83",
      grayForLogoBlend: "#D2D3D4",
      grayForBackground: "#F8FAF9",
      grayForHeroRight: "#A9ADAD",
    },
    screens: {
      lg: "1200px",
    },
  },
  plugins: [],
};
