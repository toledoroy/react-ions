import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import styles from './styles'

class ExampleDropdownConfirmation extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null
  }

  itemSelected = (value) => {
    const newValue = value ? value : 'An Item'
    this.setState({status: newValue + ' is checked'});
  }

  render() {
    const listItems = [
      {name: 'Item 1', callback: this.itemSelected, callbackConfirmation: true},
      {name: 'Item 2', callback: this.itemSelected, callbackConfirmation: true},
      {name: 'Item 3', callback: this.itemSelected, callbackConfirmation: true}
    ]

    return(
      <div>
        <Dropdown trigger={<Button>Dropdown List</Button>} listItems={listItems} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleDropdownConfirmation
