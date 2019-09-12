import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { url } from "framer/resource";
const iconPath = "code/icons";

export function withHOC(Component): React.SFC {
  return (props: any) => {
    /**
     * This effect adjusts the identifier of SVG <use> tags to remove external URLs, instead relying on
     * an identifier that's inserted into the top of the document via the script in ./utils/_imports.ts
     */
    React.useEffect(() => {
      const useElements = document.getElementsByTagName("use");
      for (const useElement of useElements as any) {
        if (useElement.getAttribute("xlink:href").indexOf("http") > -1) {
          useElement.setAttribute(
            "xlink:href",
            `#${useElement.getAttribute("xlink:href").split("#")[1]}`
          );
        }
      }
    }, []);

    return (
      <System.IconSettings iconPath={url(iconPath)}>
        <Component {...props} />
      </System.IconSettings>
    );
  };
}
