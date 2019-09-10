import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const InnerDynamic = props => {
  return <System.DynamicIcon {...props} title={"Dynamic Icon"} />;
};

export const DynamicIcon = withHOC(InnerDynamic);

DynamicIcon.defaultProps = {
  width: 16,
  height: 16
};

addPropertyControls(DynamicIcon, {
  variant: {
    title: "Variant",
    defaultValue: "eq",
    type: ControlType.Enum,
    options: ["ellie", "eq", "score", "strength", "trend", "typing", "waffle"],
    optionTitles: [
      "Ellie",
      "Eq",
      "Score",
      "Strength",
      "Trend",
      "Typing",
      "Waffle"
    ]
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
    defaultValue: "positive",
    type: ControlType.Enum,
    options: ["positive", "negative"],
    optionTitles: ["Positive", "Negative"]
  },
  strengthLevel: {
    title: "StrengthLevel",
    defaultValue: "0",
    type: ControlType.Enum,
    options: ["-3", "-2", "-1", "0", "1", "2", "3"],
    optionTitles: ["-3", "-2", "-1", "0", "1", "2", "3"]
  },
  trendDirection: {
    title: "TrendDirection",
    defaultValue: "neutral",
    type: ControlType.Enum,
    options: ["down", "up", "neutral"],
    optionTitles: ["Down", "Up", "Neutral"]
  }
});
