import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSetup: React.SFC = props => {
  return <System.Setup {...props} style={style} />;
};

export const Setup = withHOC(InnerSetup);

Setup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Setup, {
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
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isCard: { title: "IsCard", defaultValue: false, type: ControlType.Boolean },
  onStepToggleIsOpen: {
    title: "OnStepToggleIsOpen",
    defaultValue: false,
    type: ControlType.Boolean
  },
  progressBar: {
    title: "ProgressBar",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
