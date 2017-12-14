import React from 'react'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'

const ExampleButtonIcon = () => (
  <div>
    <Button collapse={true}>
      <Icon name='chevron-top' height='14' width='14' fill='#fff'></Icon>
      <span>Icon Before</span>
    </Button>
    <Button collapse={true}>
      <span>Icon After</span>
      <Icon name='chevron-right' height='14' width='14' fill='#fff'></Icon>
    </Button>
  </div>
)

export default ExampleButtonIcon
