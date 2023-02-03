const components = require("../dist/components");
const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  addComponents({
    ...components
  });
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { 
    extend: {
      colors: {
      }
    }
  },
});
