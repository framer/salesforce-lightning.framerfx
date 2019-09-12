import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAvatar = props => {
  return (
    <System.Avatar
      {...props}
      style={style}
      assistiveText={{ icon: `${props.variant} Icon Avatar` }}
    />
  );
};

export const Avatar = withHOC(InnerAvatar);

Avatar.defaultProps = {
  width: 32,
  height: 32
};

addPropertyControls(Avatar, {
  imgSrc: { title: "Img Src", type: ControlType.String },
  initials: {
    title: "Initials",
    defaultValue: "SF",
    type: ControlType.String
  },
  inverse: { title: "Inverse", defaultValue: false, type: ControlType.Boolean },
  label: {
    title: "Label",
    defaultValue: "Salesforce Design",
    type: ControlType.String
  },
  variant: {
    title: "Variant",
    defaultValue: "user",
    options: ["user", "entity"],
    optionTitles: ["User", "Entity"],
    type: ControlType.Enum
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["xx-small", "x-small", "small", "medium", "large"],
    optionTitles: ["XX-Small", "X-Small", "Small", "Medium", "Large"],
    defaultValue: "medium"
  },
  title: {
    title: "Title",
    defaultValue: "User Avatar",
    type: ControlType.String
  }
});
