import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerVertical = props => {
  const sampleReportCategories = [
    {
      id: "reports",
      label: "Reports",
      items: [
        { id: "recent_reports", label: "Recent" },
        { id: "my_reports", label: "Created by Me" },
        { id: "private_reports", label: "Private Reports" },
        { id: "public_reports", label: "Public Reports" },
        { id: "all_reports", label: "All Reports" }
      ]
    },
    {
      id: "folders",
      label: "Folders",
      items: [
        { id: "my_folders", label: "Created by Me" },
        { id: "shared_folders", label: "Shared with Me" },
        { id: "all_folders", label: "All Folders" }
      ]
    }
  ];

  return (
    <System.VerticalNavigation
      {...props}
      style={style}
      categories={sampleReportCategories}
    />
  );
};

export const VerticalNavigation = withHOC(InnerVertical);

VerticalNavigation.defaultProps = {
  width: 300,
  height: 400
};

addPropertyControls(VerticalNavigation, {
  // categories: {
  //   title: "Categories",
  //   defaultValue: false,
  //   type: ControlType.Boolean
  // },
  selectedId: {
    title: "SelectedId",
    defaultValue: "recent_reports",
    type: ControlType.String
  }
});
