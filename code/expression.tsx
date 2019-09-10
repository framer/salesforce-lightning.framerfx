import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExpression: React.SFC = props => {
  return <System.Expression {...props} style={style} />;
};

export const Expression = withHOC(InnerExpression);

Expression.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Expression, {
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  events: { title: "Events", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  triggerType: {
    title: "TriggerType",
    defaultValue: false,
    type: ControlType.Boolean
  },
  customLogicValue: {
    title: "CustomLogicValue",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
