/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://www.limpothemes.com/images/home_section/background.jpg')",
      },
    },
  },
  plugins: [],
};
