import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBrand = props => {
  return (
    <System.BrandBand
      {...props}
      style={style}
      className={`slds-p-around_${props.headerPadding}`}
    >
      {props.header && (
        <div className="slds-box slds-theme_default">
          <h3 className="slds-text-heading_label slds-truncate">
            {props.headerText}
          </h3>
        </div>
      )}
    </System.BrandBand>
  );
};

export const Brand = withHOC(InnerBrand);

Brand.defaultProps = {
  width: 1152,
  height: 500
};

addPropertyControls(Brand, {
  header: {
    type: ControlType.Boolean,
    title: "Header",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide"
  },
  headerText: {
    type: ControlType.String,
    title: "Header Text",
    defaultValue: "My App",
    hidden(props) {
      return props.header === false;
    }
  },
  headerPadding: {
    type: ControlType.Enum,
    title: "Header Padding",
    options: ["small", "medium", "large"],
    optionTitles: ["Small", "Medium", "Large"],
    defaultValue: "small",
    hidden(props) {
      return props.header === false;
    }
  },
  image: {
    title: "Image",
    defaultValue: "default",
    type: ControlType.Enum,
    options: ["none", "default"],
    optionTitles: ["None", "Default"]
  },
  backgroundSize: {
    title: "Background Size",
    defaultValue: "contain",
    type: ControlType.Enum,
    options: ["contain", "cover"],
    optionTitles: ["Contain", "Cover"]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "medium", "large"],
    optionTitles: ["Small", "Medium", "Large"],
    defaultValue: "medium"
  }
});
