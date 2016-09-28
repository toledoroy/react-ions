import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditError extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'I will have an error after saving',
    loading: false,
    error: ''
  }

  handleSave = (event) => {
    if (event.target.name === 'test') {
      this.setState({ inlineValue: event.target.value, loading: true, error: '' })

      setTimeout(() => {
        this.setState({ loading: false, error: 'This is an error' })
      }, 3000)
    }
  }

  handleCancel = (event) => {
    if (event.target.name === 'test') {
      console.log(event.target.value)
      this.setState({ inlineValue: event.target.value, loading: false, error: '' })
    }
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} cancelCallback={this.handleCancel} placeholder='Custom Placeholder' loading={this.state.loading} error={this.state.error} />
      </div>
    )
  }
}

export default ExampleInlineEditError
