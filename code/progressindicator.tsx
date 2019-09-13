import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgress = props => {
  let steps = props.stepItems.map((step, index) => {
    return { id: index, label: step };
  });

  const [state, setState] = React.useState({
    completedSteps: [],
    selectedStep: steps[0]
  });

  const handleStepEvent = (event, data) => {
    setState({
      completedSteps: steps.slice(0, data.step.id),
      selectedStep: data.step
    });
  };

  return (
    <System.ProgressIndicator
      {...props}
      style={style}
      steps={steps}
      completedSteps={state.completedSteps}
      selectedStep={state.selectedStep}
      onStepClick={handleStepEvent}
    />
  );
};

export const ProgressIndicator = withHOC(InnerProgress);

ProgressIndicator.defaultProps = {
  width: 200,
  height: 200
};

addPropertyControls(ProgressIndicator, {
  stepItems: {
    type: ControlType.Array,
    title: "Steps",
    defaultValue: ["Step 1", "Step 2", "Step 3", "Step 4"],
    propertyControl: {
      type: ControlType.String
    }
  },
  orientation: {
    type: ControlType.Enum,
    title: "Orientation",
    defaultValue: "vertical",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"]
  }
});
