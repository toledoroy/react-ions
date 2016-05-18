import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import Checkbox from 'react-conventions/lib/Checkbox'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import SelectField from 'react-conventions/lib/SelectField'
import Button from 'react-conventions/lib/Button'

const radioOptions = [
  {
    value: 'option_1',
    label: 'Display your own custom message'
  }, {
    value: 'option_2',
    label: 'Display a refer a friend'
  }, {
    value: 'option_3',
    label: 'Show them another survey'
  }, {
    value: 'option_4',
    label: 'Redirect them'
  }
];

const selectOptions = [
  {value: 0, display: 'test 1', someOtherProp: true},
  {value: 1, display: 'test 2', someOtherProp: false}
];

const ExampleFormGroup = () => (
  <FormGroup
    schema={{
      'subject':{'value':''},
      'message':{'value':''},
      'radio':{'value':''},
      'select':{'value':''},
      'email':{'value':''},
      'facebook':{'value':''},
      'twitter':{'value':''},
      'linkedin':{'value':''}
    }}>

    <Input name='subject' label='Subject line' type='text' />
    <Textarea name='message' label='Message' />

    <RadioGroup
      label="What happens after a promotor submits a score?"
      name="radio"
      options={radioOptions}
      defaultOption={1}>
    </RadioGroup>

    <SelectField label='Select something' name='select' options={selectOptions} valueProp='value' displayProp='display' />

    <fieldset>
      <legend><span>Okay here</span></legend>
      <h3>Social channels</h3>
      <Checkbox name='email' label="Email" checked={true} />
      <Checkbox name='facebook' label="Facebook" checked={false} />
      <Checkbox name='twitter' label="Twitter" checked={false} />
      <Checkbox name='linkedin' label="LinkedIn" checked={false} />
    </fieldset>

    <Button>Submit</Button>
  </FormGroup>
)

export default ExampleFormGroup
