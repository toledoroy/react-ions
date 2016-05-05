import React from 'react'
import Badge from 'react-conventions/lib/Badge'

const ExampleBadgeDefault = () => (
  <div>
    <Badge text='1' />
    <Badge icon='icon-link-1' theme='success' />
    <Badge text='3' theme='danger' />
    <Badge text='4' theme='warning' />
    <Badge text='5' theme='sky' />
  </div>
)

export default ExampleBadgeDefault
