import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import optclass from './OptClass'
import Button from '../Button'
import style from './style.scss'

export class ConfirmationOverlay extends PureComponent {
  constructor(props) {
    super(props)
    this.mql = window.matchMedia('(max-width: 992px)')
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
    prompt: PropTypes.string,
    handleConfirmation: PropTypes.func.isRequired
  }

  static defaultProps = {
    isOpen: false,
    prompt: 'Are you sure?'
  }

  state = {
    confirmationOverlayOffset: 0,
    wide: false
  }

  handleSetup = () => {
    const triggerRect = this._trigger.children[0].getBoundingClientRect()
    const overlayRect = this._trigger.querySelector("[class*='confirmation-overlay']").getBoundingClientRect()

    this.setState({ triggerWidth: triggerRect.width, overlayWidth: overlayRect.width })
  }

  getStyles = () => {
    if (this.props.position === 'right') {
      return { right: `${this.state.confirmationOverlayOffset}px` }
    }
    if (this.props.position === 'left') {
      return { left: `${this.state.confirmationOverlayOffset}px` }
    }

    // https://developers.google.com/web/updates/2016/06/absolute-positioned-children
    // Once ^ is supported in Safari and Firefox we can remove this and allow flex box to do its thing
    return { left: `-${((this.state.overlayWidth - this.state.triggerWidth) / 2)}px` }
  }

  getCaretStyles = () => {
    if (this.props.position === 'right') {
      return { right: `calc(${(this.state.triggerWidth / 2) + 7.5}px)`}
    }
    if (this.props.position === 'left') {
      return { left: `calc(${(this.state.triggerWidth / 2) - 5}px)` }
    }

    return this.state.wide ? { left: '95px' } : { left: '75px' }
  }

  /**
   * To trigger JavaScript changes on a breakpoint
   * @param  {Object} mediaQueryList
   * @return {Boolean} whether the viewport is < or > than max-width 768px
   */
  handleMediaChange = () => {
    this.handleSetup()
  }

  componentDidMount = () => {
    this.mql.addListener(this.handleMediaChange)
    this.handleSetup()

    if (this.props.prompt.length > 25) {
      this.setState({ wide: true })
    }
  }

  componentWillUnmount = () => {
    this.mql.removeListener(this.handleMediaChange)
  }

  render = () => {
    const cx = classNames.bind(style)
    const buttonClass = optclass(style, ['confirmation-approve-btn'])
    const overlayPositionClass = this.props.position ? style[this.props.position] : null
    const overlayVisibleClass = this.props.isOpen ? style['visible'] : null
    const overlayWideClass = this.state.wide ? style['wide'] : null
    const confirmationOverlayClasses = cx(overlayVisibleClass, overlayPositionClass, overlayWideClass, style['confirmation-overlay'])

    return (
      <div ref={trigger => this._trigger = trigger} className={style['confirmation-wrapper']}>
        <div className={confirmationOverlayClasses} style={this.getStyles()}>
          <em style={this.getCaretStyles()}></em>
          <span className={style['confirmation-text']}>{this.props.prompt}</span>
          <div className={style['button-wrapper']}>
            <Button onClick={this.props.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
            <Button onClick={this.props.handleConfirmation.bind(this, true)} optClass={buttonClass}>Yes</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmationOverlay
