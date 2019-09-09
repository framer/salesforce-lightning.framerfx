import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPopover: React.SFC = props => {
  return <System.Popover {...props} style={style} />;
};

export const Popover = withHOC(InnerPopover);

Popover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popover, {
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaLabelledby: {
    title: "AriaLabelledby",
    defaultValue: false,
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  body: { title: "Body", defaultValue: false, type: ControlType.Boolean },
  classNameBody: {
    title: "ClassNameBody",
    defaultValue: false,
    type: ControlType.Boolean
  },
  classNameFooter: {
    title: "ClassNameFooter",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  footer: { title: "Footer", defaultValue: false, type: ControlType.Boolean },
  footerStyle: {
    title: "FooterStyle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  footerWalkthroughActions: {
    title: "FooterWalkthroughActions",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasNoCloseButton: {
    title: "HasNoCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasNoNubbin: {
    title: "HasNoNubbin",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasNoTriggerStyles: {
    title: "HasNoTriggerStyles",
    defaultValue: false,
    type: ControlType.Boolean
  },
  heading: { title: "Heading", defaultValue: false, type: ControlType.Boolean },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onClose: { title: "OnClose", defaultValue: false, type: ControlType.Boolean },
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
  onOpen: { title: "OnOpen", defaultValue: false, type: ControlType.Boolean },
  onRequestClose: {
    title: "OnRequestClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestTargetElement: {
    title: "OnRequestTargetElement",
    defaultValue: false,
    type: ControlType.Boolean
  },
  position: {
    title: "Position",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stepText: {
    title: "StepText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  overlay: { title: "Overlay", defaultValue: false, type: ControlType.Boolean },
  triggerClassName: {
    title: "TriggerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  hoverCloseDelay: {
    title: "HoverCloseDelay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  openOn: { title: "OpenOn", defaultValue: false, type: ControlType.Boolean }
});
