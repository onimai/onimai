/** @type {import('tailwindcss').Config} */
const colors = require("./src/colors");
module.exports = {
  content: ["./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
