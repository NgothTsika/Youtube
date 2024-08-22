/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      lg: " 1440px",
    },
    extend: {
      colors: {
        "Light-gray": "hsl(212, 45%, 89%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Dark-blue": " hsl(218, 44%, 22%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        w1: "400",
        w2: "700",
      },
    },
  },
  plugins: [],
};
