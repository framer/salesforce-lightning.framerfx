import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerModal: React.SFC = props => {
  return <System.Modal {...props} style={style} />;
};

export const Modal = withHOC(InnerModal);

Modal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Modal, {
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
  ariaHideApp: {
    title: "AriaHideApp",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  contentClassName: {
    title: "ContentClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  contentStyle: {
    title: "ContentStyle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  directional: {
    title: "Directional",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableClose: {
    title: "DisableClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dismissOnClickOutside: {
    title: "DismissOnClickOutside",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestClose: {
    title: "OnRequestClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  footer: { title: "Footer", defaultValue: false, type: ControlType.Boolean },
  header: { title: "Header", defaultValue: false, type: ControlType.Boolean },
  headerClassName: {
    title: "HeaderClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  parentSelector: {
    title: "ParentSelector",
    defaultValue: false,
    type: ControlType.Boolean
  },
  portalClassName: {
    title: "PortalClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  prompt: { title: "Prompt", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  tagline: { title: "Tagline", defaultValue: false, type: ControlType.Boolean },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean },
  heading: { title: "Heading", defaultValue: false, type: ControlType.Boolean },
  toast: { title: "Toast", defaultValue: false, type: ControlType.Boolean }
});
