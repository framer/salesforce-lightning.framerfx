import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIllustration: React.SFC = props => {
  return <System.Illustration {...props} style={style} />;
};

export const Illustration = withHOC(InnerIllustration);

Illustration.defaultProps = {
  width: 700,
  height: 330
};

addPropertyControls(Illustration, {
  heading: {
    title: "Heading",
    defaultValue: "Big Heading",
    type: ControlType.String
  },
  illustration: {
    title: "Illustration",
    defaultValue: true,
    type: ControlType.Boolean
  },
  messageBody: {
    title: "MessageBody",
    defaultValue: "This is a string of text in the message body",
    type: ControlType.String
  },
  name: {
    title: "Name",
    defaultValue: "Name of the illustration",
    type: ControlType.String
  },
  path: { title: "Path", type: ControlType.File, allowedFileTypes: ["svg"] },
  size: {
    title: "Size",
    defaultValue: "small",
    type: ControlType.Enum,
    options: ["small", "large"],
    optionTitless: ["Small", "Large"]
  }
});
