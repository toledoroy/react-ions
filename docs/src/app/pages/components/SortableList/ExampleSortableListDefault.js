import React from 'react'
import {SortableList, SortableItem} from 'react-conventions/lib/SortableList'

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
    }]
  }

  onChange = (items) => {
    console.log(items)
  }

  render() {
    return (
      <SortableList items={this.state.items} changeCallback={this.onChange} />
    )
  }
}

export default ExampleSortableListDefault
