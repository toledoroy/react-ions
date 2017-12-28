import React from 'react'
import SelectField from 'react-ions/src/components/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1', someOtherProp: true},
  {value: '1', display: 'test 2', someOtherProp: false}
]

const ExampleSelectFieldIcon = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    icon='check' />
)

export default ExampleSelectFieldIcon
