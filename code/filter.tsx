import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFilter: React.SFC = props => {
  return <System.Filter {...props} style={style} />;
};

export const Filter = withHOC(InnerFilter);

Filter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Filter, {
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
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
  isError: { title: "IsError", defaultValue: false, type: ControlType.Boolean },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isLocked: {
    title: "IsLocked",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isNew: { title: "IsNew", defaultValue: false, type: ControlType.Boolean },
  isPermanent: {
    title: "IsPermanent",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onChange: {
    title: "OnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRemove: {
    title: "OnRemove",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  popover: { title: "Popover", defaultValue: false, type: ControlType.Boolean },
  predicate: {
    title: "Predicate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  property: {
    title: "Property",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
