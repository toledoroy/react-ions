import React from 'react'
import ButtonConfirmation from 'react-ions/lib/Button/ButtonConfirmation'
import Icon from 'react-ions/lib/Icon'
import style from './style.scss'

const ExampleButtonConfirmation = () => (
  <div className={style['custom-confirmation-wrapper']}>
    <ButtonConfirmation position={'left'} collapse={true}>
      <Icon name='icon-upload-2-1' height='14' width='14' fill='#fff'></Icon>
      <span>Left</span>
    </ButtonConfirmation>
    <ButtonConfirmation prompt={'Are you sure you are not a robot?'} collapse={true} optClass='danger'>
      <span>Delete</span>
    </ButtonConfirmation>
    <ButtonConfirmation
      prompt={'You are definitely not a robot right? That would be unfortunate. Also does that mean that you are skynet? Please tell me you are not skynet!'} position={'right'}>Right</ButtonConfirmation>
  </div>
)

export default ExampleButtonConfirmation
