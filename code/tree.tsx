import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTree: React.SFC = props => {
  return <System.Tree {...props} style={style} />;
};

export const Tree = withHOC(InnerTree);

Tree.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tree, {
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
  listClassName: {
    title: "ListClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  getNodes: {
    title: "GetNodes",
    defaultValue: false,
    type: ControlType.Boolean
  },
  heading: { title: "Heading", defaultValue: false, type: ControlType.Boolean },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  nodes: { title: "Nodes", defaultValue: false, type: ControlType.Boolean },
  onClick: { title: "OnClick", defaultValue: false, type: ControlType.Boolean },
  onExpandClick: {
    title: "OnExpandClick",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onScroll: {
    title: "OnScroll",
    defaultValue: false,
    type: ControlType.Boolean
  },
  searchTerm: {
    title: "SearchTerm",
    defaultValue: false,
    type: ControlType.Boolean
  },
  listStyle: {
    title: "ListStyle",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
