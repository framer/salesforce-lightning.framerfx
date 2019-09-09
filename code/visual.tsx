import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerVisual: React.SFC = props => {
  return <System.Visual {...props} style={style} />;
};

export const Visual = withHOC(InnerVisual);

Visual.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Visual, {
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
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
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  coverable: {
    title: "Coverable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  links: { title: "Links", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean }
});
