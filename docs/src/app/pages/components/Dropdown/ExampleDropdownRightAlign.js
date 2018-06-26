import React from 'react'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Button from 'react-ions/lib/components/Button'

class ExampleDropdownRightAlign extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = [
      { name: 'Item 1 with alignment' },
      { name: 'Item 2 with alignment' },
      { name: 'Item 3 with alignment' }
    ]

    return (
      <Dropdown trigger={<Button>Open</Button>} listItems={listItems} alignment='right' />
    )
  }
}

export default ExampleDropdownRightAlign
