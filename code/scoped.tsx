import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerScoped: React.SFC = props => {
  return <System.Scoped {...props} style={style} />;
};

export const Scoped = withHOC(InnerScoped);

Scoped.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Scoped, {
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
  icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
  theme: { title: "Theme", defaultValue: false, type: ControlType.Boolean }
});
