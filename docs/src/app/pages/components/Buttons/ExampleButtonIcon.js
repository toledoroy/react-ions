import React from 'react'
import Button from 'react-ions/lib/Button'
import Icon from 'react-ions/lib/Icon'

const ExampleButtonIcon = () => (
  <div>
    <Button collapse={true}>
      <Icon name='icon-upload-2-1' height='14' width='14' fill='#fff'></Icon>
      <span>Icon Before</span>
    </Button>
    <Button collapse={true}>
      <span>Icon After</span>
      <Icon name='icon-link' height='14' width='14' fill='#fff'></Icon>
    </Button>
  </div>
)

export default ExampleButtonIcon
