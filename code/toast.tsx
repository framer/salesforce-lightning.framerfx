import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToast: React.SFC = props => {
  return <System.Toast {...props} style={style} />;
};

export const Toast = withHOC(InnerToast);

Toast.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Toast, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  duration: {
    title: "Duration",
    defaultValue: false,
    type: ControlType.Boolean
  },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  onClickHeadingLink: {
    title: "OnClickHeadingLink",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  onRequestClose: {
    title: "OnRequestClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
