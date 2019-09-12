import { url } from "framer/resource";
import * as iconManifest from "@salesforce-ux/design-system/ui.icons.json";

const iconPaths = iconManifest.map(
  manifestRow =>
    `../../node_modules/@salesforce-ux/design-system/assets/icons/${manifestRow.name}-sprite/svg/symbols.svg`
);

function loadIconSpriteSheet(iconPath: string) {
  const request = new XMLHttpRequest();
  request.open("GET", url(iconPath), true);
  request.send();
  request.onload = function(e) {
    const div = document.createElement("div");
    div.innerHTML = request.responseText;
    div.id = iconPath;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}

for (const iconPath of iconPaths) {
  if (!document.getElementById(iconPath)) {
    loadIconSpriteSheet(iconPath);
  }
}
