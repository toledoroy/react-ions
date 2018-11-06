import React from 'react'
import Button from 'react-ions/lib/components/Button'
import style from './style'

class ExampleButtonConfirmationLoader extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: false
  }

  handleConfirmation = event => {
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000)
    })
  }

  render() {
    return (
      <div>
        <div className={style['custom-confirmation-wrapper']}>
          <Button
            loading={this.state.loading}
            confirm
            confirmPosition='right'
            confirmText='Are you sure?'
            onClick={this.handleConfirmation}>
            Test
          </Button>
        </div>
      </div>
    )
  }
}

export default ExampleButtonConfirmationLoader
