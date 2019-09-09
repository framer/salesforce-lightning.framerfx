import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCombobox: React.SFC = props => {
  return <System.Combobox {...props} style={style} />;
};

export const Combobox = withHOC(InnerCombobox);

Combobox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Combobox, {
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
  classNameContainer: {
    title: "ClassNameContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  classNameMenu: {
    title: "ClassNameMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  classNameMenuSubHeader: {
    title: "ClassNameMenuSubHeader",
    defaultValue: false,
    type: ControlType.Boolean
  },
  events: { title: "Events", defaultValue: false, type: ControlType.Boolean },
  errorText: {
    title: "ErrorText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fieldLevelHelpTooltip: {
    title: "FieldLevelHelpTooltip",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasInputSpinner: {
    title: "HasInputSpinner",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasMenuSpinner: {
    title: "HasMenuSpinner",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasStaticAlignment: {
    title: "HasStaticAlignment",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  input: { title: "Input", defaultValue: false, type: ControlType.Boolean },
  labels: { title: "Labels", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  inheritWidthOf: {
    title: "InheritWidthOf",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderMenuItem: {
    title: "OnRenderMenuItem",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuPosition: {
    title: "MenuPosition",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuMaxWidth: {
    title: "MenuMaxWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  multiple: {
    title: "Multiple",
    defaultValue: false,
    type: ControlType.Boolean
  },
  options: { title: "Options", defaultValue: false, type: ControlType.Boolean },
  readOnlyMenuItemVisibleLength: {
    title: "ReadOnlyMenuItemVisibleLength",
    defaultValue: false,
    type: ControlType.Boolean
  },
  predefinedOptionsOnly: {
    title: "PredefinedOptionsOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  popover: { title: "Popover", defaultValue: false, type: ControlType.Boolean },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selection: {
    title: "Selection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectedListboxRef: {
    title: "SelectedListboxRef",
    defaultValue: false,
    type: ControlType.Boolean
  },
  singleInputDisabled: {
    title: "SingleInputDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  tooltipMenuItemDisabled: {
    title: "TooltipMenuItemDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  optionsAddItem: {
    title: "OptionsAddItem",
    defaultValue: false,
    type: ControlType.Boolean
  },
  optionsSearchEntity: {
    title: "OptionsSearchEntity",
    defaultValue: false,
    type: ControlType.Boolean
  },
  entityCombobox: {
    title: "EntityCombobox",
    defaultValue: false,
    type: ControlType.Boolean
  },
  variant: { title: "Variant", defaultValue: false, type: ControlType.Boolean }
});
