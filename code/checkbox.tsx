import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckbox: React.SFC = props => {
  return <System.Checkbox {...props} style={style} />;
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Checkbox, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  defaultChecked: {
    title: "DefaultChecked",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  errorText: {
    title: "ErrorText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  indeterminate: {
    title: "Indeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
  onBlur: { title: "OnBlur", defaultValue: false, type: ControlType.Boolean },
  onChange: {
    title: "OnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onFocus: { title: "OnFocus", defaultValue: false, type: ControlType.Boolean },
  onKeyDown: {
    title: "OnKeyDown",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onKeyPress: {
    title: "OnKeyPress",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onKeyUp: { title: "OnKeyUp", defaultValue: false, type: ControlType.Boolean },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  role: { title: "Role", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean },
  coverable: {
    title: "Coverable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderVisualPicker: {
    title: "OnRenderVisualPicker",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderVisualPickerSelected: {
    title: "OnRenderVisualPickerSelected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderVisualPickerNotSelected: {
    title: "OnRenderVisualPickerNotSelected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean }
});
