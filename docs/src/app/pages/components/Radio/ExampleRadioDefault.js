import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio'

const ExampleRadioDefault = () => (
  <RadioGroup label="Radio group label" options={ [{value: "test", label: "test"}, {value: "test1", label: "test1"}] } selectedOption={1}></RadioGroup>
)

export default ExampleRadioDefault;
