import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerInput = props => {
  function onChange(e: React.ChangeEvent) {
    const element = e.nativeEvent.target as HTMLInputElement;
    const inputValue = element.value;
    if (props.onValueChange) {
      props.onValueChange(inputValue);
    }
  }

  return (
    <System.Input
      {...props}
      style={style}
      errorText={props.error && props.myErrorText}
      onChange={onChange}
    />
  );
};

export const Input = withHOC(InnerInput);

Input.defaultProps = {
  width: 300,
  height: 100
};

addPropertyControls(Input, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  error: {
    type: ControlType.Boolean,
    title: "Error",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  myErrorText: {
    title: "ErrorText",
    defaultValue: "Error Message",
    type: ControlType.String,
    hidden(props) {
      return props.error === false;
    }
  },
  hasSpinner: {
    title: "HasSpinner",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fixedTextLeft: {
    type: ControlType.String,
    title: "Left Text",
    defaultValue: ""
  },

  fixedTextRight: {
    type: ControlType.String,
    title: "Right Text",
    defaultValue: ""
  },
  // iconLeft: {
  //   title: "IconLeft",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  // iconRight: {
  //   title: "IconRight",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  inlineHelpText: {
    title: "InlineHelpText",
    defaultValue: "ex: (415) 111-2222",
    type: ControlType.String
  },
  label: { title: "Label", defaultValue: "My Label", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "Type here...",
    type: ControlType.String
  },
  minLength: {
    title: "MinLength",
    defaultValue: "0",
    type: ControlType.String
  },
  maxLength: {
    title: "MaxLength",
    defaultValue: "30",
    type: ControlType.String
  },
  minValue: {
    title: "MinValue",
    defaultValue: -10,
    type: ControlType.Number
  },
  maxValue: {
    title: "MaxValue",
    defaultValue: 10,
    type: ControlType.Number
  },
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
  step: {
    title: "Step",
    defaultValue: 1,
    type: ControlType.Number,
    displayStepper: true,
    step: 1
  },
  type: {
    title: "Type",
    defaultValue: "text",
    type: ControlType.Enum,
    options: [
      "text",
      "password",
      "datetime",
      "datetime-local",
      "date",
      "month",
      "time",
      "week",
      "number",
      "email",
      "url",
      "search",
      "tel",
      "color"
    ],
    optionTitles: [
      "text",
      "password",
      "datetime",
      "datetime-local",
      "date",
      "month",
      "time",
      "week",
      "number",
      "email",
      "url",
      "search",
      "tel",
      "color"
    ]
  }
  // value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
});
