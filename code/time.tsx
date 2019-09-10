import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTime: React.SFC = props => {
  return <System.Time {...props} style={style} />;
};

export const Time = withHOC(InnerTime);

Time.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Time, {
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
  formatter: {
    title: "Formatter",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inheritTargetWidth: {
    title: "InheritTargetWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  listItemRenderer: {
    title: "ListItemRenderer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onDateChange: {
    title: "OnDateChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  parser: { title: "Parser", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: false,
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stepInMinutes: {
    title: "StepInMinutes",
    defaultValue: false,
    type: ControlType.Boolean
  },
  strValue: {
    title: "StrValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean }
});
