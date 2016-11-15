import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames/bind'
import { Link } from 'react-router'
import shallowCompare from 'react-addons-shallow-compare'
import throttle from 'lodash/throttle'
import closest from '../internal/Closest'
import timeString from '../internal/TimeString'
import Badge from '../Badge'
import Button from '../Button'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import Spinner from '../Spinner'
import optclass from '../internal/OptClass'
import style from './style.scss'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props)
    this.throttle = throttle(this.updateHeight, 200)
    this.mql = window.matchMedia('(max-width: 768px)')
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
    onSetHeight: React.PropTypes.func,
    /**
     * Whether the loading spinner is displayed.
     */
    loading: React.PropTypes.bool,
    /**
     * Index of the item in the list.
     */
    index: React.PropTypes.number
  }

  state = {
    confirmationOverlayOpen: false,
    hasActiveAction: false,
    isHoveringTooltip: false
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
    if (this.props.loading) {
      return <Spinner loading={true} type='spinner-bounce' position='inline' color='#3C97D3' optClass={style['action-spinner']} />
    }
    else {
      const actions = this.props.actions.map((action, index) => {
        let currentIndex = index + 1 // because setting state on a zeroth index produces a falsy value

        if (action.tooltip) {
          return <Tooltip content={action.tooltip} appendToBody={true} show={!this.state.hasActiveAction === currentIndex} tooltipPlacement={'bottom'} key={index} mouseOverCallback={this.handleMouseOverTooltip} mouseOutCallback={this.handleMouseOutTooltip}>
                   <Icon name={action.icon} onClick={this.handleActionClick.bind(this, currentIndex, action)} fill='#3C97D3' height='16' width='16' />
                 </Tooltip>
        }
        return <Icon name={action.icon} onClick={this.handleActionClick.bind(this, currentIndex, action)} fill='#3C97D3' height='16' width='16' key={index} />
      })

      return actions
    }
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
    let parentLeft = closest(event.target, 'div').getBoundingClientRect().left

    let divotOffset = this.state.isSmallScreen ? 107.5 : 62.5

    this.setState({
      actionOverlayLeft: - (parentLeft - targetLeft + divotOffset) + 'px'
    })
  }

  handleConfirmation = (confirm) => {
    if (confirm) {
      this.handleActionCallback(this.state.clickedItem)
    }
    else {
      this.setState({
        hasActiveAction: false,
        confirmationOverlayOpen: false,
        clickedItem: null
      })
    }
  }

  handleActionCallback = (action) => {
    this.setState({
      hasActiveAction: false,
      confirmationOverlayOpen: false,
      clickedItem: null
    })

    if (typeof action.callback === 'function') {
      action.callback(action.type, this.props.index)
    }
  }

  handleActionClick = (index, action, event) => {
    if (action.callbackConfirmation) {
      this.getActionOverlayOffset(event)
      this.setState({
        hasActiveAction: index,
        confirmationOverlayOpen: true,
        clickedItem: action
      })
    }
    else {
      this.handleActionCallback(action)
    }
  }

  handleMouseOverTooltip = () => {
    this.setState({ isHoveringTooltip: true })
  }

  handleMouseOutTooltip = () => {
    this.setState({ isHoveringTooltip: false })
  }

  /**
   * To trigger JavaScript changes on a breakpoint
   * @param  {Object} mediaQueryList
   * @return {Boolean} whether the viewport is < or > than max-width 768px
   */
  handleMediaChange = (mediaQueryList) => {
    this.setState({
      isSmallScreen: mediaQueryList.matches,
      confirmationOverlayOpen: false
    })
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.throttle)
    this.updateHeight()

    if (this.props.actions) {
      this.mql.addListener(this.handleMediaChange)
      this.handleMediaChange(this.mql)
    }
  }

  componentWillUnmount = () => {
    this.throttle.cancel()
    window.removeEventListener('resize', this.throttle)

    this.mql.removeListener(this.handleMediaChange)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState)
  }

  render = () => {
    const cx = classNames.bind(style)
    const badgeClasses = optclass(style, 'indicator')
    const hoveringTooltipClass = this.state.isHoveringTooltip ? style['is-hovering-tooltip'] : null
    const activeActionClass = this.state.hasActiveAction || this.props.loading ? style['has-active-action'] : null
    const itemWrapperClass = cx(style['item-wrapper'], activeActionClass, hoveringTooltipClass)
    const actionOverlayPosition = { left: this.state.actionOverlayLeft }

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
