import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

import comboboxFilterAndLimit from "@salesforce/design-system-react/components/combobox/filter";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCombobox = props => {
  const [state, setState] = React.useState({
    inputValue: "",
    selection: []
  });

  let accounts = [
    {
      id: "1",
      label: "Acme",
      subTitle: "Account • San Francisco",
      type: "account"
    },
    {
      id: "2",
      label: "Salesforce.com, Inc.",
      subTitle: "Account • San Francisco",
      type: "account"
    },
    {
      id: "3",
      label: "Paddy's Pub",
      subTitle: "Account • Boston, MA",
      type: "account"
    },
    {
      id: "4",
      label: "Tyrell Corp",
      subTitle: "Account • San Francisco, CA",
      type: "account"
    },
    {
      id: "5",
      label: "Paper St. Soap Company",
      subTitle: "Account • Beloit, WI",
      type: "account"
    },
    {
      id: "6",
      label: "Nakatomi Investments",
      subTitle: "Account • Chicago, IL",
      type: "account"
    },
    { id: "7", label: "Acme Landscaping", type: "account" },
    {
      id: "8",
      label: "Acme Construction",
      subTitle: "Account • Grand Marais, MN",
      type: "account"
    }
  ];

  const accountsWithIcon = accounts.map(elem => ({
    ...elem,
    ...{
      icon: (
        <System.Icon
          assistiveText={{ label: "Account" }}
          category="standard"
          name={elem.type}
        />
      )
    }
  }));

  return (
    <System.Combobox
      {...props}
      style={style}
      variant={"base"}
      errorText={props.error && props.myErrorText}
      isOpen={props.isOpen === false ? undefined : props.isOpen}
      events={{
        onChange: (event, { value }) => {
          if (props.action) {
            props.action("onChange")(event, value);
          } else if (console) {
            console.log("onChange", event, value);
          }
          setState({ selection: [], inputValue: value });
        }
      }}
      options={comboboxFilterAndLimit({
        inputValue: state.inputValue,
        options: accountsWithIcon,
        selection: state.selection
      })}
      selection={state.selection}
      labels={{
        label: props.label,
        cancelButton: props.cancelButton,
        doneButton: props.doneButton,
        noOptionsFound: props.noOptionsFound,
        placeholder: props.placeholder,
        removePillTitle: props.removePillTitle
      }}
    />
  );
};

export const Combobox = withHOC(InnerCombobox);

Combobox.defaultProps = {
  width: 250,
  height: 80
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
    defaultValue: "Cancel"
  },

  doneButton: {
    type: ControlType.String,
    title: "Done Button",
    defaultValue: "Done"
  },

  noOptionsFound: {
    type: ControlType.String,
    title: "No Options Label",
    defaultValue: "No Matches Found"
  },

  placeholder: {
    type: ControlType.String,
    title: "Placeholder",
    defaultValue: "Search Salesforce"
  },

  removePillTitle: {
    type: ControlType.String,
    title: "Remove Pill Title",
    defaultValue: "Remove"
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
    defaultValue: "Something went wrong!",
    type: ControlType.String,
    hidden(props) {
      return props.error === false;
    }
  },

  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },

  multiple: {
    title: "Multiple",
    defaultValue: false,
    type: ControlType.Boolean
  },

  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
