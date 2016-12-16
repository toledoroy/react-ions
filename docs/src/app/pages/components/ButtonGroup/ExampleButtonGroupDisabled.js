import React from 'react'
import ButtonGroup from 'react-ions/lib/ButtonGroup/ButtonGroup'

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  },{
    value: 'option_2',
    label: 'Option 2'
  },{
    value: 'option_3',
    label: 'Option 3'
  }
]

const disabled = true

  const ExampleButtonGroupDisabled = () => (
  <ButtonGroup
    label="Disabled button group label"
    name="disabled-button-group"
    options={options}
    disabled={disabled}>
  </ButtonGroup>
)

export default ExampleButtonGroupDisabled
