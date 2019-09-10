import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCard: React.SFC = props => {
  return <System.Card {...props} style={style} />;
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  bodyClassName: {
    title: "BodyClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  empty: { title: "Empty", defaultValue: false, type: ControlType.Boolean },
  filter: { title: "Filter", defaultValue: false, type: ControlType.Boolean },
  footer: { title: "Footer", defaultValue: false, type: ControlType.Boolean },
  hasNoHeader: {
    title: "HasNoHeader",
    defaultValue: false,
    type: ControlType.Boolean
  },
  header: { title: "Header", defaultValue: false, type: ControlType.Boolean },
  heading: { title: "Heading", defaultValue: false, type: ControlType.Boolean },
  headerActions: {
    title: "HeaderActions",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean }
});
