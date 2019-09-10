import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBadge: React.SFC = props => {
  return <System.Badge {...props} style={style} />;
};

export const Badge = withHOC(InnerBadge);

Badge.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Badge, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  color: { title: "Color", defaultValue: false, type: ControlType.Boolean },
  iconAlignment: {
    title: "IconAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  content: { title: "Content", defaultValue: false, type: ControlType.Boolean }
});
