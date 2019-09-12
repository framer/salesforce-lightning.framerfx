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
  return (
    <System.ProgressBar
      {...props}
      style={style}
      labels={props.label && { label: props.complete }}
    />
  );
};

export const ProgressBar = withHOC(InnerProgress);

ProgressBar.defaultProps = {
  width: 300,
  height: 40
};

addPropertyControls(ProgressBar, {
  value: {
    title: "Value",
    defaultValue: 75,
    type: ControlType.Number,
    min: 0,
    max: 100,
    step: 1
  },
  label: {
    type: ControlType.Boolean,
    title: "Label",
    defaultValue: true
  },
  complete: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Progress Label",
    hidden(props) {
      return props.label === false;
    }
  },
  color: {
    type: ControlType.Enum,
    title: "Color",
    defaultValue: "default",
    options: ["default", "success"],
    optionTitles: ["Default", "Success"]
  },
  radius: {
    type: ControlType.Enum,
    title: "Radius",
    defaultValue: "default",
    options: ["default", "circular"],
    optionTitles: ["Default", "circular"]
  },
  orientation: {
    type: ControlType.Enum,
    title: "Orientation",
    defaultValue: "horizontal",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"]
  },
  thickness: {
    type: ControlType.Enum,
    title: "Tickness",
    defaultValue: "medium",
    options: ["x-small", "small", "medium", "large"],
    optionTitles: ["X Small", "Small", "Medium", "Large"]
  }
});
