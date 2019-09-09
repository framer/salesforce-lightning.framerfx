import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAccordion: React.SFC = props => {
  return <System.Accordion {...props} style={style} />;
};

export const Accordion = withHOC(InnerAccordion);

Accordion.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Accordion, {
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
