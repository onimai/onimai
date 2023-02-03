const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  addComponents({
    ".container": {
      width: "100%",
      maxWidth: "100%",
      "@screen sm": {
        maxWidth: "640px",
      },
      "@screen md": {
        maxWidth: "768px",
      },
      "@screen lg": {
        maxWidth: "1024px",
      },
      "@screen xl": {
        maxWidth: "1280px",
      },
    },
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
