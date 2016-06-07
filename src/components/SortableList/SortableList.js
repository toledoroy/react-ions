import React from 'react'
import update from 'react/lib/update'
import SortableItem from './SortableItem'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import CustomDragLayer from './CustomDragLayer'
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
    items: this.props.items,
    width: 0,
    left: 0
  }

  handleResize = () => {
    this.setState({ width: this._sortableList.getBoundingClientRect().width, left: this._sortableList.getBoundingClientRect().left })
  }

  componentDidMount = () => {
    this.handleResize()

    // Add event listener
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount = () => {
    // Remove event listener
    window.removeEventListener('resize', this.handleResize)
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
      <div className={style['sortable-list-container']} ref={(c) => this._sortableList = c}>
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
        <CustomDragLayer dimensions={{ width: this.state.width, left: this.state.left }} count={this.state.items.length} />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(SortableList)
