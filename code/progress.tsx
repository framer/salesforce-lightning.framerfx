import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgress: React.SFC = props => {
  return <System.Progress {...props} style={style} />;
};

export const Progress = withHOC(InnerProgress);

Progress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Progress, {
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  theme: { title: "Theme", defaultValue: false, type: ControlType.Boolean },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  hasIcon: { title: "HasIcon", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  flowDirection: {
    title: "FlowDirection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean }
});
