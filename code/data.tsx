import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerData: React.SFC = props => {
  return <System.Data {...props} style={style} />;
};

export const Data = withHOC(InnerData);

Data.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Data, {
  assistiveText: {
    title: "AssistiveText",
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
  columnBordered: {
    title: "ColumnBordered",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fixedHeader: {
    title: "FixedHeader",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fixedLayout: {
    title: "FixedLayout",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  items: { title: "Items", defaultValue: false, type: ControlType.Boolean },
  joined: { title: "Joined", defaultValue: false, type: ControlType.Boolean },
  noRowHover: {
    title: "NoRowHover",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onFixedHeaderResize: {
    title: "OnFixedHeaderResize",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRowChange: {
    title: "OnRowChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onSort: { title: "OnSort", defaultValue: false, type: ControlType.Boolean },
  onToggleFixedHeaderListeners: {
    title: "OnToggleFixedHeaderListeners",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selection: {
    title: "Selection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectRows: {
    title: "SelectRows",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stacked: { title: "Stacked", defaultValue: false, type: ControlType.Boolean },
  stackedHorizontal: {
    title: "StackedHorizontal",
    defaultValue: false,
    type: ControlType.Boolean
  },
  striped: { title: "Striped", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  unborderedRow: {
    title: "UnborderedRow",
    defaultValue: false,
    type: ControlType.Boolean
  },
  unbufferedCell: {
    title: "UnbufferedCell",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
