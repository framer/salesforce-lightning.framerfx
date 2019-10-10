## Salesforce Lightning Design System for React

This repository holds Framer code components for [Salesforce' Lightning Design System for React](https://react.lightningdesignsystem.com/).

### Getting Started

1. Clone this repository: `git@github.com:framer/salesforce-lightning.framerfx.git`
2. Double click to open with Framer X.

### Release Notes

There were a few components left out for the first pass, ones that aren't so core to the Lightning Design System. Let's focus on completing the tasks/components above before moving onto the ones below.

- Removed App Launcher for first pass
- Removed Builder Header for first pass
- Removed Filters for first pass
- Removed Expression for first pass
- Removed Menu for first pass
- Removed Modal for first pass (What is best practice for this?)
- Removed Page Header for first pass, composed of multiple components
- Removed Panel for first pass, composed of multiple components
- Removed Setup Assistant for first pass, composed of multiple components
- Removed Split View from first pass, composed of many components
- Removed Trial Bars from first pass, composed of many components
- Removed Visual Picker from first pass, composed of many components
- Removed Welcome Mat for first pass (What is best practice for this? - This is a version of a modal)
- Removed Tree from first pass, need to figure out how to make it accessible without hard coding values

### Usage Notes

<!-- Some components, like the Accordion, need to include certain values to make it work correctly. For example, the Accordion will need a `.json` file with data that will be rendered.

The accordion can accept a `.json` file that has the following format:

```
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
```

An example file can be found under `extra/accordion.json`. -->
