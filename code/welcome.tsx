import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerWelcome: React.SFC = props => {
  return <System.Welcome {...props} style={style} />;
};

export const Welcome = withHOC(InnerWelcome);

Welcome.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Welcome, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  onRenderInfoActions: {
    title: "OnRenderInfoActions",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestClose: {
    title: "OnRequestClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  infoBadge: {
    title: "InfoBadge",
    defaultValue: false,
    type: ControlType.Boolean
  },
  doNotShowAgainCheckbox: {
    title: "DoNotShowAgainCheckbox",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
