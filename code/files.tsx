import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFiles = props => {
  return (
    <System.Files>
      <System.File
        labels={{
          title: props.title
        }}
        icon={
          <System.Icon
            category={props.category}
            name={props.name}
            size={props.size}
          />
        }
        crop={props.crop}
      />
    </System.Files>
  );
};

export const Files = withHOC(InnerFiles);

Files.defaultProps = {
  width: 1000,
  height: 250
};

addPropertyControls(Files, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Proposal.pdf"
  },
  crop: {
    type: ControlType.Enum,
    title: "Crop",
    options: ["16-by-9", "4-by-3", "1-by-1"],
    optionTitles: ["16-by-9", "4-by-3", "1-by-1"],
    defaultValue: "1-by-1"
  },
  ...generateIconPropertyControls({ hidden: props => props.icon === false })
});
