import React from 'react'
import {SortableList, SortableItem} from 'react-conventions/lib/SortableList'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

class ExampleSortableListDefault extends React.Component {
  constructor() {
    super()
  }

  state = {
    items: [{
      value: 'email',
      text: 'Email'
    }, {
      value: 'push_notification',
      text: 'Push Notification'
    }, {
      value: 'web',
      text: 'Web'
    }, {
      value: 'sms',
      text: 'SMS'
    }],
    count: 0
  }

  onChange = (items) => {
    console.log(items)
    this.setState({ items: items })
  }

  addItem = () => {
    let items = this.state.items
    let count = this.state.count + 1
    items.push({ value: 'sortable_item_' + count, text: 'Sortable Item ' + count })

    this.setState({ items: items, count: count })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.addItem}>Add Item</Button>
        </div>
        <SortableList items={this.state.items} changeCallback={this.onChange} />
      </div>
    )
  }
}

export default ExampleSortableListDefault
