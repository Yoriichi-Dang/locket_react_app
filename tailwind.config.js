/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#17153B",
          500: "#2E236C",
          400: "#433D8B",
          300: "#A594F9",
          200: "#CDC1FF",
          100: "#C8ACD6",
          50: "#E5D9F2",
        },
      },
      fontFamily: {
        RRegular: ["Roboto-Regular", "sans-serif"],
        RBold: ["Roboto-Bold", "sans-serif"],
        RMedium: ["Roboto-Medium", "sans-serif"],
        RBlack: ["Roboto-Black", "sans-serif"],
        RThin: ["Roboto-Thin", "sans-serif"],
        RLight: ["Roboto-Light", "sans-serif"],
        DSBold: ["DancingScript-Bold", "sans-serif"],
        DSRegular: ["DancingScript-Regular", "sans-serif"],
        DSMedium: ["DancingScript-Medium", "sans-serif"],
        DSSemibold: ["DancingScript-SemiBold", "sans-serif"],
        Pbold: ["Poppins-Bold", "sans-serif"],
        Pmedium: ["Poppins-Medium", "sans-serif"],
        Pregular: ["Poppins-Regular", "sans-serif"],
        Pthin: ["Poppins-Thin", "sans-serif"],
        Plight: ["Poppins-Light", "sans-serif"],
        Pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
