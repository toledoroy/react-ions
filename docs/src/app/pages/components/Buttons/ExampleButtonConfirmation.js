import React from 'react'
import ButtonConfirmation from 'react-ions/lib/Button/ButtonConfirmation'
import Icon from 'react-ions/lib/Icon'

const ExampleButtonConfirmation = () => (
  <div>
    <ButtonConfirmation position={'left'}>Left</ButtonConfirmation>
    <ButtonConfirmation collapse={true}>
      <Icon name='icon-upload-2-1' height='14' width='14' fill='#fff'></Icon>
      <span>Default Button</span>
    </ButtonConfirmation>
    <ButtonConfirmation position={'right'}>Right Button</ButtonConfirmation>
  </div>
)

export default ExampleButtonConfirmation
