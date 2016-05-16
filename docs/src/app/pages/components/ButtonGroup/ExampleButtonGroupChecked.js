import React from 'react'
import ButtonGroup from 'react-conventions/lib/ButtonGroup/ButtonGroup'

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  },{
    value: 'option_2',
    label: 'Option 2'
  },{
    value: 'option_3',
    label: 'Option 3'
  }
];

const ExampleRadioChecked = () => (
  <ButtonGroup
    label="Checked button group label"
    name="checked-button-group"
    options={options}
    defaultOption={1}>
  </ButtonGroup>
)

export default ExampleRadioChecked;
