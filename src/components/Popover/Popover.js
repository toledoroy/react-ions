import React from 'react'
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import style from './style.scss'
import classNames from 'classnames/bind'

export class Popover extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    position: this.props.defaultPosition
  }

  static propTypes = {
    /**
     * Whether to show the popover.
     */
    showing: PropTypes.bool,
    /**
     * The default position of the popover.
     */
    defaultPosition: PropTypes.oneOf(['top', 'bottom']),
    /**
     * The content to display inside the popover.
     */
    content: PropTypes.node,
    /**
     * Optional styles to add to the checkbox.
     */
    optClass: PropTypes.string,
    /**
     * The method to be triggered on close.
     */
    onRequestClose: PropTypes.func
  }

  static defaultProps = {
    defaultPosition: 'bottom',
    showing: false
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.showing !== nextProps.showing) return true
    if (this.props.content !== nextProps.content) return true
    if (this.state.position !== nextState.position) return true

    return false
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.showing) {
      const popoverRect = this._popoverElement.getBoundingClientRect()
      const popoverWrapper = this._popoverWrapper.getBoundingClientRect()

      // When the height of the popover + the distance of the clicked target is
      // greater than the distance from the clicked target to the top of the browser,
      // it's too close to the top, so set the position to 'bottom'.
      // This enables the user to view the full popover, as they can scroll
      // down but not up, when content is cut-off.
      const isTooCloseToTop = popoverRect.height + popoverWrapper.height > popoverWrapper.top

      if (this.props.defaultPosition !== 'top' && popoverRect.top < 0) {
        this.setState({ position: 'bottom' })
      } else if (this.props.defaultPosition === 'top' &&
        window.innerHeight - popoverRect.bottom < 0 && !isTooCloseToTop) {
        this.setState({ position: 'top' })
      } else {
        this.setState({ position: 'bottom' })
      }
    } else {
      // We need to set this to the bottom each time, so that when we're subtracting the popoverRect.bottom
      // position from the innerHeight of the window, the reference is consistent (thus not producing 'bottom' position)
      // erroneously, which can happen from time to time
      this.setState({ position: 'bottom' })
    }
  }

  handleClickOutside = () => {
    if (this.props.showing && this.props.onRequestClose) this.props.onRequestClose()
  }

  getPopover = () => {
    const cx = classNames.bind(style)
    const popoverShowingClass = this.props.showing ? style['popover-showing'] : null
    const innerClass = cx(style['popover-inner'], popoverShowingClass, style[this.state.position])

    return (
      <div className={innerClass} ref={c => (this._popoverElement = c)}>
        <div className={style['popover-content']}>
          {this.props.content}
        </div>
      </div>
    )
  }

  render = () => {
    const cx = classNames.bind(style)
    const popoverClasses = cx(style['popover'], this.props.optClass)

    return (
      <div className={popoverClasses} ref={p => {this._popoverWrapper = p}}>
        {
          this.state.position === 'top' &&
          <div className={style['popover-wrapper']}>
            {this.getPopover()}
          </div>
        }
        { this.props.children }
        {
          this.state.position === 'bottom' &&
          <div className={style['popover-wrapper']}>
            {this.getPopover()}
          </div>
        }
      </div>
    )
  }
}

export default enhanceWithClickOutside(Popover)
