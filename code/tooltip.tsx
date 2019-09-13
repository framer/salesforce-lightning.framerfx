import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip = props => {
  return (
    <System.Tooltip
      {...props}
      style={style}
      id={"tooltip"}
      isOpen={props.isOpen === false ? undefined : props.isOpen}
    />
  );
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  align: {
    title: "Align",
    defaultValue: "top",
    type: ControlType.Enum,
    options: [
      "top",
      "top left",
      "top right",
      "right",
      "right top",
      "right bottom",
      "bottom",
      "bottom left",
      "bottom right",
      "left",
      "left top",
      "left bottom"
    ],
    optionTitles: [
      "Top",
      "Top Left",
      "Top Right",
      "Right",
      "Right Top",
      "Right Bottom",
      "Bottom",
      "Bottom Left",
      "Bottom Right",
      "Left",
      "Left Top",
      "Left Bottom"
    ]
  },
  hoverCloseDelay: {
    title: "HoverCloseDelay",
    defaultValue: 50,
    type: ControlType.Number
  },
  hoverOpenDelay: {
    title: "HoverOpenDelay",
    defaultValue: 0,
    type: ControlType.Number
  },
  content: {
    type: ControlType.String,
    title: "Content",
    defaultValue:
      "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi."
  },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  theme: {
    title: "Theme",
    type: ControlType.Enum,
    defaultValue: "info",
    options: ["info", "error"],
    optionTitles: ["Info", "Error"]
  },
  variant: {
    title: "Variant",
    defaultValue: "base",
    type: ControlType.Enum,
    options: ["base", "learnMore", "list-item"],
    optionTitles: ["Base", "Learn More", "List Item"]
  }
});
