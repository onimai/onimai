/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../onimai-qwik/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("onimai")],
};
