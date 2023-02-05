const fs = require("fs");
const glob = require("glob");
const postcss = require("postcss");
const postcssJs = require("postcss-js");

glob("dist/**.css", (err, files) => {
  if (err) throw err;

  for (const file of files) {
    const css = fs.readFileSync(file, "utf-8");
    const filename = file.replace(".css", ".js");

    // this is a fix to https://github.com/postcss/postcss-js/issues/69
    const root = postcss.parse(css);
    const result = [];
    root.each((child) => {
      if (child.type !== "comment") {
        result.push(
          postcssJs.objectify({
            each(fn) {
              fn(child);
            },
          })
        );
      }
    });

    fs.writeFileSync(filename, `module.exports = ${JSON.stringify(result)};`);
    console.log(`${file} -> ${filename}`);
  }
});
