import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPopover = props => {
  return (
    <System.Popover
      body={props.body}
      heading={props.heading}
      disabled={props.disabled}
      {...props}
    >
      <System.Button label="Trigger Popover" />
    </System.Popover>
  );
};

export const Popover = withHOC(InnerPopover);

Popover.defaultProps = {
  width: 135,
  height: 25
};

addPropertyControls(Popover, {
  body: {
    title: "Body",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: ControlType.String
  },
  heading: {
    title: "Heading",
    defaultValue: "Header Title",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  // footer: { title: "Footer", defaultValue: false, type: ControlType.Boolean },

  // footerWalkthroughActions: {
  //   title: "FooterWalkthroughActions",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  hasNoCloseButton: {
    title: "HasNoCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasNoNubbin: {
    title: "HasNoNubbin",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  stepText: {
    title: "StepText",
    defaultValue: "This is some step text",
    type: ControlType.String
  },
  variant: {
    title: "Variant",
    defaultValue: "base",
    type: ControlType.Enum,
    options: ["base", "error", "walkthrough", "walkthrough-action", "warning"],
    optionTitles: [
      "base",
      "error",
      "walkthrough",
      "walkthrough-action",
      "warning"
    ]
  }
});
