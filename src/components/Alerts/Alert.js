import React, { Component } from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'
import Icon from '../Icon'
import StyledDiv from '../StyledDiv'
import { alertWrapper, closeIcon, countdownBar, countdownBarWrapper } from './styles.css'

class Alert extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * A class to add to the alert component.
     */
    className: string,
    /**
     * Whether the alert can be closed.
     */
    closable: bool,
    /**
     * Whether to show the countdown bar.
     */
    countdownBar: bool,
    /**
     * A callback to be triggered when the close icon is clicked or when the timeout expires.
     */
    onClose: func,
    /**
     * Whether or not to slide the alert in from the right.
     */
    slideIn: bool,
    /**
     * How long before the alert disappears.
     */
    timeout: number,
    /**
     * The alert type.
     */
    type: oneOf(['success', 'warning', 'info', 'danger'])
  }

  static defaultProps = {
    closable: true,
    countdownBar: true,
    type: 'success'
  }

  state = {
    timerStart: 0,
    timeout: this.props.timeout,
    timer: false
  }

  componentDidMount = () => {
    this.startTimer()
  }

  startTimer = () => {
    if (!this.props.timeout) return 

    this.setState({
      timerStart: new Date(),
      timer: setTimeout(this.closeAlert, this.state.timeout)
    })
  }

  pauseTimer = () => {
    if (!this.state.timer) return

    clearTimeout(this.state.timer)

    let timeout = this.state.timeout
    timeout -= new Date() - this.state.timerStart

    this.setState({ timeout })
  }

  closeAlert = () => {
    if (this.state.timer) clearTimeout(this.state.timer)
    if (this.props.onClose) this.props.onClose()
  }

  render = () => (
    <StyledDiv className={this.props.className} css={alertWrapper(this.props.type, this.props.closable, this.props.slideIn)} onMouseEnter={this.pauseTimer} onMouseLeave={this.startTimer}>
      <Icon name={`md-${this.props.type}`} width='17' height='17' />
      <div>{this.props.children}</div>
      {
        this.props.closable &&
        <StyledDiv css={closeIcon} onClick={this.closeAlert}>
          <Icon name='md-close' width='12' height='12' />
        </StyledDiv>
      }
      {
        this.props.countdownBar && !!this.props.timeout &&
        <StyledDiv css={countdownBarWrapper}>
          <StyledDiv className='countdown-bar' css={countdownBar(this.props.type, this.props.timeout)}></StyledDiv>
        </StyledDiv>
      }
    </StyledDiv>
  )
}

export default Alert
