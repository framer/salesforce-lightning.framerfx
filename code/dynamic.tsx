import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDynamic: React.SFC = props => {
  return <System.Dynamic {...props} style={style} />;
};

export const Dynamic = withHOC(InnerDynamic);

Dynamic.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Dynamic, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isPaused: {
    title: "IsPaused",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isStatic: {
    title: "IsStatic",
    defaultValue: false,
    type: ControlType.Boolean
  },
  scorePolarity: {
    title: "ScorePolarity",
    defaultValue: false,
    type: ControlType.Boolean
  },
  strengthLevel: {
    title: "StrengthLevel",
    defaultValue: false,
    type: ControlType.Boolean
  },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean },
  trendDirection: {
    title: "TrendDirection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
