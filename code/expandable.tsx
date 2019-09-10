import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExpandable: React.SFC = props => {
  return <System.Expandable {...props} style={style} />;
};

export const Expandable = withHOC(InnerExpandable);

Expandable.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Expandable, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  nonCollapsible: {
    title: "NonCollapsible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onToggleOpen: {
    title: "OnToggleOpen",
    defaultValue: false,
    type: ControlType.Boolean
  },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean }
});
