import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1'},
  {value: '1', display: 'test 2'}
];

const ExampleSelectFieldError = () => (
  <SelectField
    options={options}
    optClass='selectfield-error'
    valueProp='value'
    displayProp='display' />
)

export default ExampleSelectFieldError
