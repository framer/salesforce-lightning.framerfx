import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDate: React.SFC = props => {
  return <System.Date {...props} style={style} />;
};

export const Date = withHOC(InnerDate);

Date.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Date, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  align: { title: "Align", defaultValue: false, type: ControlType.Boolean },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dateDisabled: {
    title: "DateDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  formatter: {
    title: "Formatter",
    defaultValue: false,
    type: ControlType.Boolean
  },
  formattedValue: {
    title: "FormattedValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  input: { title: "Input", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  isIsoWeekday: {
    title: "IsIsoWeekday",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onCalendarFocus: {
    title: "OnCalendarFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onChange: {
    title: "OnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onClose: { title: "OnClose", defaultValue: false, type: ControlType.Boolean },
  onOpen: { title: "OnOpen", defaultValue: false, type: ControlType.Boolean },
  onRequestClose: {
    title: "OnRequestClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestOpen: {
    title: "OnRequestOpen",
    defaultValue: false,
    type: ControlType.Boolean
  },
  parser: { title: "Parser", defaultValue: false, type: ControlType.Boolean },
  relativeYearFrom: {
    title: "RelativeYearFrom",
    defaultValue: false,
    type: ControlType.Boolean
  },
  relativeYearTo: {
    title: "RelativeYearTo",
    defaultValue: false,
    type: ControlType.Boolean
  },
  triggerClassName: {
    title: "TriggerClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean }
});
