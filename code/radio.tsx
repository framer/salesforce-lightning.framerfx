import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadio = props => {
  return (
    <System.Radio {...props} style={style} labels={{ label: props.label }} />
  );
};

export const Radio = withHOC(InnerRadio);

Radio.defaultProps = {
  width: 130,
  height: 24
};

addPropertyControls(Radio, {
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: {
    title: "Label",
    defaultValue: "Radio Button",
    type: ControlType.String
  },
  variant: {
    title: "Variant",
    defaultValue: "base",
    type: ControlType.Enum,
    options: ["base", "button-group", "swatch"],
    optionTitles: ["Base", "Button Group", "Swatch"]
  }
});
