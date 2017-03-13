import React, { Component, PropTypes } from 'react'
import Button from './Button'
import style from './style.scss'

export class ButtonConfirmation extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * Optional styles to add to the button.
     */
     optClass: React.PropTypes.oneOfType([
       React.PropTypes.array,
       React.PropTypes.string
     ]),
    /**
     * The size of button.
     */
    size: React.PropTypes.string,
    /**
     * Whether the button is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Whether to display only an icon on small screens
     */
    collapse: React.PropTypes.bool,
    /**
     * Function used to pass up the confirmation to the parent component
     */
    handleConfirmation: React.PropTypes.func
  }

  state = {
    confirmationOverlayOpen: false
  }

  handleOpen = () => {
    this.setState({ confirmationOverlayOpen: !this.state.confirmationOverlayOpen })
  }

  handleConfirmation = (confirm) => {
    this.props.handleConfirmation(confirm)
  }

  componentDidMount = () => {
    const trigger = this._trigger.firstChild.getBoundingClientRect()
    console.log('trigger: ', trigger)
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
