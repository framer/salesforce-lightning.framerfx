import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumb = props => {
  let trail = props.trail.map((item, index) => {
    return (
      <a id={index} href="javascript:void(0);">
        {item}
      </a>
    );
  });

  let Dropdown = (
    <System.Dropdown
      assistiveText={{ icon: "More Options" }}
      iconCategory="utility"
      iconName="down"
      iconVariant="border-filled"
      onSelect={() => {}}
      options={props.dropdownTrail.map((item, index) => {
        return { label: item, value: index };
      })}
    />
  );

  return (
    <System.BreadCrumb
      {...props}
      style={style}
      trail={trail}
      overflowDropdownMenu={props.overflowDropdownMenu ? Dropdown : null}
    />
  );
};

export const Breadcrumb = withHOC(InnerBreadcrumb);

Breadcrumb.defaultProps = {
  width: 300,
  height: 20
};

addPropertyControls(Breadcrumb, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  overflowDropdownMenu: {
    title: "OverflowDropdownMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dropdownTrail: {
    type: ControlType.Array,
    title: "Dropdown Trail",
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Item 1", "Item 2"],
    hidden(props) {
      return props.overflowDropdownMenu === false;
    }
  },
  trail: {
    type: ControlType.Array,
    title: "Trail",
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Parent Entity", "Parent Record Name"]
  }
});
