import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const InnerCarousel = props => {
  const items = [
    {
      buttonLabel: "Get Started",
      id: 1,
      heading: "Visit App Exchange",
      description: "Extend Salesforce with the #1 business marketplace.",
      imageAssistiveText: "Appy",
      src: "/assets/images/carousel/carousel-01.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 2,
      heading: "Click to Customize",
      description:
        "Use the Object Manager to add fields, build layouts, and more.",
      imageAssistiveText: "Apps",
      src: "/assets/images/carousel/carousel-02.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 3,
      heading: "Download Salesforce Apps",
      description: "Get the mobile app that's just for Salesforce admins.",
      imageAssistiveText: "Salesforce Apps",
      src: "/assets/images/carousel/carousel-03.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Get Started",
      id: 4,
      heading: "Carousel Item 4",
      description: "Description for carousel item #4",
      imageAssistiveText: "Apps",
      src: "/assets/images/carousel/carousel-02.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 5,
      heading: "Carousel Item 5",
      description: "Description for carousel item #5",
      imageAssistiveText: "Appy",
      src: "/assets/images/carousel/carousel-01.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 6,
      heading: "Carousel Item 6",
      description: "Description for carousel item #6",
      imageAssistiveText: "Salesforce Apps",
      src: "/assets/images/carousel/carousel-03.jpg",
      href: "https://www.salesforce.com"
    },
    {
      buttonLabel: "Learn More",
      id: 7,
      heading: "Carousel Item 7",
      description: "Description for carousel item #7",
      imageAssistiveText: "Apps",
      src: "/assets/images/carousel/carousel-02.jpg",
      href: "https://www.salesforce.com"
    }
  ];

  return <System.Carousel {...props} items={items} />;
};

export const Carousel = withHOC(InnerCarousel);

Carousel.defaultProps = {
  width: 410,
  height: 320
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
});
