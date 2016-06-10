import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1', someOtherProp: true},
  {value: '1', display: 'test 2', someOtherProp: false}
];

const ExampleSelectFieldDefault = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    value={null}/>
)

export default ExampleSelectFieldDefault
