import * as React from "react";
import * as System from "@salesforce/design-system-react";

import { url } from "framer/resource";

const path = url("./code/icons");

export function withHOC(Component): React.SFC {
  return (props: any) => {
    return (
      <System.IconSettings iconPath={path}>
        <Component {...props} />
      </System.IconSettings>
    );
  };
}
