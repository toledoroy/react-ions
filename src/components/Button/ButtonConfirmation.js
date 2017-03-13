import React, { Component, PropTypes } from 'react'
import Button from './Button'
import style from './style.scss'
import classNames from 'classnames/bind'

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
   * A path to pass to the anchor tag.
   */
  path: React.PropTypes.string,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: React.PropTypes.bool
}

state = {
  confirmationOverlayOpen: false,
  disabled: false
}

  handleOpen = () => {
    this.setState({ confirmationOverlayOpen: !this.state.confirmationOverlayOpen })
  }

  handleConfirmation = (confirm) => {
    this.props.handleConfirmation(confirm)
  }


render = () => {
  const cx = classNames.bind(style)
  const collapseClass = this.props.collapse ? 'collapse' : null


  return (
    <div>
      <Button onClick={this.handleOpen}>
        Delete
      </Button>
      {
        this.state.confirmationOverlayOpen
        ? <div className={style['overlay']}>
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
