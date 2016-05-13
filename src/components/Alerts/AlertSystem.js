import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Alert from './Alert'

class AlertSystem extends React.Component {
  constructor(props) {
    super(props);
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
    optClass: React.PropTypes.string
  };

  getAlerts = () => {
    return this.state.alerts.map((alert, index) =>
      !alert.hidden ? <Alert key={alert.key} type={alert.type} optClass={alert.class || ''} closable={alert.closable || true} timeout={alert.timeout || null} onClose={this.removeAlert.bind(this, alert.key)}>{alert.content}</Alert> : null
    );
  }

  removeAlert = (key) => {
    let alerts = this.state.alerts;

    alerts.map((alert, index) => {
      if (alert.key === key) {
        alert.hidden = true;
      }
    });

    this.setState({ alerts: alerts });
  }

  componentWillReceiveProps = () => {
    this.state.alerts.map((alert, index) => {
      if (!alert.key) {
        alert.key = (alert.type || 'success') + '-' + new Date().getTime();
      }
    });

    this.setState({ alerts: this.props.alerts });
  }

  render() {
    const cx = classNames.bind(style);
    const alertSystemClasses = cx(style['alert-system'], this.props.optClass);

    return (
      <div className={alertSystemClasses}>
        {this.getAlerts()}
      </div>
    )
  }
}

export default AlertSystem
