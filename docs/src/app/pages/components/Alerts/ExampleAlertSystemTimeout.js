import React from 'react'
import { AlertSystem } from 'react-conventions/lib/Alerts'
import Button from 'react-conventions/lib/Button'
import Input from 'react-conventions/lib/Input'
import style from './style.scss'

class ExampleAlertSystemDefault extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    alerts: []
  }

  addAlert = (type) => {
    let alerts = this.state.alerts;
    alerts.push({ type: type, content: this._alertText.state.value, timeout: parseInt(this._alertTimeout.state.value) });
    this.setState({ alerts: alerts });
  }

  render() {
    return (
      <div>
        <div className={style.inputs}>
          <Input value='Alert text' placeholder='Alert text' ref={(c) => this._alertText = c} />
          <Input value='' placeholder='Alert timeout (ms)' ref={(c) => this._alertTimeout = c} />
        </div>
        <div className={style.buttons}>
          <Button onClick={this.addAlert.bind(this, 'success')} optClass="success">Add Success Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'warning')} optClass={style['warning-btn']}>Add Warning Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'info')} optClass="default">Add Info Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'danger')} optClass="danger">Add Danger Alert</Button>
        </div>
        <AlertSystem alerts={this.state.alerts} />
      </div>
    )
  }
}

export default ExampleAlertSystemDefault
