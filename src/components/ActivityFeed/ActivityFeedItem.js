import React from 'react'
import { Link } from 'react-router'
import timeString from '../internal/TimeString'
import Icon from '../Icon'
import style from './style.scss'

const ActivityFeedItem = (props) => {

  const generateProfileName = function() {
    if (!props.profileUrl) {
      return props.name ? props.name : null
    } else {
      return <Link to={props.profileUrl}>{props.name ? props.name : null}</Link>
    }
  }

  const generateActions = function() {
    const actions = props.actions.map((action, index) =>
      <Icon name={action.icon} onClick={action.callback} fill='#3c97d3' height='16' width='16' key={index} />
    )
    return actions;
  }

  return (
    <div className={style['item-wrapper']}>
      {props.time ? <time>{timeString(props.time)}</time> : null}
      <div className={style['title-wrapper']}>
        <h3>{generateProfileName()} {props.title ? props.title : null}</h3>
        {props.actions ? <div className={style['action-wrapper']}>{generateActions()}</div> : null}
      </div>
      {props.text ? <p>{props.text}</p> : null}
    </div>
  )
}

ActivityFeedItem.propTypes = {
  /**
   * The name that appears in the
   */
  name: React.PropTypes.string,
  /**
   * A URL that you want to use to redirect when the name is clicked.
   */
  profileUrl: React.PropTypes.string,
  /**
   * A title to display next to the name.
   */
  title: React.PropTypes.string,
  /**
   * An array of actions that allow you to present an icon (on hover),
   * and a callback function (when clicked)
   */
  actions: React.PropTypes.array,
  /**
   * The text that you want to display below the title.
   */
  text: React.PropTypes.string,
  /**
   * A timestamp that you want to provide to the feed item.
   */
  time: React.PropTypes.string
}

export default ActivityFeedItem
