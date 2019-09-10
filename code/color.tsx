import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerColor: React.SFC = props => {
  return <System.Color {...props} style={style} />;
};

export const Color = withHOC(InnerColor);

Color.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Color, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  classNameMenu: {
    title: "ClassNameMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  errorText: {
    title: "ErrorText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  errorTextWorkingColor: {
    title: "ErrorTextWorkingColor",
    defaultValue: false,
    type: ControlType.Boolean
  },
  events: { title: "Events", defaultValue: false, type: ControlType.Boolean },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hideInput: {
    title: "HideInput",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  swatchColors: {
    title: "SwatchColors",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultSelectedTab: {
    title: "DefaultSelectedTab",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  valueWorking: {
    title: "ValueWorking",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
