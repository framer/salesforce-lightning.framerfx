import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGlobal = props => {
  const dropdownCollection = [
    {
      label: "Menu Item One",
      value: "1",
      iconCategory: "utility",
      iconName: "table",
      href: "http://www.google.com"
    },
    {
      label: "Menu Item Two",
      value: "2",
      iconCategory: "utility",
      iconName: "kanban",
      href: "http://www.google.com"
    },
    {
      label: "Menu Item Three",
      value: "3",
      iconCategory: "utility",
      iconName: "side_list",
      href: "http://www.google.com"
    }
  ];

  return (
    <System.GlobalNavigationBar {...props} style={style}>
      <System.GlobalNavigationBarRegion region="primary">
        <System.AppLauncher
          id="app-launcher-trigger"
          triggerName={props.title}
        ></System.AppLauncher>
      </System.GlobalNavigationBarRegion>
      <System.GlobalNavigationBarRegion region="secondary">
        <System.GlobalNavigationBarLink active label="Home" id="home-link" />
        <System.GlobalNavigationBarDropdown
          assistiveText={{ icon: "Open menu item submenu" }}
          id="primaryDropdown"
          label="Dropdown"
          options={dropdownCollection}
        />
        {props.menuItems.map(item => {
          return <System.GlobalNavigationBarLink label={item} />;
        })}
      </System.GlobalNavigationBarRegion>
    </System.GlobalNavigationBar>
  );
};

export const Global = withHOC(InnerGlobal);

Global.defaultProps = {
  width: 800,
  height: 50
};

addPropertyControls(Global, {
  cloud: {
    title: "Cloud",
    defaultValue: "sales",
    type: ControlType.Enum,
    options: ["sales", "marketing"],
    optionTitles: ["Sales", "Marketing"]
  },
  theme: {
    title: "Theme",
    defaultValue: "light",
    type: ControlType.Enum,
    options: ["light", "dark"],
    optionTitles: ["Light", "Dark"]
  },
  title: {
    type: ControlType.String,
    title: "App Title",
    defaultValue: "My Organization"
  },
  menuItems: {
    type: ControlType.Array,
    title: "Menu Items",
    defaultValue: ["Menu Item", "Support"],
    propertyControl: {
      type: ControlType.String
    }
  }
});
