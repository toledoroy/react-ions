import React from 'react'
import SortableItemPreview from './SortableItemPreview'
import { DragLayer } from 'react-dnd'
import style from './style.scss'

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }

  let { x, y } = currentOffset
  x = props.dimensions.left

  const transform = `translate(${x}px, ${y-10}px)`
  return {
    width: props.dimensions.width + 'px',
    transform: transform,
    WebkitTransform: transform
  }
}

class CustomDragLayer extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    item: React.PropTypes.object,
    itemType: React.PropTypes.string,
    initialOffset: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired
    }),
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired
    }),
    isDragging: React.PropTypes.bool.isRequired
  }

  renderItem = (type, item, count) => {
    console.log(item)
    return (
      <SortableItemPreview item={item} count={count} />
    )
  }

  render = () => {
    const { item, itemType, isDragging } = this.props

    if (!isDragging) {
      return null
    }

    return (
      <div className={style['drag-layer']}>
        <div style={getItemStyles(this.props)}>
          {this.renderItem(itemType, item, this.props.count)}
        </div>
      </div>
    )
  }
}

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(CustomDragLayer)
