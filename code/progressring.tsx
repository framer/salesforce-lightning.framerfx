import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgress = props => {
  return <System.ProgressRing {...props} style={style} />;
};

export const ProgressRing = withHOC(InnerProgress);

ProgressRing.defaultProps = {
  width: 25,
  height: 25
};

addPropertyControls(ProgressRing, {
  value: {
    title: "Value",
    defaultValue: 75,
    type: ControlType.Number,
    min: 0,
    max: 100,
    step: 1
  },
  hasIcon: {
    type: ControlType.Boolean,
    title: "Icon",
    defaultValue: false
  },
  theme: {
    type: ControlType.Enum,
    title: "Theme",
    defaultValue: "active",
    options: ["active", "warning", "expired", "complete"],
    optionTitles: ["Active", "Warning", "Expired", "Complete"]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    defaultValue: "Medium",
    options: ["medium", "large"],
    optionTitles: ["Medium", "Large"]
  },
  flowDirection: {
    type: ControlType.Enum,
    title: "Direction",
    defaultValue: "drain",
    options: ["drain", "fill"],
    optionTitles: ["Drain", "Fill"]
  }
});
