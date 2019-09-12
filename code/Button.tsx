import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButton = props => {
  return (
    <System.Button
      {...props}
      style={style}
      iconCategory={props.icon && props.iconCategory}
      iconName={props.icon && props.iconName}
      iconPosition={props.icon && props.iconPosition}
      iconSize={props.icon && props.iconSize}
      iconVariant={props.icon && props.iconVariant}
    />
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: {
    type: ControlType.Boolean,
    title: "Icon",
    enabledTitle: "True",
    disabledTitle: "False",
    defaultValue: false
  },
  iconCategory: {
    title: "IconCategory",
    defaultValue: "utility",
    type: ControlType.String,
    hidden(props) {
      return props.icon === false;
    }
  },
  iconName: {
    title: "IconName",
    defaultValue: "download",
    type: ControlType.String,
    hidden(props) {
      return props.icon === false;
    }
  },
  iconPosition: {
    title: "IconPosition",
    defaultValue: "left",
    type: ControlType.Enum,
    options: ["left", "right"],
    optionTitles: ["Left", "Right"],
    hidden(props) {
      return props.icon === false;
    }
  },
  iconSize: {
    title: "Size",
    options: ["x-small", "small", "medium", "large"],
    optionTitles: ["X-Small", "Small", "Medium", "Large"],
    defaultValue: "medium",
    type: ControlType.Enum,
    hidden(props) {
      return props.icon === false;
    }
  },
  iconVariant: {
    title: "Icon Variant",
    type: ControlType.Enum,
    options: [
      "bare",
      "container",
      "border",
      "border-filled",
      "brand",
      "more",
      "global-header"
    ],
    optionTitles: [
      "bare",
      "container",
      "border",
      "border-filled",
      "brand",
      "more",
      "global-header"
    ],
    defaultValue: "bare",
    hidden(props) {
      return props.icon === false;
    }
  },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: "Click Me", type: ControlType.String },
  responsive: {
    title: "Responsive",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: [
      "base",
      "link",
      "neutral",
      "brand",
      "outline-brand",
      "destructive",
      "success",
      "text-destructive",
      "icon"
    ],
    optionTitles: [
      "base",
      "link",
      "neutral",
      "brand",
      "outline-brand",
      "destructive",
      "success",
      "text-destructive",
      "icon"
    ],
    defaultValue: "neutral"
  }
});
