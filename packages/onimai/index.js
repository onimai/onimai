const colors = require("./src/colors");
module.exports = require("tailwindcss/plugin")(
  ({ addComponents, addBase }) => {
    addBase(require("./dist/base.js"));
    addComponents(require("./dist/components.js"));
  },
  {
    theme: {
      extend: {
        colors: {
          ...colors,
        },
      },
    },
  }
);
