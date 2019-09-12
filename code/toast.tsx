import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToast = props => {
  return (
    <System.ToastContainer>
      <System.Toast
        {...props}
        style={style}
        labels={{
          heading: props.heading,
          details: props.details
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
    </System.ToastContainer>
  );
};

export const Toast = withHOC(InnerToast);

Toast.defaultProps = {
  width: 700,
  height: 82
};

addPropertyControls(Toast, {
  heading: {
    title: "Heading",
    defaultValue:
      "You've encountered some errors when trying to save edits to Samuel Smith.",
    type: ControlType.String
  },
  details: {
    title: "Details",
    defaultValue:
      "Here's some detail of what happened, being very descriptive and transparent.",
    type: ControlType.String
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  variant: {
    title: "Variant",
    defaultValue: "info",
    type: ControlType.Enum,
    options: ["error", "info", "succes", "warning"],
    optionTitles: ["Error", "Info", "Succes", "Warning"]
  },
  ...generateIconPropertyControls({ hidden: props => props.icon === false })
});
