import React, { Component, PropTypes } from 'react'
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
     * Function used to pass up the confirmation to the parent component
     */
    handleConfirmation: PropTypes.func
  }

  state = {
    confirmationOverlayOpen: false
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

  getOverlayOffset = (overlayPosition) => {

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
    const overlayPosition = this._trigger.firstChild.getBoundingClientRect()
    this.getOverlayOffset(overlayPosition)

    if (this.props.actions) {
      this.mql.addListener(this.handleMediaChange)
      this.handleMediaChange(this.mql)
    }
  }

  render = () => {
    const { collapse, handleConfirmation, ...other } = this.props
    const confirmationOverlayPosition = { left: this.state.confirmationOverlayLeft }
    return (
      <div ref={ (trigger) => this._trigger = trigger } className={style['confirmation-wrapper']}>
        <Button {...other} onClick={this.handleOpen}>
          { this.props.children }
        </Button>
        {
          this.state.confirmationOverlayOpen
          ? <div className={style['confirmation-overlay']}>
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
