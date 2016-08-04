import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import timeString from '../internal/TimeString'
import Icon from '../Icon'
import Badge from '../Badge'
import optclass from '../internal/OptClass'
import style from './style.scss'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
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
    time: React.PropTypes.string,
    badge:  React.PropTypes.object
  }

  state = {
    height: 0
  }

  generateLinkType = (name) => {
    let link
    let re = '^(http|https)://'
    if(this.props.profileUrl.match(re)) {
      link = <a href={this.props.profileUrl} target={this.props.profileUrlTarget}>{name}</a>
    } else {
      link = <Link to={this.props.profileUrl}>{name}</Link>
    }
    return link
  }

  generateProfileName = () => {
    let name = this.props.name ? this.props.name : null
    if (!this.props.profileUrl) {
      return name
    } else {
      return this.generateLinkType(name)
    }
  }

  generateActions = () => {
    const actions = this.props.actions.map((action, index) =>
      <Icon name={action.icon} onClick={action.callback} fill='#3c97d3' height='16' width='16' key={index} />
    )
    return actions
  }

  componentDidMount = () => {
    var height = ReactDOM.findDOMNode(this).getBoundingClientRect().height + 30
    this.props.addHeight(height)
    this.setState({ height })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.height !== nextState.height
  }

  render = () => {
    const badgeClasses = optclass(style, 'indicator')

    return (
      <li className={this.state.height + '-px'}>
        <Badge
          icon={this.props.badge.icon}
          text={this.props.badge.text}
          theme={this.props.badge.theme}
          optClass={badgeClasses}
        />
        <div className={style['item-wrapper']}>
          {this.props.time ? <time>{timeString(this.props.time)}</time> : null}
          <div className={style['title-wrapper']}>
            <h3>{this.generateProfileName()} {this.props.title ? this.props.title : null}</h3>
            {this.props.actions ? <div className={style['action-wrapper']}>{this.generateActions()}</div> : null}
          </div>
          {this.props.text ? <p>{this.props.text}</p> : null}
        </div>
      </li>
    )
  }
}

export default ActivityFeedItem
