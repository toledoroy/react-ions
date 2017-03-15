import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'
import optclass from '../internal/OptClass'
import Button from './Button'
import style from './style.scss'

export class ButtonConfirmation extends Component {
  constructor(props) {
    super(props)
    this.mql = window.matchMedia('(max-width: 768px)')
  }

  static defaultProps = {
    prompt: 'Are you sure?'
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
     * Text that will appear in the overlay prompt.
     */
    prompt: PropTypes.string,
    /**
     * Function used to pass up the confirmation to the parent component
     */
    handleConfirmation: PropTypes.func
  }

  state = {
    confirmationOverlayOpen: false,
    confirmationOverlayOffset: 0,
    wide: false
  }

  handleOpen = () => {
    this.setState({ confirmationOverlayOpen: !this.state.confirmationOverlayOpen })
  }

  handleConfirmation = (confirm) => {
    this.setState({ confirmationOverlayOpen: false  }, () => {
      if (typeof this.props.handleConfirmation === 'function' && confirm) {
        this.props.handleConfirmation(confirm)
      }
    })
  }

  handleTrigger = () => {
    const trigger = this._trigger.children[0].getBoundingClientRect()

    this.setState({triggerWidth: trigger.width}, () => {
      this.handleWide()
    })
  }

  handleWide = () => {
    if (this.props.prompt.length > 25) {
      return this.setState({wide: true})
    }
  }

  getStyles = () => {
    if (this.props.position === 'right') {
      return { right: `${this.state.confirmationOverlayOffset}px`}
    }
    if (this.props.position === 'left') {
      return { left: `${this.state.confirmationOverlayOffset}px` }
    }
  }

  getCaretStyles = () => {
    // Divet size is 10px
    if (this.props.position === 'right') {
      return { right: `calc(-100% + ${(this.state.triggerWidth / 2) - 4}px)`}
    }
    if (this.props.position === 'left') {
      return { left: `calc(0% + ${(this.state.triggerWidth / 2) - 15}px)` }
    }
    if (!this.props.position && this.state.wide) {
      return { left: `calc(0% + 86px)` }
    } else if (!this.props.position && !this.state.wide){
      return { left: `calc(0% + 66px)` }
    }
  }

  componentDidMount = () => {
      this.handleTrigger()
  }

  render = () => {
    const cx = classNames.bind(style)
    const { collapse, handleConfirmation, ...other } = this.props
    const overlayPositionClass = this.props.position ? style[this.props.position] : null
    const customButtonClass = optclass(style, ['confirmation-approve-btn'])
    const customOverlayWidthClass = this.state.wide ? style['wide'] : null
    const confirmationOverlayClasses = cx(overlayPositionClass, customOverlayWidthClass, style['confirmation-overlay'])

    return (
      <div ref={ (trigger) => this._trigger = trigger } className={style['confirmation-wrapper']}>
        <Button {...other} collapse={collapse} disabled={this.state.confirmationOverlayOpen} onClick={this.handleOpen}>
          { this.props.children }
        </Button>
        {
          this.state.confirmationOverlayOpen
          ? <div className={confirmationOverlayClasses} style={this.getStyles()}>
              <em style={this.getCaretStyles()}></em>
              <span className={style['confirmation-text']}>{this.props.prompt}</span>
              <div className={style['button-wrapper']}>
                <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
                <Button onClick={this.handleConfirmation.bind(this, true)} optClass={customButtonClass} >Yes</Button>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}


export default ButtonConfirmation
