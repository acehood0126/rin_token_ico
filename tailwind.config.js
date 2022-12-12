/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#0E0D18",
        'app-primary': "#4E34EE",
        'app-secondary': "#B235ED",

      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
