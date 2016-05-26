import React from 'react'
import Badge from 'react-conventions/lib/Badge'

const ExampleBadges = () => (
  <div>
    <Badge size='heavy' text='1' theme='fog' />
    <Badge size='heavy' icon='icon-link-1' theme='success' />
    <Badge size='heavy' text='3' theme='danger' />
    <Badge size='heavy' text='4' theme='warning' />
    <Badge size='heavy' text='5' theme='sky' />
    <Badge size='heavy' text='6' theme='navy' />
    <Badge size='heavy' text='7' theme='border' />
    <Badge size='heavy' icon='icon-link-1' text='Word' theme='success' />
    <Badge size='heavy' icon='icon-bell-1' theme='fog' />
  </div>
)

export default ExampleBadges
