import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { createIconPropertyControls } from "./icon";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

type Props = {
  height: number;
  width: number;
};

const InnerAlert = props => {
  return (
    <System.Alert
      icon={
        props.icon ? (
          <System.Icon
            category={props.category}
            name={props.name}
            size="large"
            assistiveText={{ label: "My Account" }}
          />
        ) : null
      }
      style={style}
      dismissible={props.dismissible}
      labels={{
        heading: props.heading,
        headingLink: props.headingLink
      }}
      variant={props.variant}
    />
  );
};

export const Alert = withHOC(InnerAlert);

Alert.defaultProps = {
  width: 900,
  height: 40
};

addPropertyControls(Alert, {
  dismissible: {
    title: "Dismissible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "You are in offline mode."
  },
  headingLink: {
    type: ControlType.String,
    title: "Heading Link",
    defaultValue: "More information"
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  variant: {
    type: ControlType.Enum,
    title: "Variant",
    options: ["error", "info", "offline", "warning"],
    optionTitles: ["Error", "Info", "Offline", "Warning"],
    defaultValue: "info"
  },
  ...createIconPropertyControls(props => props.icon === false)
});
