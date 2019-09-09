import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPage: React.SFC = props => {
  return <System.Page {...props} style={style} />;
};

export const Page = withHOC(InnerPage);

Page.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Page, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  details: { title: "Details", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  info: { title: "Info", defaultValue: false, type: ControlType.Boolean },
  joined: { title: "Joined", defaultValue: false, type: ControlType.Boolean },
  nameSwitcherDropdown: {
    title: "NameSwitcherDropdown",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderActions: {
    title: "OnRenderActions",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderControls: {
    title: "OnRenderControls",
    defaultValue: false,
    type: ControlType.Boolean
  },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean },
  trail: { title: "Trail", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
