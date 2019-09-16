import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckbox = props => {
  return (
    <System.Checkbox
      {...props}
      style={style}
      labels={{ label: props.label }}
      errorText={props.error && props.errorText}
    />
  );
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 100,
  height: 24
};

addPropertyControls(Checkbox, {
  label: { title: "Label", defaultValue: "Checkbox", type: ControlType.String },
  variant: {
    title: "Variant",
    defaultValue: "base",
    type: ControlType.Enum,
    options: ["base", "toggle", "button-group"],
    optionTitles: ["base", "toggle", "button-group"]
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  error: {
    type: ControlType.Boolean,
    title: "Error",
    enabledTitle: "True",
    disabledTitle: "False",
    defaultValue: false
  },
  errorText: {
    title: "ErrorText",
    defaultValue: "This field has an error",
    type: ControlType.String,
    hidden(props) {
      return props.error === false;
    }
  },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  indeterminate: {
    type: ControlType.Boolean,
    title: "Indeterminate",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
