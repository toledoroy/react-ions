import React, { Component } from 'react'
import { bool, func, number, oneOf } from 'prop-types'
import Icon from '../Icon'
import StyledDiv from '../StyledDiv'
import { alertWrapper, closeIcon, countdownBar, countdownBarWrapper } from './styles.css'

class Alert extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    timerStart: 0,
    timeout: this.props.timeout,
    timer: false
  }

  static defaultProps = {
    type: 'success'
  }

  static propTypes = {
    /**
     * Whether the alert can be closed.
     */
    closable: bool,
    /**
     * A callback to be triggered when the close icon is clicked or when the timeout expires.
     */
    onClose: func,
    /**
     * How long before the alert disappears.
     */
    timeout: number,
    /**
     * The alert type.
     */
    type: oneOf(['success', 'warning', 'info', 'danger'])

  }

  startTimer = () => {
    if (this.props.timeout) {
      this.setState({ timerStart: new Date(), timer: setTimeout(this.closeAlert, this.state.timeout) })
    }
  }

  pauseTimer = () => {
    clearTimeout(this.state.timer)
    let timeout = this.state.timeout

    timeout -= new Date() - this.state.timerStart

    this.setState({ timeout: timeout })
  }

  closeAlert = () => {
    if (this.state.timer) {
      clearTimeout(this.state.timer)
    }
    this.props.onClose()
  }

  componentDidMount = () => {
    this.startTimer()
  }

  render = () => (
    <StyledDiv className={this.props.className} css={alertWrapper(this.props.type, this.props.closable)} onMouseOver={this.pauseTimer} onMouseOut={this.startTimer}>
      <Icon name={`md-${this.props.type}`} width='17' height='17' />
      <div>{this.props.children}</div>
      {
        this.props.closable &&
        <StyledDiv css={closeIcon} onClick={this.closeAlert}>
          <Icon name='md-close' width='12' height='12' />
        </StyledDiv>
      }
      {
        !!this.props.timeout &&
        <StyledDiv css={countdownBarWrapper}>
          <StyledDiv className='countdown-bar' css={countdownBar(this.props.type, this.props.timeout)}></StyledDiv>
        </StyledDiv>
      }
    </StyledDiv>
  )
}

export default Alert
