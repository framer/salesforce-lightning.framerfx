import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTabs: React.SFC = props => {
  return <System.Tabs {...props} style={style} />;
};

export const Tabs = withHOC(InnerTabs);

Tabs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tabs, {
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultSelectedIndex: {
    title: "DefaultSelectedIndex",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onSelect: {
    title: "OnSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  selectedIndex: {
    title: "SelectedIndex",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
