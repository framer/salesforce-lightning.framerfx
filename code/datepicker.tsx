import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDate: React.SFC = props => {
  console.log(System.Datepicker);

  return (
    <System.Datepicker
      {...props}
      style={style}
      labels={{
        label: "Date"
      }}
      onChange={() => {}}
      onCalendarFocus={() => {}}
    />
  );
};

export const DatePicker = withHOC(InnerDate);

DatePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DatePicker, {
  align: {
    title: "Align",
    defaultValue: "left",
    type: ControlType.Enum,
    options: ["left", "right"],
    optionTitles: ["Left", "Right"]
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  // labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  isIsoWeekday: {
    title: "IsIsoWeekday",
    defaultValue: false,
    type: ControlType.Boolean
  },
  relativeYearFrom: {
    title: "RelativeYearFrom",
    defaultValue: -10,
    type: ControlType.Number
  },
  relativeYearTo: {
    title: "RelativeYearTo",
    defaultValue: 10,
    type: ControlType.Number
  }
  // value: { title: "Value", defaultValue: false, type: ControlType.Boolean }
});
