import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerColor = props => {
  return (
    <System.ColorPicker
      {...props}
      style={style}
      labels={{ label: props.label }}
      // errorText={props.error && props.errorText}
      // errorTextWorkingColor={props.error && props.errorTextWorkingColor}
      defaultSelectedTab={"swatches"}
    />
  );
};

export const Color = withHOC(InnerColor);

Color.defaultProps = {
  width: 150,
  height: 55
};

addPropertyControls(Color, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hideInput: {
    title: "HideInput",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: {
    title: "Label",
    defaultValue: "Choose Color",
    type: ControlType.String
  },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: "absolute",
    options: ["absolute", "overflowBoundaryElement", "relateive"],
    optionsTitles: ["absolute", "overflowBoundaryElement", "relateive"],
    type: ControlType.Enum
  },
  swatchColors: {
    type: ControlType.Array,
    title: "Swatch Colors",
    propertyControl: {
      type: ControlType.Color
    },
    defaultValue: ["#e3abec", "#c2dbf7", "#9fd6ff"]
  }
});
