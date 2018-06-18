import React from 'react'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Button from 'react-ions/lib/components/Button'
import styles from './styles'

class ExampleDropdownRightAlign extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ]

    return (
      <div>
        <Dropdown trigger={<Button>Dropdown List</Button>} listItems={listItems} alignment='right' />
      </div>
    )
  }
}

export default ExampleDropdownRightAlign
