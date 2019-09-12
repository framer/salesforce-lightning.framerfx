import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExpandable = props => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  return (
    <System.ExpandableSection
      {...props}
      style={style}
      isOpen={isOpen}
      onToggleOpen={() => {
        setIsOpen(!isOpen);
      }}
    >
      <p>{props.text}</p>
    </System.ExpandableSection>
  );
};

export const ExpandableSection = withHOC(InnerExpandable);

ExpandableSection.defaultProps = {
  width: 500,
  height: 50
};

addPropertyControls(ExpandableSection, {
  title: {
    title: "Title",
    defaultValue: "Section Title",
    type: ControlType.String
  },
  text: {
    title: "Inner Text",
    defaultValue:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauriscondimentum nibh, ut fermentum massa justo sit amet risus. Loremipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risuseget urna mollis ornare vel eu leo.",
    type: ControlType.String
  },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  nonCollapsible: {
    title: "NonCollapsible",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
