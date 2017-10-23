import React from 'react'
import {SortableList, SortableItem} from 'react-ions/lib/components/SortableList'
import Badge from 'react-ions/lib/components/Badge'
import style from './style.scss'

class ExampleSortableListNodes extends React.Component {
  constructor() {
    super()
  }

  state = {
    items: [
      {
        value: 'email',
        text: <div className={style['item-with-badge']}><span>Email</span><Badge text='Email badge' theme='success' /></div>,
        active: true
      }, {
        value: 'push_notification',
        text: <div className={style['item-with-badge']}><span>Push Notification</span><Badge text='Push badge' theme='primary' /></div>,
        active: false
      }, {
        value: 'web',
        text: <div className={style['item-with-badge']}><span>Web</span><Badge text='Web badge' theme='danger' /></div>,
        active: false
      }, {
        value: 'sms',
        text: <div className={style['item-with-badge']}><span>SMS</span><Badge text='SMS badge' theme='warning' /></div>,
        active: false
      }
    ],
    count: 0
  }

  onChange = (event) => {
    console.log(event.target.value)
    this.setState({ items: event.target.value })
  }

  render() {
    return (
      <SortableList items={this.state.items} changeCallback={this.onChange} hideOrderNumbers={true} />
    )
  }
}

export default ExampleSortableListNodes
