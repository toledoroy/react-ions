import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import Checkbox from 'react-conventions/lib/Checkbox'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import SelectField from 'react-conventions/lib/SelectField'
import Button from 'react-conventions/lib/Button'

const selectOptionsTimeSince = [
  {value: 0, display: 'Time since last NPS survey was received'},
  {value: 1, display: 'Time since last NPS survey was completed'}
];

const lessThanGreaterThan = [
  {value: 0, display: 'less than'},
  {value: 1, display: 'greater than'}
];


const ExampleFormGroup = () => (
  <FormGroup
    schema={{
      'selectOptionsTimeSince':{'value':''},
      'lessThanGreaterThan':{'value':''}
    }}>

    <SelectField name='selectOptionsTimeSince' options={selectOptionsTimeSince} valueProp='value' displayProp='display' />
    <SelectField name='lessThanGreaterThan' options={lessThanGreaterThan} valueProp='value' displayProp='display' />

  </FormGroup>
)

export default ExampleFormGroup
