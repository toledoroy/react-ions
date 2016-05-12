import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = [
  {value: 0, display: 'test 1'},
  {value: 1, display: 'test 2'}
];

const disabled = true;

const ExampleSelectFieldSelected = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    defaultOption={1} />
)

export default ExampleSelectFieldSelected