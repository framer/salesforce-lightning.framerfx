import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerApp: React.SFC = props => {
  return <System.App {...props} style={style} />;
};

export const App = withHOC(InnerApp);

App.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(App, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaHideApp: {
    title: "AriaHideApp",
    defaultValue: false,
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  modalClassName: {
    title: "ModalClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  modalHeaderButton: {
    title: "ModalHeaderButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  noTruncate: {
    title: "NoTruncate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onClose: { title: "OnClose", defaultValue: false, type: ControlType.Boolean },
  search: { title: "Search", defaultValue: false, type: ControlType.Boolean },
  title: { title: "Title", defaultValue: false, type: ControlType.Boolean },
  triggerName: {
    title: "TriggerName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  triggerOnClick: {
    title: "TriggerOnClick",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
