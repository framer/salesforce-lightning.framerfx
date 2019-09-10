import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSlider: React.SFC = props => {
  return <System.Slider {...props} style={style} />;
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slider, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  classNameContainer: {
    title: "ClassNameContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  max: { title: "Max", defaultValue: false, type: ControlType.Boolean },
  min: { title: "Min", defaultValue: false, type: ControlType.Boolean },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
  onChange: {
    title: "OnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onInput: { title: "OnInput", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  step: { title: "Step", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
