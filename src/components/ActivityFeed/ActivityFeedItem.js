import React from 'react'
import { Link } from 'react-router'
import timeString from '../internal/TimeString'
import Icon from '../Icon'
import style from './style.scss'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  generateProfileName() {
    let profileName;
    if (!this.props.profileUrl) {
      profileName = this.props.name ? this.props.name : null
    } else {
      profileName = <Link to={this.props.profileUrl}>{this.props.name ? this.props.name : null}</Link>
    }
    return profileName;
  }

  generateActions() {
    let actions = this.props.actions.map((action, index) =>
      <Icon name={action.icon} onClick={action.callback} fill='#3c97d3' height='16' width='16' key={index} />
    )
    return actions;
  }

  render() {
    return (
      <div className={style['item-wrapper']}>
        {this.props.time ? <time>{timeString(this.props.time)}</time> : null}
        <div className={style['title-wrapper']}>
          <h3>{this.generateProfileName()} {this.props.title ? this.props.title : null}</h3>
          {this.props.actions ? <div className={style['action-wrapper']}>{this.generateActions()}</div> : null}
        </div>
        {this.props.text ? <p>{this.props.text}</p> : null}
      </div>
    )
  }
}

export default ActivityFeedItem
