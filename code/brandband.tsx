import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBrand: React.SFC = props => {
  return <System.BrandBand {...props} style={style} />;
};

export const Brand = withHOC(InnerBrand);

Brand.defaultProps = {
  width: 1152,
  height: 500
};

addPropertyControls(Brand, {
  image: {
    title: "Image",
    defaultValue: "default",
    type: ControlType.Enum,
    options: ["none", "default"],
    optionTitles: ["None", "Default"]
  },
  backgroundSize: {
    title: "Background Size",
    defaultValue: "contain",
    type: ControlType.Enum,
    options: ["contain", "cover"],
    optionTitles: ["Contain", "Cover"]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "medium", "large"],
    optionTitles: ["Small", "Medium", "Large"],
    defaultValue: "medium"
  }
});
