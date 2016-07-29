import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Alert from './Alert'

class AlertSystem extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    alerts: this.props.alerts
  }

  static propTypes = {
    /**
     * The alerts to display.
     */
    alerts: React.PropTypes.array.isRequired,
    /**
     * Optional styles to add to the alert system component.
     */
    optClass: React.PropTypes.string,
    /**
     * Whether or not to slide the alerts in from the right
     */
    slideIn: React.PropTypes.bool
  }

  getAlerts = () => {
    return this.state.alerts.map((alert, index) =>
      !alert.hidden ? <Alert key={alert.key} type={alert.type || 'success'} optClass={alert.class || ''} closable={typeof alert.closable !== 'undefined' ? alert.closable : true} timeout={alert.timeout} onClose={this.removeAlert.bind(this, alert)}>{alert.content}</Alert> : null
    )
  }

  removeAlert = (alert) => {
    let alerts = this.state.alerts

    alerts.map((a, index) => {
      if (alert.key === a.key) {
        a.hidden = true

        if (typeof a.onClose === 'function') {
          a.onClose(alert)
        }
      }
    })

    this.setState({ alerts: alerts })
  }

  componentWillReceiveProps = (nextProps) => {
    let alerts = nextProps.alerts
    alerts.map((alert, index) => {
      if (!alert.key) {
        alert.key = (alert.type || 'success') + '-' + new Date().getTime()
      }
    })

    this.setState({ alerts: alerts })
  }

  render() {
    const cx = classNames.bind(style)
    const slideInClass = this.props.slideIn ? style['slide-in-right'] : null
    const alertSystemClasses = cx(style['alert-system'], slideInClass, this.props.optClass)

    return (
      <div className={alertSystemClasses}>
        {this.getAlerts()}
      </div>
    )
  }
}

export default AlertSystem
