import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditError extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'I have a loader while saving',
    loading: false,
    error: ''
  }

  handleSave = (name, value) => {
    if (name === 'test') {
      this.setState({ inlineValue: value, loading: true, error: '' })

      setTimeout(() => {
        this.setState({ loading: false, error: 'This is an error' })
      }, 3000)
    }
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} placeholder='Custom Placeholder' loading={this.state.loading} error={this.state.error} />
      </div>
    )
  }
}

export default ExampleInlineEditError
