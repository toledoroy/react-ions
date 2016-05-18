import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'

const ExampleFormGroup = () => (
  <FormGroup>
    <Input label='Subject line' type='text' />
    <Input label='Company name' type='text' />
    <Input label='From name' type='text' />
    <Input label='Reply to' type='text' />
    <Textarea label='Message' value='' />
  </FormGroup>
)

export default ExampleFormGroup
