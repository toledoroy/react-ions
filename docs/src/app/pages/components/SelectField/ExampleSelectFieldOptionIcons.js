import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = [
  { value: '0', display: 'test 1', someOtherProp: true, icon: 'icon-megaphone-1' },
  { value: '1', display: 'test 2', someOtherProp: false, icon: 'icon-slack-1', iconColor: '#3C97D3' }
]

const ExampleSelectFieldOptionIcons = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display' />
)

export default ExampleSelectFieldOptionIcons
