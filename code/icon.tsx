import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIcon: React.SFC = props => {
  return <System.Icon {...props} style={style} />;
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Icon, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  category: {
    title: "Category",
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
  colorVariant: {
    title: "ColorVariant",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
  path: { title: "Path", defaultValue: false, type: ControlType.Boolean },
  productTheme: {
    title: "ProductTheme",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean }
});
