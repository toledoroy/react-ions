import React from 'react'
import Button from 'react-ions/lib/components/Button'
import style from './style'

class ExampleButtonConfirmationCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: 'Callback was not fired.'
  }

  handleConfirmation = event => {
    this.setState({status: 'Callback was fired.'}, () => {
      setTimeout(() => {
        this.setState({status: 'Callback was not fired.'})
      }, 3000)
    })
  }

  render() {
    return (
      <div>
        <div className={style['custom-confirmation-wrapper']}>
          <Button
            confirm
            confirmText='Would you like to see the callback fire?'
            confirmWidth='200'
            onClick={this.handleConfirmation}>
            Test
          </Button>
        </div>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleButtonConfirmationCallback
