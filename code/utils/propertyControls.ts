import { ControlType, PropertyControls } from "framer";

export function generateIconPropertyControls(
  options: {
    hidden?: (props: any) => boolean;
    defaultIconCategory?: string;
    defaultIconName?: string;
    defaultIconSize?: string;
    defaultAssistiveText?: string;
    omittedProperties?: string[];
  } = {}
): PropertyControls {
  const properties: PropertyControls = {
    category: {
      type: ControlType.String,
      title: "Category",
      defaultValue: options.defaultIconCategory || "action",
      hidden: options.hidden
    },
    name: {
      type: ControlType.String,
      title: "Name",
      defaultValue: options.defaultIconName || "add_contact",
      hidden: options.hidden
    },
    size: {
      type: ControlType.Enum,
      title: "Size",
      options: ["xx-small", "x-small", "small", "medium", "large"],
      optionTitles: ["XX-Small", "X-Small", "Small", "Medium", "Large"],
      defaultValue: options.defaultIconSize || "medium",
      hidden: options.hidden
    },
    assistiveText: {
      type: ControlType.String,
      title: "Assistive Text",
      defaultValue: options.defaultAssistiveText || "SLDS Icon",
      hidden: options.hidden
    }
  };

  if (!!options.omittedProperties) {
    return Object.keys(properties).reduce<PropertyControls>((acc, key) => {
      if (options.omittedProperties.indexOf(key) === -1) {
        acc[key] = properties[key];
      }
      return acc;
    }, {});
  }

  return properties;
}
