import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip: React.SFC = props => {
  return <System.Tooltip {...props} style={style} />;
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  content: { title: "Content", defaultValue: false, type: ControlType.Boolean },
  dialogClassName: {
    title: "DialogClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hoverCloseDelay: {
    title: "HoverCloseDelay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hoverOpenDelay: {
    title: "HoverOpenDelay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  triggerClassName: {
    title: "TriggerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  position: {
    title: "Position",
    defaultValue: false,
    type: ControlType.Boolean
  },
  triggerStyle: {
    title: "TriggerStyle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  theme: { title: "Theme", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
