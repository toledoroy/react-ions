import React from 'react'
import Badge from 'react-conventions/lib/Badge'

const ExampleBadges = () => (
  <div>
    <Badge text='1' theme='fog' />
    <Badge icon='icon-link-1' theme='success' />
    <Badge text='3' theme='danger' />
    <Badge text='4' theme='warning' />
    <Badge text='5' theme='sky' />
    <Badge text='6' theme='navy' />
    <Badge text='7' theme='border' />
    <Badge icon='icon-link-1' text='Word' theme='success' />
    <Badge icon='icon-bell-1' theme='fog' />
  </div>
)

export default ExampleBadges
