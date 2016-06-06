import React from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import style from './style.scss'
import Badge from '../Badge'
import Icon from '../Icon'

const sortableItemSource = {
  beginDrag(props) {
    return {
      value: props.value,
      index: props.index
    }
  }
}

const sortableItemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveSortableItem(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  }
}

class SortableItem extends React.Component {

  static propTypes = {
    /**
     * Binds to react-dnd connectDragSource method.
     */
    connectDragSource: React.PropTypes.func.isRequired,
    /**
     * Binds to react-dnd connectDropTarget method.
     */
    connectDropTarget: React.PropTypes.func.isRequired,
    /**
     * Binds to react-dnd connectDragPreview method.
     */
    connectDragPreview: React.PropTypes.func.isRequired,
    /**
     * Index of the item in the list.
     */
    index: React.PropTypes.number.isRequired,
    /**
     * Whether the item is being dragged.
     */
    isDragging: React.PropTypes.bool.isRequired,
    /**
     * The value of the item.
     */
    value: React.PropTypes.any.isRequired,
    /**
     * The text to display inside the item.
     */
    text: React.PropTypes.string.isRequired,
    /**
     * A callback that gets triggered when the item is moved.
     */
    moveSortableItem: React.PropTypes.func.isRequired,
    /**
     * A callback that gets triggered when the item is removed.
     */
    removeSortableItem: React.PropTypes.func.isRequired,
    /**
     * The total number of items in the list.
     */
    count: React.PropTypes.number.isRequired
  }

  state = {
    count: this.props.count
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.count !== this.state.count) {
      this.setState({ count: nextProps.count })
    }
  }

  removeSortableItem = () => {
    this.props.removeSortableItem(this.props.index)
  }

  render = () => {
    const { text, index, isDragging, connectDragSource, connectDropTarget, connectDragPreview } = this.props
    const opacity = isDragging ? 0 : 1
    const badgeOpacity = this.state.count > 1 ? 1 - ((0.6 / (this.state.count - 1)) * index) : 1

    return connectDragPreview(connectDropTarget(
      <div style={{ opacity }} className={style['sortable-item']}>
        <div style={{ opacity: badgeOpacity }}><Badge text={index + 1} theme='sky' optClass={style['sortable-item-badge']} /></div>
        {text}
        <div className={style.actions}>
          <Icon name="icon-bin-2-1" width="13" height="13" fill="#233040" onClick={this.removeSortableItem} />
          {connectDragSource(<div className={style.handle}><span></span><span></span><span></span><span></span></div>)}
        </div>
      </div>
    ))
  }
}

SortableItem = DragSource('item', sortableItemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(SortableItem)

SortableItem = DropTarget('item', sortableItemTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(SortableItem)

export default SortableItem
