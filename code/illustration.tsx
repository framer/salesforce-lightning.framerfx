import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIllustration: React.SFC = props => {
  return <System.Illustration {...props} style={style} />;
};

export const Illustration = withHOC(InnerIllustration);

Illustration.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Illustration, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  heading: { title: "Heading", defaultValue: false, type: ControlType.Boolean },
  illustration: {
    title: "Illustration",
    defaultValue: false,
    type: ControlType.Boolean
  },
  internalIllustration: {
    title: "InternalIllustration",
    defaultValue: false,
    type: ControlType.Boolean
  },
  messageBody: {
    title: "MessageBody",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
  path: { title: "Path", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean }
});
