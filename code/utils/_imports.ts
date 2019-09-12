import { url } from "framer/resource";

const iconPath =
  "../../node_modules/@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg";

async function loadIconSpriteSheet() {
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

if (!document.getElementById(iconPath)) {
  console.log("Loading SVG sprite");
  loadIconSpriteSheet();
}
