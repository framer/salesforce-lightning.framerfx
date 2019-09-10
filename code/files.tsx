import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFiles: React.SFC = props => {
  return <System.Files {...props} style={style} />;
};

export const Files = withHOC(InnerFiles);

Files.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Files, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  crop: { title: "Crop", defaultValue: false, type: ControlType.Boolean },
  columnClassName: {
    title: "ColumnClassName",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
