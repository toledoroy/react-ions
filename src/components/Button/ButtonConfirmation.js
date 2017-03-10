import React, { Component } from 'react'
import Button from 'button'
import style from './style.scss'
import classNames from 'classnames/bind'

export ButtonConfirmation extends Component {
  const cx = classNames.bind(style)
  const collapseClass = props.collapse ? 'collapse' : null
  const btnConfirmationClasses = cx(style.btn, props.optClass, props.size, collapseClass)

state = {
  confirmationOverlayOpen: false,
  disabled: false
}
  handleOpen = (confirm) => {
    this.setState({ confirmationOverlayOpen: true })
  }


render = () => {
  return (
      this.state.confirmationOverlayOpen
      ? <div className={style['action-overlay']} style={actionOverlayPosition}>
          <span>Are you sure?</span>
          <div className={style['button-wrapper']}>
            <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
            <Button onClick={this.handleConfirmation.bind(this, true)}>Yes</Button>
          </div>
        </div>
      : null
    )
  }
}

ButtonConfirmation.propTypes = {
  /**
   * Optional styles to add to the button.
   */
  optClass: React.PropTypes.string,
  /**
   * The size of button.
   */
  size: React.PropTypes.string,
  /**
   * Whether the button is disabled.
   */
  disabled: React.PropTypes.bool,
  /**
   * A path to pass to the anchor tag.
   */
  path: React.PropTypes.string,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: React.PropTypes.bool
}

export default ButtonConfirmation
