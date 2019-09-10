import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumb: React.SFC = props => {
  return <System.Breadcrumb {...props} style={style} />;
};

export const Breadcrumb = withHOC(InnerBreadcrumb);

Breadcrumb.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Breadcrumb, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  overflowDropdownMenu: {
    title: "OverflowDropdownMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  styleContainer: {
    title: "StyleContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  trail: { title: "Trail", defaultValue: false, type: ControlType.Boolean }
});
