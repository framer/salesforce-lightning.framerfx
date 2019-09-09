const { convert, emitComponents } = require("@framerjs/component-importer");

const fs = require("fs");
const path = require("path");

const json = JSON.parse(
  fs.readFileSync(
    "node_modules/@salesforce/design-system-react/lib/components/component-docs.json"
  )
)["button"];

const comp = convert({
  name: "Button",
  propTypes: [
    { name: "disabled", type: "boolean", defaultValue: "false", title: "" }
  ]
});

async function main() {
  const components = await emitComponents({
    packageName: "@salesforce/whatever",
    additionalImports: ["import 'foo/bar.css'"],
    components: [comp]
  });

  for (const comp of components) {
    if (comp.type === "component") {
      fs.writeFileSync(path.join("code/", comp.fileName), comp.outputSource);
    } else if (comp.type === "hoc") {
      fs.writeFileSync(path.join("code/", comp.fileName), comp.outputSource);
    }
  }
}

main();
