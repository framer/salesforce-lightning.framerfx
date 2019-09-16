import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";

const InnerCard = props => {
  const sampleItems = props.cardItems.map((item, index) => {
    return { id: index, name: item };
  });

  const [state, setState] = React.useState({
    items: sampleItems,
    isFiltering: false
  });

  const handleFilterChange = event => {
    const filteredItems = sampleItems.filter(item =>
      RegExp(event.target.value, "i").test(item.name)
    );
    setState({ isFiltering: true, items: filteredItems });
  };

  const handleDeleteAllItems = () => {
    setState({ isFiltering: false, items: [] });
  };

  const handleAddItem = () => {
    console.log("Add item");
  };

  const isEmpty = state.items.length === 0;

  return (
    <div className="slds-grid slds-grid_vertical">
      <System.Card
        filter={
          (!isEmpty || state.isFiltering) && (
            <System.CardFilter onChange={handleFilterChange} />
          )
        }
        headerActions={
          !isEmpty && (
            <System.Button
              label={props.buttonLabel}
              onClick={handleDeleteAllItems}
            />
          )
        }
        heading={props.heading}
        icon={
          <System.Icon
            category={props.category}
            name={props.name}
            size={props.size}
            assistiveText={{ label: props.assistiveText }}
          />
        }
        empty={
          isEmpty ? (
            <System.CardEmpty heading={props.emptyHeading}>
              <System.Button label="Add Item" onClick={handleAddItem} />
            </System.CardEmpty>
          ) : null
        }
      >
        <System.DataTable items={state.items}>
          <System.DataTableColumn
            label="Opportunity Name"
            property="name"
            truncate
          />
        </System.DataTable>
      </System.Card>
    </div>
  );
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 700,
  height: 300
};

addPropertyControls(Card, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Related Items"
  },
  buttonLabel: {
    type: ControlType.String,
    title: "Button Label",
    defaultValue: "Delete All Items"
  },
  emptyHeading: {
    type: ControlType.String,
    title: "Empty Heading",
    defaultValue: "No Related Items"
  },
  hasNoHeader: {
    title: "HasNoHeader",
    defaultValue: false,
    type: ControlType.Boolean
  },
  cardItems: {
    type: ControlType.Array,
    title: "Card Items",
    defaultValue: ["Cloudhub", "Cloudhub + Anypoint Connectors", "Cloud City"],
    propertyControl: {
      type: ControlType.String
    }
  },
  ...generateIconPropertyControls({
    defaultIconCategory: "standard",
    defaultIconName: "document",
    defaultIconSize: "small"
  })
});
