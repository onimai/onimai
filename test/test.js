const cssMatcher = require("jest-matcher-css");
const defaultConfig = require("tailwindcss/defaultConfig");
const plugin = require("../src/index");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

function run(options = {}) {
  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [plugin(options)],
    })
  ).process("@tailwind components;@tailwind utilities;", {
    from: undefined,
  });
}

expect.extend({
  toMatchCss: cssMatcher,
});

test("it works", async () => {
  const output = `
    .test {
        display: block;
    }`;

  run().then((result) => {
    expect(result.css).toMatchCss(output);
  });
});
