import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'

class Alert extends React.Component {
  constructor(props) {
    super(props);
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
     * The alert type.
     */
    type: React.PropTypes.oneOf(['success', 'warning', 'info', 'danger']),
    /**
     * Optional styles to add to the alert component.
     */
    optClass: React.PropTypes.string,
    /**
     * Whether the alert can be closed.
     */
    closable: React.PropTypes.bool,
    /**
     * How long before the alert disappears.
     */
    timeout: React.PropTypes.number,
    /**
     * A callback to be triggered when the close icon is clicked or when the timeout expires.
     */
    onClose: React.PropTypes.func

  };

  startTimer = () => {
    if (this.props.timeout) {
      this.setState({ timerStart: new Date(), timer: setTimeout(this.closeAlert, this.state.timeout) });
    }
  }

  pauseTimer = () => {
    clearTimeout(this.state.timer);
    let timeout = this.state.timeout;
    timeout -= new Date() - this.state.timerStart

    this.setState({ timeout: timeout });
  }

  closeAlert = () => {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    this.props.onClose();
  }

  componentDidMount = () => {
    this.startTimer();
  }

  render() {
    const cx = classNames.bind(style);
    const alertClasses = cx(style.alert, this.props.optClass, this.props.type, (this.props.closable ? 'closable' : ''));
    const alertIcons = {
      success: 'icon-check-circle-2-1',
      warning: 'icon-alert-1',
      info: 'icon-information',
      danger: 'icon-delete-3'
    };

    return (
      <div className={alertClasses} onMouseOver={this.pauseTimer} onMouseOut={this.startTimer}>
        {this.props.closable ? <div className={style['close-icon']} onClick={this.closeAlert}><Icon name="icon-delete-1" width='12' height='12' /></div> : null}
        <Icon name={alertIcons[this.props.type]} width='17' height='17' />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Alert
