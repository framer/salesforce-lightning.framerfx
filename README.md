## Salesforce Lightning Design System

A repository to hold components from [Salesforce Lightning Design System](https://react.lightningdesignsystem.com/).

### Overall Tasks

- [ ] Find out why icons don't appear on the canvas or in live preview. See icon.tsx - @ikettles
- [ ] Is it possible override the default props for Icons if we import them? I.e files.tsx to have a different default icon vs the ones passed from icon.tsx - @ikettles

### Component Specific Tasks

#### app.tsx

- [ ] Does app.tsx (App Header) make sense to add in Framer X? - @addisonschultz

#### card.tsx

- [ ] Does card.tsx (Cards) make sense? One approach could be attaching elements as children through a multi connector - @addisonschultz

#### carousel.tsx

- [ ] Make carousel.tsx more user friendly instead of hardcoding the items that need to be added. - @fhur

#### combobox.tsx

- [ ] Make combobox.tsx more user friendly. - @fhur

#### datatable.tsx

- [ ] Make datatable.tsx more user friendly. - @fhur

#### datepicker.tsx

- [ ] Find out why Datepicker isn't rendering (most likely due to formatter and parser needing to be configured). Could also be that it needs React.DOM to render correctly - @addisonschultz

#### expandablesection.tsx

- [x] Make expandablesection.tsx open/close. Need to add state to control this. - @addisonschultz

#### files.tsx

- [ ] Fix sizing issue of files.tsx. - @ikettles

#### input.tsx

- [ ] Add icon support for input. - @addisonschultz

#### timepicker.tsx

- [x] Find out why Timepicker isn't rendering (most likely due to formatter and parser needing to be configured). - @addisonschultz

#### pill.tsx

- [ ] Fix sizing of Icon inside the Pill component. - @ikettles

#### popover.tsx

- [ ] Fix and update Popover to be more robust and easier to use. - @fhur

#### progressindicator.tsx

- [ ] Add event handling when clicking on the different steps. - @addisonschultz

#### radio.tsx

- Find out what Visual Picker variant does to the Radio Component? - @ikettles

#### slider.tsx

- [x] Add useState hook to slider.tsx to control displayed value as slider updates. - @addisonschultz

#### tabs.tsx

- [ ] Make tabs more user friendly instead of hardcoding the items that need to be added. - @ikettles

#### tooltip.tsx

- [ ] Why doesn't tooltip open on hover? - @addisonschultz

#### verticalnavigation.tsx

- [ ] Make Vertical Navigation more user friendly + add better content (more dynamic) instead of hardcoding the items that need to be added. - @fhur

### Notes

There were a few components left out for the first pass, ones that aren't so core to the Lightning Design System. Let's foucs on completing the tasks/components above before moving onto the ones below.

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
