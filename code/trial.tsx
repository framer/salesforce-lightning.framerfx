import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTrial: React.SFC = props => {
  return <System.Trial {...props} style={style} />;
};

export const Trial = withHOC(InnerTrial);

Trial.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Trial, {
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
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  onRenderActions: {
    title: "OnRenderActions",
    defaultValue: false,
    type: ControlType.Boolean
  },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean }
});
