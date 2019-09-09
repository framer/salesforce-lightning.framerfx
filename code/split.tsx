import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSplit: React.SFC = props => {
  return <System.Split {...props} style={style} />;
};

export const Split = withHOC(InnerSplit);

Split.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Split, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  events: { title: "Events", defaultValue: false, type: ControlType.Boolean },
  master: { title: "Master", defaultValue: false, type: ControlType.Boolean },
  masterWidth: {
    title: "MasterWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  detail: { title: "Detail", defaultValue: false, type: ControlType.Boolean }
});
