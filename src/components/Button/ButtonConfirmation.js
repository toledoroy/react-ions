import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'
import Button from './Button'
import style from './style.scss'

export class ButtonConfirmation extends Component {
  constructor(props) {
    super(props)
    this.mql = window.matchMedia('(max-width: 768px)')
  }

  static propTypes = {
    /**
     * Optional styles to add to the button.
     */
     optClass: PropTypes.oneOfType([
       PropTypes.array,
       PropTypes.string
     ]),
    /**
     * The size of button.
     */
    size: PropTypes.string,
    /**
     * Whether the button is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Whether to display only an icon on small screens
     */
    collapse: PropTypes.bool,
    /**
     * Position of the button on the page for overlay carrot orientation when the screen size is tablet sized or smaller
     */
    position: PropTypes.oneOf(['left', 'right']),
    /**
     * Function used to pass up the confirmation to the parent component
     */
    handleConfirmation: PropTypes.func
  }

  state = {
    confirmationOverlayOpen: false,
    confirmationOverlayOffset: 0
  }

  handleOpen = () => {
    this.setState({ confirmationOverlayOpen: !this.state.confirmationOverlayOpen })
  }

  handleConfirmation = (confirm) => {
    this.setState({ confirmationOverlayOpen: false  }, () => {
      if (typeof this.props.handleConfirmation === 'function') {
        this.props.handleConfirmation(confirm)
      }
    })
  }

  handleTrigger = () => {
    const trigger = this._trigger.children[0].getBoundingClientRect()

    this.setState({triggerWidth: trigger.width})
  }

  getStyles = () => {
    if (this.props.position === 'right') {
      return { right: `${this.state.confirmationOverlayOffset}`}
    }
    if (this.props.position === 'left') {
      return { left: `${this.state.confirmationOverlayOffset}` }
    }
  }

  getCaretStyles = () => {
    // Divet size is 10px
    if (this.props.position === 'right') {
      return { right: `calc(-100% + ${this.state.triggerWidth / 2}px)`}
    }
    if (this.props.position === 'left') {
      return { left: `calc(0% + ${(this.state.triggerWidth / 2) - 15}px)` }
    }
    return { left: `calc(0% + 50px)` }
  }

  componentDidMount = () => {
      this.handleTrigger()
  }

  render = () => {
    const cx = classNames.bind(style)
    const { collapse, handleConfirmation, ...other } = this.props
    const overlayPositionClass = this.props.position ? style[this.props.position] : null
    const confirmationOverlayClasses = cx(overlayPositionClass, style['confirmation-overlay'])

    return (
      <div ref={ (trigger) => this._trigger = trigger } className={style['confirmation-wrapper']}>
        <Button {...other} collapse={collapse} disabled={this.state.confirmationOverlayOpen} onClick={this.handleOpen}>
          { this.props.children }
        </Button>
        {
          this.state.confirmationOverlayOpen
          ? <div className={confirmationOverlayClasses} style={this.getStyles()}>
              <em style={this.getCaretStyles()}></em>
              <span>Are you sure?</span>
              <div className={style['button-wrapper']}>
                <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
                <Button onClick={this.handleConfirmation.bind(this, true)}>Yes</Button>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}


export default ButtonConfirmation
