import React from 'react'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'

const ExampleButtonIcon = () => (
  <div>
    <Button optClass='secondary' collapse={true}>
      <Icon name='md-add' height='14' width='14'></Icon>
      <span>Icon Before</span>
    </Button>
    <Button optClass='secondary' collapse={true}>
      <span>Icon After</span>
      <Icon name='md-check' height='14' width='14'></Icon>
    </Button>
    <Button optClass='secondary' collapse={true}>
      <Icon name='md-filter' height='14' width='14' />
      <span>Icon Both</span>
      <Icon name='md-check' height='14' width='14' />
    </Button>
    <Button optClass='secondary' collapse={true}>
      <Icon name='md-filter' height='14' width='14' />
      <span>Icon Both</span>
      <Icon name='mbsy-caret' height='10' width='10' />
    </Button>
</div>
)

export default ExampleButtonIcon
