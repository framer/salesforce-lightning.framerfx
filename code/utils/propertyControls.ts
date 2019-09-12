import { ControlType, PropertyControls } from "framer";

export function generateIconPropertyControls(
  options: {
    hidden?: (props: any) => boolean;
    defaultIconCategory?: string;
    defaultIconName?: string;
  } = {}
): PropertyControls {
  return {
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
      defaultValue: "medium",
      hidden: options.hidden
    },
    assistiveText: {
      type: ControlType.String,
      title: "Assistive Text",
      defaultValue: "SLDS Icon",
      hidden: options.hidden
    }
  };
}
