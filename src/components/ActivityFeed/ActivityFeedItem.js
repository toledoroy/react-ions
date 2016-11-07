import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames/bind'
import { Link } from 'react-router'
import shallowCompare from 'react-addons-shallow-compare'
import throttle from 'lodash/throttle'
import timeString from '../internal/TimeString'
import Badge from '../Badge'
import Button from '../Button'
import Icon from '../Icon'
import optclass from '../internal/OptClass'
import style from './style.scss'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props)
    this.throttle = throttle(this.updateHeight, 200)
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
    /**
     * The badge configuration for the activity feed item.
     */
    badge:  React.PropTypes.object,
    /**
     * Callback to send height to parent.
     */
    onSetHeight: React.PropTypes.func
  }

  state = {
    confirmationOverlayOpen: false,
    hasActiveAction: false,
    actionOverlayLeft: -62.5
  }

  generateLinkType = (name) => {
    let link
    const re = '^(http|https)://'
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
    }

    return this.generateLinkType(name)
  }

  generateActions = () => {
    const actions = this.props.actions.map((action, index) =>
      <Icon name={action.icon} onClick={this.handleActionClick.bind(this, action)} fill='#3c97d3' height='16' width='16' key={index} />
    )
    return actions
  }

  updateHeight = () => {
    const node = ReactDOM.findDOMNode(this)
    const nodeHeight = node.getBoundingClientRect().height
    const margin = parseInt(window.getComputedStyle(node)['margin-bottom'])
    const totalHeight = nodeHeight+margin
    this.props.onSetHeight(totalHeight)
  }

  getActionOverlayOffset = (event) => {
    let targetLeft = event.target.getBoundingClientRect().left
    let parentLeft

    // Because the user might click on the <use> svg child element,
    // we do a check for the type, and get the parent's parent, if it's an svg
    // we need this check because IE doesn't support element.closest() and
    // we don't want to polyfill
    if (event.target.parentNode.tagName === 'svg') {
      parentLeft = event.target.parentNode.parentNode.getBoundingClientRect().left
    } else {
      parentLeft = event.target.parentNode.getBoundingClientRect().left
    }

    this.setState({
      actionOverlayLeft: - ((parentLeft - targetLeft) + 62.5) + 'px' // 62.5 is half the width of the overlay
    })
  }

  handleConfirmation = (confirm) => {
    if (confirm) {
      this.handleActionCallback(this.state.clickedItem)
    }
    else {
      this.setState({ confirmationOverlayOpen: false, hasActiveAction: false, clickedItem: null })
    }
  }

  handleActionCallback = (action) => {
    this.setState({isOpened: false, confirmationOverlayOpen: false, hasActiveAction: false, clickedItem: null})

    if (typeof action.callback === 'function') {
      action.callback(action.type)
    }
  }

  handleActionClick = (action, event) => {
    if (action.callbackConfirmation) {
      this.getActionOverlayOffset(event)
      this.setState({ confirmationOverlayOpen: true, hasActiveAction: true, clickedItem: action })
    }
    else {
      this.handleActionCallback(action)
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.throttle)
    this.updateHeight()
  }

  componentWillUnmount = () => {
    this.throttle.cancel();
    window.removeEventListener('resize', this.throttle)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps, nextState)
    return shallowCompare(this, nextProps, nextState)
  }

  render = () => {
    const cx = classNames.bind(style)
    const badgeClasses = optclass(style, 'indicator')
    const activeActionClass = this.state.hasActiveAction ? style['has-active-action'] : null
    const itemWrapperClass = cx(style['item-wrapper'], activeActionClass)
    const actionOverlayPosition = {
      left: this.state.actionOverlayLeft
    }

    return (
      <li>
        <Badge
          icon={this.props.badge.icon}
          text={this.props.badge.text}
          theme={this.props.badge.theme}
          optClass={badgeClasses}
        />
        <div className={itemWrapperClass}>
          <div className={style['item-detail']}>
            <h3 className={style['item-title']}>{this.generateProfileName()} {this.props.title ? this.props.title : null}</h3>
            {this.props.text ? <p className={style['item-text']}>{this.props.text}</p> : null}
          </div>
          <div className={style['action-wrapper']}>
            {this.props.time ? <time>{timeString(this.props.time)}</time> : null}
            {this.props.actions
              ? <div className={style['action-items']}>
                {
                 this.state.confirmationOverlayOpen
                 ? <div className={style['action-overlay']} style={actionOverlayPosition}>
                     <span>Are you sure?</span>
                     <div className={style['button-wrapper']}>
                       <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
                       <Button onClick={this.handleConfirmation.bind(this, true)}>Yes</Button>
                     </div>
                   </div>
                 : null
                }
                {this.generateActions()}
                </div>
              : null
            }
          </div>
        </div>
      </li>
    )
  }
}

export default ActivityFeedItem
