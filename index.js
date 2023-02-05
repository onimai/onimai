module.exports = require("tailwindcss/plugin")(
  ({ addComponents, addUtilities }) => {
    addComponents(require("./dist/index"));
  }
);
