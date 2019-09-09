import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGlobal: React.SFC = props => {
  return <System.Global {...props} style={style} />;
};

export const Global = withHOC(InnerGlobal);

Global.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Global, {
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  cloud: { title: "Cloud", defaultValue: false, type: ControlType.Boolean },
  theme: { title: "Theme", defaultValue: false, type: ControlType.Boolean }
});
