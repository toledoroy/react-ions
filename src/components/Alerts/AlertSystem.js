import React, { Component } from 'react'
import { array, bool, string } from 'prop-types'
import StyledDiv from '../StyledDiv'
import Alert from './Alert'
import { alertSystemWrapper } from './styles.css'

class AlertSystem extends Component {
  constructor(props) {
    super(props)

    if (props.optClass && process.env.NODE_ENV !== 'production') {
      console.warn('AlertSystem: Use of optClass will be deprecated as of react-ions 6.0.0, please use `className` instead')
    }
  }

  static propTypes = {
    /**
     * The alerts to display.
     */
    alerts: array.isRequired,
    /**
     * A class to add to the alert system component.
     */
    className: string,
    /**
     * Whether or not to slide the alerts in from the right
     */
    slideIn: bool
  }

  state = {
    alerts: this.props.alerts
  }

  static getDerivedStateFromProps(nextProps) {
    const { alerts } = nextProps

    alerts.map(alert => {
      // Add a unique key to the alert if one is not provided
      if (!alert.key) {
        alert.key = (alert.type || 'success') + '-' + new Date().getTime()
      }
    })

    return { alerts }
  }

  getAlerts = () => this.state.alerts.map(alert =>
    !alert.hidden &&
    <Alert
      key={alert.key}
      type={alert.type}
      className={alert.class || ''}
      closable={alert.closable}
      timeout={alert.timeout}
      onClose={this.removeAlert.bind(this, alert)}
      slideIn={this.props.slideIn}
    >
      {alert.content}
    </Alert>
  )

  removeAlert = alert => {
    const { alerts } = this.state

    alerts.map(a => {
      if (alert.key === a.key) {
        // Hide the alert
        a.hidden = true

        // Call its onCose callback if provided
        if (typeof a.onClose === 'function') {
          a.onClose(alert)
        }
      }
    })

    this.setState({ alerts })
  }

  render = () => (
    <StyledDiv className={this.props.className} css={alertSystemWrapper(this.props.slideIn)}>
      {this.getAlerts()}
    </StyledDiv>
  )
}

export default AlertSystem
