import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'

const ExampleDropdownButton = () => (
  <div>
    <Dropdown trigger={<Button>Dropdown</Button>}>
      This is the contents.
    </Dropdown>
  </div>
)

export default ExampleDropdownButton
