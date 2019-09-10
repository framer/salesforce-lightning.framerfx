import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTime: React.SFC = props => {
  return <System.Timepicker {...props} style={style} />;
};

export const Timepicker = withHOC(InnerTime);

Timepicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Timepicker, {
  constrainToScrollParent: {
    title: "ConstrainToScrollParent",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: {
    title: "Label",
    defaultValue: "Default Label",
    type: ControlType.String
  },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: "absolute",
    type: ControlType.Enum,
    options: ["absolute", "relative"]
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "Pick a time",
    type: ControlType.String
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stepInMinutes: {
    title: "StepInMinutes",
    defaultValue: 30,
    type: ControlType.Number
  }
});
