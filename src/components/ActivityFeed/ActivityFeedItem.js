import React from 'react'
import { Link } from 'react-router'
import timeString from '../internal/TimeString'
import Icon from '../Icon'
import style from './style.scss'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['item-wrapper']}>
        {this.props.time ? <time>{timeString(this.props.time)}</time> : null}
        <div className={style['title-wrapper']}>
          {this.props.title ? <h3>{this.props.title}</h3> : null}
          {this.props.actions ?
            this.props.actions.map((action, index) =>
              <Icon name={action.icon} onClick={action.callback} fill='#3c97d3' height='16' width='16' />
            )
            : null
          }
        </div>
        {this.props.text ? <p>{this.props.text}</p> : null}
      </div>
    )
  }
}

export default ActivityFeedItem
