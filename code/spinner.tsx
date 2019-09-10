import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(Spinner, {
  isDelayed: {
    title: "IsDelayed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: {
    title: "Size",
    defaultValue: "medium",
    type: ControlType.Enum,
    options: ["x-small", "small", "medium", "large"],
    optionTitles: ["x Small", "Small", "Medium", "Large"]
  },
  variant: {
    title: "Variant",
    defaultValue: "base",
    type: ControlType.Enum,
    options: ["base", "brand", "inverse"],
    optionTitles: ["Base", "Brand", "Inverse"]
  }
});
