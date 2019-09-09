import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButton: React.SFC = props => {
  return <System.Button {...props} style={style} />;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  buttonRef: {
    title: "ButtonRef",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hint: { title: "Hint", defaultValue: false, type: ControlType.Boolean },
  iconCategory: {
    title: "IconCategory",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconClassName: {
    title: "IconClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconName: {
    title: "IconName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconPath: {
    title: "IconPath",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconPosition: {
    title: "IconPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconSize: {
    title: "IconSize",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconVariant: {
    title: "IconVariant",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  onBlur: { title: "OnBlur", defaultValue: false, type: ControlType.Boolean },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onFocus: { title: "OnFocus", defaultValue: false, type: ControlType.Boolean },
  onKeyDown: {
    title: "OnKeyDown",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onKeyPress: {
    title: "OnKeyPress",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onKeyUp: { title: "OnKeyUp", defaultValue: false, type: ControlType.Boolean },
  onMouseDown: {
    title: "OnMouseDown",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onMouseEnter: {
    title: "OnMouseEnter",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onMouseLeave: {
    title: "OnMouseLeave",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onMouseUp: {
    title: "OnMouseUp",
    defaultValue: false,
    type: ControlType.Boolean
  },
  responsive: {
    title: "Responsive",
    defaultValue: false,
    type: ControlType.Boolean
  },
  tabIndex: {
    title: "TabIndex",
    defaultValue: false,
    type: ControlType.Boolean
  },
  type: { title: "Type", defaultValue: false, type: ControlType.Boolean },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean },
  tooltip: { title: "Tooltip", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean }
});
