import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { createIconPropertyControls } from "./icon";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPill = props => {
  return (
    <System.Pill
      {...props}
      style={style}
      labels={{
        label: props.label,
        title: props.title,
        removeTitle: props.removeTitle
      }}
      icon={
        props.icon ? (
          <System.Icon
            category={props.category}
            name={props.name}
            size={props.size}
            assistiveText={{ label: props.assistiveText }}
          />
        ) : null
      }
    />
  );
};

export const Pill = withHOC(InnerPill);

Pill.defaultProps = {
  width: 100,
  height: 50
};

addPropertyControls(Pill, {
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  bare: { title: "Bare", defaultValue: false, type: ControlType.Boolean },
  hasError: {
    title: "HasError",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: {
    title: "Label",
    defaultValue: "Pill Label",
    type: ControlType.String
  },
  title: {
    title: "Title",
    defaultValue: "Full pill label verbiage mirrored here",
    type: ControlType.String
  },
  removeTitle: {
    title: "Remove Title",
    defaultValue: "Remove",
    type: ControlType.String
  },
  variant: {
    title: "Variant",
    defaultValue: "link",
    type: ControlType.Enum,
    options: ["link", "option"],
    optionTitles: ["Link", "Option"]
  },
  ...createIconPropertyControls(props => props.icon === false)
});
