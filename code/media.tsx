import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMedia: React.SFC = props => {
  return <System.Media {...props} style={style} />;
};

export const Media = withHOC(InnerMedia);

Media.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Media, {
  canTruncate: {
    title: "CanTruncate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  body: { title: "Body", defaultValue: false, type: ControlType.Boolean },
  figure: { title: "Figure", defaultValue: false, type: ControlType.Boolean },
  verticalCenter: {
    title: "VerticalCenter",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
