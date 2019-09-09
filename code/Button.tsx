import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "foo/bar.css";

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
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
