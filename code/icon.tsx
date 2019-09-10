import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIcon = props => {
  return (
    <System.Icon
      style={style}
      assistiveText={{ label: props.assistiveText }}
      category={props.category}
      name={props.name}
      size={props.size}
    />
  );
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 155,
  height: 155
};

export function createIconPropertyControls(hidden?: (props: any) => boolean) {
  return {
    category: {
      type: ControlType.String,
      defaultValue: "action",
      title: "Category",
      hidden: hidden || (() => false)
    },
    name: {
      type: ControlType.String,
      title: "Name",
      defaultValue: "add_contact",
      hidden: hidden || (() => false)
    },
    size: {
      type: ControlType.Enum,
      title: "Size",
      options: ["xx-small", "x-small", "small", "medium", "large"],
      optionTitles: ["XX-Small", "X-Small", "Small", "Medium", "Large"],
      defaultValue: "medium",
      hidden: hidden || (() => false)
    },
    assistiveText: {
      type: ControlType.String,
      title: "Assistive Text",
      defaultValue: "SLDS Icon",
      hidden: hidden || (() => false)
    }
  };
}

addPropertyControls(Icon, createIconPropertyControls());
