import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = ['test 1', 'test 2'];
const disabled = true;

const ExampleSelectFieldDefault = () => (
  <SelectField
    options={options}
    disabled={disabled} />
)

export default ExampleSelectFieldDefault