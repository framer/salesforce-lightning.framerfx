import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPill: React.SFC = props => {
  return <System.Pill {...props} style={style} />;
};

export const Pill = withHOC(InnerPill);

Pill.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Pill, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  avatar: { title: "Avatar", defaultValue: false, type: ControlType.Boolean },
  bare: { title: "Bare", defaultValue: false, type: ControlType.Boolean },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasError: {
    title: "HasError",
    defaultValue: false,
    type: ControlType.Boolean
  },
  href: { title: "Href", defaultValue: false, type: ControlType.Boolean },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  onBlur: { title: "OnBlur", defaultValue: false, type: ControlType.Boolean },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onFocus: { title: "OnFocus", defaultValue: false, type: ControlType.Boolean },
  onKeyDown: {
    title: "OnKeyDown",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRemove: {
    title: "OnRemove",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
