import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTabs = props => {
  return (
    <System.Tabs {...props} style={style}>
      {props.tabs.map((item, index) => {
        return <System.TabsPanel label={item}>{item}</System.TabsPanel>;
      })}
    </System.Tabs>
  );
};

export const Tabs = withHOC(InnerTabs);

Tabs.defaultProps = {
  width: 300,
  height: 100
};

addPropertyControls(Tabs, {
  selectedIndex: {
    title: "SelectedIndex",
    defaultValue: 0,
    type: ControlType.Number
  },
  variant: {
    type: ControlType.Enum,
    title: "Variant",
    defaultValue: "default",
    options: ["default", "scoped"],
    optionTitles: ["Default", "Scoped"]
  },
  tabs: {
    type: ControlType.Array,
    title: "Tabs",
    defaultValue: ["Tab 1", "Tab 2"],
    propertyControl: {
      type: ControlType.String
    }
  }
});
