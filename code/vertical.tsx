import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerVertical: React.SFC = props => {
  return <System.Vertical {...props} style={style} />;
};

export const Vertical = withHOC(InnerVertical);

Vertical.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Vertical, {
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  categories: {
    title: "Categories",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectedId: {
    title: "SelectedId",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onSelect: {
    title: "OnSelect",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
