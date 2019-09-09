import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Spinner, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  containerClassName: {
    title: "ContainerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  containerStyle: {
    title: "ContainerStyle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isDelayed: {
    title: "IsDelayed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isInput: { title: "IsInput", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
