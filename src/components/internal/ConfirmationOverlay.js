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
    position: PropTypes.oneOf(['left', 'right']),
    prompt: PropTypes.string,
    handleConfirmation: PropTypes.func.isRequired
  }

  static defaultProps = {
    prompt: 'Are you sure?'
  }

  render = () => {
    const cx = classNames.bind(style)
    const buttonClass = optclass(style, ['confirmation-approve-btn'])

    return (
        <div>
          <span className={style['confirmation-text']}>{this.props.prompt}</span>
          <div className={style['button-wrapper']}>
            <Button onClick={this.props.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
            <Button onClick={this.props.handleConfirmation.bind(this, true)} optClass={buttonClass}>Yes</Button>
          </div>
        </div>
    )
  }
}

export default ConfirmationOverlay
