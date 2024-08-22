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
        // Primary
        "Soft-blue": "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        // Neutral
        "main-BG": "hsl(217, 54%, 11%)",
        "card-BG": " hsl(216, 50%, 16%)",
        line: " hsl(215, 32%, 27%)",
        genial: " hsl(220, 15%, 55%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
