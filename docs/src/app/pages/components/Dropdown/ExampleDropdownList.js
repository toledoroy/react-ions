import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import styles from './styles'


class ExampleDropdownList extends React.Component {
  constructor(props) {
    super(props)
  }

  callback1 = () => {
    alert('Item 1 clicked!');
  }

  callback2 = () => {
    alert('Item 2 clicked!');
  }

  callback3 = () => {
    alert('Item 3 clicked!');
  }

  render() {
    const listItems = [
      {name: 'Item 1', callback: this.callback1},
      {name: 'Item 2', callback: this.callback2},
      {name: 'Item 3', callback: this.callback3}
    ]

    return(
      <Dropdown trigger={<Button>Dropdown List</Button>} listItems={listItems} />
    )
  }
}

export default ExampleDropdownList
