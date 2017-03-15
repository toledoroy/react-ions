import React from 'react'
import ButtonConfirmation from 'react-ions/lib/Button/ButtonConfirmation'
import Icon from 'react-ions/lib/Icon'
import style from './style.scss'

const ExampleButtonConfirmation = () => (
  <div className={style['custom-confirmation-wrapper']}>
    <ButtonConfirmation position={'left'}>Left</ButtonConfirmation>
    <ButtonConfirmation prompt={'Are you sure you want to confirm?'} collapse={true}>
      <Icon name='icon-upload-2-1' height='14' width='14' fill='#fff'></Icon>
      <span>Default Button</span>
    </ButtonConfirmation>
    <ButtonConfirmation position={'right'}>Right Button</ButtonConfirmation>
  </div>
)

export default ExampleButtonConfirmation
