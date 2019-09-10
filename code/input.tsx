import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerInput: React.SFC = props => {
  return <System.Input {...props} style={style} />;
};

export const Input = withHOC(InnerInput);

Input.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Input, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoComplete: {
    title: "AutoComplete",
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
  defaultValue: {
    title: "DefaultValue",
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
  fieldLevelHelpTooltip: {
    title: "FieldLevelHelpTooltip",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fixedTextLeft: {
    title: "FixedTextLeft",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fixedTextRight: {
    title: "FixedTextRight",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasSpinner: {
    title: "HasSpinner",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconLeft: {
    title: "IconLeft",
    defaultValue: false,
    type: ControlType.Boolean
  },
  iconRight: {
    title: "IconRight",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  inlineHelpText: {
    title: "InlineHelpText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inputRef: {
    title: "InputRef",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isStatic: {
    title: "IsStatic",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
  onBlur: { title: "OnBlur", defaultValue: false, type: ControlType.Boolean },
  onChange: {
    title: "OnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onFocus: { title: "OnFocus", defaultValue: false, type: ControlType.Boolean },
  onInput: { title: "OnInput", defaultValue: false, type: ControlType.Boolean },
  onInvalid: {
    title: "OnInvalid",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  onSelect: {
    title: "OnSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onSubmit: {
    title: "OnSubmit",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: false,
    type: ControlType.Boolean
  },
  minLength: {
    title: "MinLength",
    defaultValue: false,
    type: ControlType.Boolean
  },
  minValue: {
    title: "MinValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  maxLength: {
    title: "MaxLength",
    defaultValue: false,
    type: ControlType.Boolean
  },
  maxValue: {
    title: "MaxValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
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
  step: { title: "Step", defaultValue: false, type: ControlType.Boolean },
  styleInput: {
    title: "StyleInput",
    defaultValue: false,
    type: ControlType.Boolean
  },
  styleContainer: {
    title: "StyleContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  type: { title: "Type", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
