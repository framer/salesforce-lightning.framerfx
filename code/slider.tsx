import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSlider = props => {
  return (
    <System.Slider
      {...props}
      style={style}
      errorText={props.error && props.myErrorText}
    />
  );
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 315,
  height: 100
};

addPropertyControls(Slider, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  error: {
    type: ControlType.Boolean,
    title: "Error",
    defaultValue: false
  },
  myErrorText: {
    title: "ErrorText",
    defaultValue: "Number is not valid",
    type: ControlType.String,
    hidden(props) {
      return props.error === false;
    }
  },
  label: {
    title: "Label",
    defaultValue: "Slider Label",
    type: ControlType.String
  },
  max: { title: "Max", defaultValue: 100, type: ControlType.Number },
  min: { title: "Min", defaultValue: 0, type: ControlType.Number },
  size: {
    title: "Size",
    defaultValue: "medium",
    type: ControlType.Enum,
    options: ["x-small", "small", "medium", "large"],
    optionTitles: ["x Small", "Small", "Medium", "Large"]
  },
  step: {
    title: "Step",
    defaultValue: 1,
    type: ControlType.Number,
    displayStepper: true,
    step: 1
  },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
