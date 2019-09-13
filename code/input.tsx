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
      iconLeft={
        props.leftIcon && (
          <System.InputIcon
            assistiveText={{
              icon: "Left Icon"
            }}
            name={props.leftIconName}
            category={props.leftIconCategory}
          />
        )
      }
      iconRight={
        props.rightIcon && (
          <System.InputIcon
            assistiveText={{
              icon: "Right Icon"
            }}
            name={props.rightIconName}
            category={props.rightIconCategory}
          />
        )
      }
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
      "Text",
      "Password",
      "Datetime",
      "Datetime-local",
      "Date",
      "Month",
      "Time",
      "Week",
      "Number",
      "Email",
      "Url",
      "Search",
      "Tel",
      "Color"
    ]
  },
  label: { title: "Label", defaultValue: "My Label", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "Type here...",
    type: ControlType.String
  },
  inlineHelpText: {
    title: "InlineHelpText",
    defaultValue: "ex: (415) 111-2222",
    type: ControlType.String
  },
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
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasSpinner: {
    title: "HasSpinner",
    defaultValue: false,
    type: ControlType.Boolean
  },
  leftIcon: {
    title: "Left Icon",
    defaultValue: false,
    type: ControlType.Boolean
  },
  leftIconName: {
    type: ControlType.String,
    title: "L Icon Name",
    defaultValue: "search",
    hidden(props) {
      return props.leftIcon === false;
    }
  },
  leftIconCategory: {
    type: ControlType.String,
    title: "L Icon Category",
    defaultValue: "utility",
    hidden(props) {
      return props.leftIcon === false;
    }
  },
  rightIcon: {
    title: "Right Icon",
    defaultValue: false,
    type: ControlType.Boolean
  },
  rightIconName: {
    type: ControlType.String,
    title: "R Icon Name",
    defaultValue: "search",
    hidden(props) {
      return props.rightIcon === false;
    }
  },
  rightIconCategory: {
    type: ControlType.String,
    title: "R Icon Category",
    defaultValue: "utility",
    hidden(props) {
      return props.rightIcon === false;
    }
  },
  advancedOptions: {
    type: ControlType.Boolean,
    title: "Advanced Options",
    defaultValue: false,
    enabledTitle: "Show",
    disabledTitle: "Hide"
  },
  fixedTextLeft: {
    type: ControlType.String,
    title: "Left Text",
    defaultValue: "",
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  fixedTextRight: {
    type: ControlType.String,
    title: "Right Text",
    defaultValue: "",
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  minLength: {
    title: "MinLength",
    defaultValue: "0",
    type: ControlType.String,
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  maxLength: {
    title: "MaxLength",
    defaultValue: "30",
    type: ControlType.String,
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  minValue: {
    title: "MinValue",
    defaultValue: -10,
    type: ControlType.Number,
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  maxValue: {
    title: "MaxValue",
    defaultValue: 10,
    type: ControlType.Number,
    hidden(props) {
      return props.advancedOptions === false;
    }
  },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean,
    hidden(props) {
      return props.advancedOptions === false;
    }
  }
});
