import React from 'react'
import Alert from 'react-conventions/lib/Alert'
import style from './style.scss'

const ExampleAlertsDefault = () => (
  <div>
    <Alert type="success">Success! Lorem ipsum dolor sit amet, sed do tempor labore.</Alert>
    <Alert type="warning">Warning! Lorem ipsum dolor sit amet, sed do tempor labore.</Alert>
    <Alert type="info">Info! Lorem ipsum dolor sit amet, sed do tempor labore.</Alert>
    <Alert type="danger">Danger! Lorem ipsum dolor sit amet, sed do tempor labore.</Alert>
  </div>
)

export default ExampleAlertsDefault
