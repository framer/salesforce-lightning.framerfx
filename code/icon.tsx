import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";
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

addPropertyControls(Icon, generateIconPropertyControls());
