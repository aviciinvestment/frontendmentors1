/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DMSans", "sans-serif"],
        Bricolage_Grotesque: ["Bricolage_Grotesque", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        animation: {
          fadeIn: "fadeIn 1s ease-out forwards",
        },
      },
    },
  },
  plugins: [],
};
