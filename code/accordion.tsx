import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAccordion: React.SFC = props => {
  const [state, setState] = React.useState({
    expandedPanels: {},
    items: [
      {
        id: "1",
        summary: "Accordion Summary",
        details: "Accordion details - A"
      },
      {
        id: "2",
        summary: "Accordion Summary",
        details: "Accordion details - B"
      },
      {
        id: "3",
        summary: "Accordion Summary",
        details: "Accordion details - C"
      }
    ]
  });

  function togglePanel(event, data) {
    setState({
      expandedPanels: {
        [data.id]: !state.expandedPanels[data.id]
      },
      items: [
        {
          id: "1",
          summary: "Accordion Summary",
          details: "Accordion details - A"
        },
        {
          id: "2",
          summary: "Accordion Summary",
          details: "Accordion details - B"
        },
        {
          id: "3",
          summary: "Accordion Summary",
          details: "Accordion details - C"
        }
      ]
    });
    if (this.props.action) {
      const dataAsArray = Object.keys(data).map(id => data[id]);
      this.props.action("onClick")(event, ...dataAsArray);
    } else if (console) {
      console.log("[onSelect] (event, data)", event, data);
    }
  }

  return (
    <System.IconSettings iconPath="/assets/icons">
      <System.Accordion {...props} style={style}>
        {state.items.map(item => {
          return (
            <System.AccordionPanel
              expanded={!!state.expandedPanels[item.id]}
              id={item.id}
              panelContentActions={() => {}}
              key={item.id}
              onTogglePanel={event => togglePanel(event, item)}
              summary={item.summary}
            >
              {item.details}
            </System.AccordionPanel>
          );
        })}
      </System.Accordion>
    </System.IconSettings>
  );
};

export const Accordion = withHOC(InnerAccordion);

Accordion.defaultProps = {
  width: 600,
  height: 140
};

addPropertyControls(Accordion, {});
