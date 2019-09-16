import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

/**
 * This component allows a user to set the needed properties
 * for a carousel item. This allows much more customization
 * for users wishing to not hard code the items seen in the
 * Carousel Component.
 */

function CarouselItem(props) {
  return (
    <Frame
      background={null}
      border={"1px solid #DDDBDA"}
      radius={10}
      size={"100%"}
    />
  );
}

CarouselItem.defaultProps = {
  height: 100,
  width: 100
};

addPropertyControls(CarouselItem, {
  buttonLabel: {
    type: ControlType.String,
    title: "Button Label",
    defaultValue: "Get Started"
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Visit App Exchange"
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Extend Salesforce with the #1 business marketplace."
  },
  imageAssistiveText: {
    type: ControlType.String,
    title: "Assistive Text",
    defaultValue: "Appy"
  },
  src: {
    type: ControlType.Image,
    title: "Image"
  },
  href: {
    type: ControlType.String,
    title: "href",
    defaultValue: "#"
  }
});
