import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPanel: React.SFC = props => {
  return <System.Panel {...props} style={style} />;
};

export const Panel = withHOC(InnerPanel);

Panel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Panel, {
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
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
