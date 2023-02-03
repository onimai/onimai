const components = require("../dist/components")
const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  addComponents({
    ...components,
  })
}

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#faf7f6",
          100: "#f4f0ee",
          200: "#e4d8d4",
          300: "#d3c1ba",
          400: "#b39387",
          500: "#926453",
          600: "#835a4b",
          700: "#6e4b3e",
          800: "#583c32",
          900: "#483129",
        },
        yellow: {
          50: "#fffffa",
          100: "#fffef5",
          200: "#fffde6",
          300: "#fffcd6",
          400: "#fffab8",
          500: "#FFF899",
          600: "#e6df8a",
          700: "#bfba73",
          800: "#99955c",
          900: "#7d7a4b",
        },
        red: {
          50: "#fef9f9",
          100: "#fdf3f4",
          200: "#fbe1e2",
          300: "#f9ced1",
          400: "#f4aaaf",
          500: "#EF858C",
          600: "#d7787e",
          700: "#b36469",
          800: "#8f5054",
          900: "#754145",
        },
        blue: {
          50: "#f7fbfd",
          100: "#eff8fb",
          200: "#d8edf6",
          300: "#c0e2f0",
          400: "#91cde4",
          500: "#62b7d9",
          600: "#58a5c3",
          700: "#4a89a3",
          800: "#3b6e82",
          900: "#305a6a",
        },
      },
    },
  },
})
