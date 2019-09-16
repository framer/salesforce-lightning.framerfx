import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { url } from "framer/resource";
import { withHOC } from "./withHOC";

const InnerCarousel = props => {
  const imageSource = src => {
    return url(src);
  };

  const items = [
    {
      buttonLabel: "Get Started",
      id: 1,
      heading: "Visit App Exchange",
      description: "Extend Salesforce with the #1 business marketplace.",
      imageAssistiveText: "Appy",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 2,
      heading: "Click to Customize",
      description:
        "Use the Object Manager to add fields, build layouts, and more.",
      imageAssistiveText: "Apps",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 3,
      heading: "Download Salesforce Apps",
      description: "Get the mobile app that's just for Salesforce admins.",
      imageAssistiveText: "Salesforce Apps",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 4,
      heading: "Carousel Item 4",
      description: "Description for carousel item #4",
      imageAssistiveText: "Apps",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 5,
      heading: "Carousel Item 5",
      description: "Description for carousel item #5",
      imageAssistiveText: "Appy",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 6,
      heading: "Carousel Item 6",
      description: "Description for carousel item #6",
      imageAssistiveText: "Salesforce Apps",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 7,
      heading: "Carousel Item 7",
      description: "Description for carousel item #7",
      imageAssistiveText: "Apps",
      src: imageSource("./code/images/salesforce.png"),
      href: "https://www.salesforce.com"
    }
  ];

  return <System.Carousel {...props} items={items} />;
};

export const Carousel = withHOC(InnerCarousel);

Carousel.defaultProps = {
  width: 700,
  height: 430
};

addPropertyControls(Carousel, {
  autoplayInterval: {
    title: "AutoplayInterval",
    defaultValue: 4000,
    type: ControlType.Number
  },
  currentPanel: {
    title: "CurrentPanel",
    defaultValue: 0,
    type: ControlType.Number
  },
  hasAutoplay: {
    title: "HasAutoplay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasPreviousNextPanelNavigation: {
    title: "HasPreviousNextPanelNavigation",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isAutoplayOn: {
    title: "IsAutoplayOn",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isInfinite: {
    title: "IsInfinite",
    defaultValue: false,
    type: ControlType.Boolean
  },
  itemsPerPanel: {
    title: "ItemsPerPanel",
    defaultValue: 3,
    type: ControlType.Number
  }
  // children: {
  //   type: ControlType.Array,
  //   title: "Carousel Items",
  //   propertyControl: {
  //     type: ControlType.ComponentInstance
  //   }
  // }
});
