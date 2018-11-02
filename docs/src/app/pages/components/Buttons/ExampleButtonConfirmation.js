import React from 'react'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'
import style from './style.scss'

const ExampleButtonConfirmation = () => (
  <div className={style['custom-confirmation-wrapper']}>
    <Button
      confirm
      collapse>
      Left
    </Button>
    <Button
      confirm
      confirmText='Are you sure you are not a robot?'
      optClass='danger'>
      Delete
      </Button>
    <Button
      confirm
      confirmWidth='200'
      confirmText='You are definitely not a robot right? That would be unfortunate. Also does that mean that you are skynet? Please tell me you are not skynet!'>
      Right
    </Button>
  </div>
)

export default ExampleButtonConfirmation
