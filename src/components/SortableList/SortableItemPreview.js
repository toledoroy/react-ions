import React from 'react'
import SortableItem from './SortableItem'
import Badge from '../Badge'
import Icon from '../Icon'
import classNames from 'classnames/bind'
import style from './style.scss'

class SortableItemPreview extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired,
    count: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const cx = classNames.bind(style)
    const previewClasses = cx(style['sortable-item'], style.preview)
    const badgeOpacity = this.props.count > 1 ? 1 - ((0.6 / (this.props.count - 1)) * this.props.item.index) : 1

    return (
      <div className={previewClasses}>
        <div style={{ opacity: badgeOpacity }}><Badge text={this.props.item.index + 1} theme='sky' optClass={style['sortable-item-badge']} /></div>
        <span>{this.props.item.text}</span>
        <div className={style.actions}>
          <Icon name="icon-bin-2-1" width="13" height="13" fill="#233040" />
          <div className={style.handle}><span></span><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  }
}

export default SortableItemPreview
