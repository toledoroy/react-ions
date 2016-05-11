import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = ['test 1', 'test 2'];

const ExampleSelectFieldDefault = () => (
  <RadioGroup
    label="Default radio label"
    name="default-radio-group"
    options={options}>
  </RadioGroup>
)

export default ExampleSelectFieldDefault
