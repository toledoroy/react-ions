import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1', someOtherProp: true},
  {value: '1', display: 'test 2', someOtherProp: false}
]

const ExampleSelectFieldIcon = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    icon='icon-calendar-1' />
)

export default ExampleSelectFieldIcon
