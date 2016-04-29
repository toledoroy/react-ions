import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'

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

const ExampleRadioDefault = () => (
  <RadioGroup
    label="Radio group label"
    options={options}
    required={true}>
  </RadioGroup>
)

export default ExampleRadioDefault;
