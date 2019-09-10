import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { createIconPropertyControls } from "./icon";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMedia = props => {
  return (
    <System.MediaObject
      {...props}
      style={style}
      figure={
        <System.Icon
          category={props.category}
          name={props.name}
          size={props.size}
          assistiveText={{ label: props.assistiveText }}
        />
      }
    />
  );
};

export const MediaObject = withHOC(InnerMedia);

MediaObject.defaultProps = {
  width: 400,
  height: 140
};

addPropertyControls(MediaObject, {
  canTruncate: {
    title: "CanTruncate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  body: {
    title: "Body",
    defaultValue: "This is the body of the Media Object Component",
    type: ControlType.String
  },
  verticalCenter: {
    title: "VerticalCenter",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...createIconPropertyControls(props => props.icon === false)
});
