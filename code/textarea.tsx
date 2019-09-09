import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextarea: React.SFC = props => {
  return <System.Textarea {...props} style={style} />;
};

export const Textarea = withHOC(InnerTextarea);

Textarea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Textarea, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoFocus: {
    title: "AutoFocus",
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
  classNameContainer: {
    title: "ClassNameContainer",
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
  textareaRef: {
    title: "TextareaRef",
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
  maxLength: {
    title: "MaxLength",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: false,
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  wrap: { title: "Wrap", defaultValue: false, type: ControlType.Boolean }
});
