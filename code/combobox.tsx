import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCombobox = props => {
  return (
    <System.Combobox
      {...props}
      style={style}
      variant={"base"}
      labels={{
        label: props.label,
        cancelButton: props.cancelButton,
        doneButton: props.doneButton,
        multipleOptionsSelected: props.multipleOptionsSelected,
        noOptionsFound: props.noOptionsFound,
        placeholder: props.placeholder,
        placeholderReadOnly: props.placeholderReadOnly,
        removePillTitle: props.removePillTitle
      }}
    />
  );
};

export const Combobox = withHOC(InnerCombobox);

Combobox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Combobox, {
  label: {
    type: ControlType.String,
    title: "Label",
    defaultValue: "Label"
  },

  cancelButton: {
    type: ControlType.String,
    title: "Cancel Button",
    defaultValue: "Label"
  },

  doneButton: {
    type: ControlType.String,
    title: "Done Button",
    defaultValue: "Label"
  },

  multipleOptionsSelected: {
    type: ControlType.String,
    title: "Multiple Options",
    defaultValue: "Label"
  },

  noOptionsFound: {
    type: ControlType.String,
    title: "No Options Label",
    defaultValue: "Label"
  },

  placeholder: {
    type: ControlType.String,
    title: "Placeholder",
    defaultValue: "Placeholder"
  },

  placeholderReadOnly: {
    type: ControlType.String,
    title: "Placeholder Readonly",
    defaultValue: "Placeholder Readonly"
  },

  removePillTitle: {
    type: ControlType.String,
    title: "Remove Pill Title",
    defaultValue: "Remove Pill Title"
  },

  errorText: {
    title: "ErrorText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  // hasInputSpinner: {
  //   title: "HasInputSpinner",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  // hasMenuSpinner: {
  //   title: "HasMenuSpinner",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },

  multiple: {
    title: "Multiple",
    defaultValue: false,
    type: ControlType.Boolean
  },
  // options: { title: "Options", defaultValue: false, type: ControlType.Boolean },

  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  // selection: {
  //   title: "Selection",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  singleInputDisabled: {
    title: "SingleInputDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
