import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType,  addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCarousel: React.SFC = props => {
  return <System.Carousel {...props} style={style} />;
};

export const Carousel = withHOC(InnerCarousel);

Carousel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Carousel, {
  assistiveText: {
    title: "AssistiveText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoplayInterval: {
    title: "AutoplayInterval",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  currentPanel: {
    title: "CurrentPanel",
    defaultValue: false,
    type: ControlType.Boolean
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
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
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
  items: { title: "Items", defaultValue: false, type: ControlType.Boolean },
  itemsPerPanel: {
    title: "ItemsPerPanel",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRenderItem: {
    title: "OnRenderItem",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestAutoplayToggle: {
    title: "OnRequestAutoplayToggle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onRequestPanelChange: {
    title: "OnRequestPanelChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  onItemClick: {
    title: "OnItemClick",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
