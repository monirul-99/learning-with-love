/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", " sans-serif"],
        stylish: ["Great Vibes", "cursive"],
        Dancing: ["Dancing Script", "cursive"],
        Kalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
