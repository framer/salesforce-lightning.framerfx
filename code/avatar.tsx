import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAvatar: React.SFC = props => {
  return <System.Avatar {...props} style={style} />;
};

export const Avatar = withHOC(InnerAvatar);

Avatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Avatar, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  imgAlt: { title: "ImgAlt", defaultValue: false, type: ControlType.Boolean },
  imgSrc: { title: "ImgSrc", defaultValue: false, type: ControlType.Boolean },
  initials: {
    title: "Initials",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean }
});
