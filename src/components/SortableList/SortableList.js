import React from 'react'
import update from 'react/lib/update'
import SortableItem from './SortableItem'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import style from './style.scss'

class SortableList extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * Items to display in the list.
     */
    items: React.PropTypes.array.isRequired,
    /**
     * A callback function to be called when the order of the items changes or when an item is removed.
     */
    changeCallback: React.PropTypes.func
  }

  state = {
    items: this.props.items
  }

  moveSortableItem = (dragIndex, hoverIndex) => {
    const { items } = this.state
    const dragSortableItem = items[dragIndex]

    this.setState(update(this.state, {
      items: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragSortableItem]
        ]
      }
    }), function() {
      if (this.props.changeCallback) {
        this.props.changeCallback(this.state.items)
      }
    })
  }

  removeSortableItem = (index) => {
    this.setState(update(this.state, {
      items: {
        $splice: [
          [index, 1]
        ]
      }
    }), function() {
      if (this.props.changeCallback) {
        this.props.changeCallback(this.state.items)
      }
    })
  }

  render = () => {
    const { items } = this.state

    return (
      <div className={style['sortable-list']}>
        {items.map((item, i) => {
          return (
            <SortableItem key={item.value}
              index={i}
              value={item.value}
              text={item.text}
              moveSortableItem={this.moveSortableItem}
              removeSortableItem={this.removeSortableItem}
              count={items.length} />
          )
        })}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(SortableList)
