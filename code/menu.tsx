import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenu: React.SFC = props => {
  return <System.Menu {...props} style={style} />;
};

export const Menu = withHOC(InnerMenu);

Menu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Menu, {
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  buttonClassName: {
    title: "ButtonClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  buttonInverse: {
    title: "ButtonInverse",
    defaultValue: false,
    type: ControlType.Boolean
  },
  buttonVariant: {
    title: "ButtonVariant",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checkmark: {
    title: "Checkmark",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  containerClassName: {
    title: "ContainerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hint: { title: "Hint", defaultValue: false, type: ControlType.Boolean },
  hoverCloseDelay: {
    title: "HoverCloseDelay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconCategory: {
    title: "IconCategory",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconName: {
    title: "IconName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconPosition: {
    title: "IconPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconVariant: {
    title: "IconVariant",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconSize: {
    title: "IconSize",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  listItemRenderer: {
    title: "ListItemRenderer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  length: { title: "Length", defaultValue: false, type: ControlType.Boolean },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuStyle: {
    title: "MenuStyle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  nubbinPosition: {
    title: "NubbinPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onBlur: { title: "OnBlur", defaultValue: false, type: ControlType.Boolean },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onFocus: { title: "OnFocus", defaultValue: false, type: ControlType.Boolean },
  openOn: { title: "OpenOn", defaultValue: false, type: ControlType.Boolean },
  onKeyDown: {
    title: "OnKeyDown",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  onSelect: {
    title: "OnSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onOpen: { title: "OnOpen", defaultValue: false, type: ControlType.Boolean },
  onClose: { title: "OnClose", defaultValue: false, type: ControlType.Boolean },
  options: { title: "Options", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  tabIndex: {
    title: "TabIndex",
    defaultValue: false,
    type: ControlType.Boolean
  },
  overlay: { title: "Overlay", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  tooltip: { title: "Tooltip", defaultValue: false, type: ControlType.Boolean },
  tooltipMenuItem: {
    title: "TooltipMenuItem",
    defaultValue: false,
    type: ControlType.Boolean
  },
  triggerClassName: {
    title: "TriggerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  multiple: {
    title: "Multiple",
    defaultValue: false,
    type: ControlType.Boolean
  },
  width: { title: "Width", defaultValue: false, type: ControlType.Boolean }
});
