import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";

const InnerBadge = props => {
  return (
    <System.Badge
      {...props}
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

export const Badge = withHOC(InnerBadge);

Badge.defaultProps = {
  width: 150,
  height: 25
};

addPropertyControls(Badge, {
  content: {
    title: "Content",
    defaultValue: "423 Credits Available",
    type: ControlType.String
  },
  color: {
    title: "Color",
    defaultValue: "default",
    type: ControlType.Enum,
    options: ["default", "inverse", "light"],
    optionTitles: ["Default", "Inverse", "Light"]
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  iconAlignment: {
    title: "IconAlignment",
    options: ["left", "right"],
    optionTitles: ["Left", "Right"],
    defaultValue: "left",
    type: ControlType.Enum,
    hidden(props) {
      return props.icon === false;
    }
  },
  ...generateIconPropertyControls({ hidden: props => props.icon === false })
});
