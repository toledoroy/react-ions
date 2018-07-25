import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditError extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'I will have an error after saving',
    loading: false,
    error: '',
    count: 0
  }

  handleSave = event => {
    if (event.target.name === 'test') {
      console.log('setting state', this.state.count++)
      this.setState({ loading: true, error: '', count: this.state.count++ }, () => {

        if (event.target.canceled) {
          console.log('reset error')
          this.setState({ loading: false, error: '' })
        } else {
          setTimeout(() => {
            console.log(this.state.count)
            this.setState({ loading: false, error: this.state.count > 1 ? '' : 'This is an error' })
          }, 1000)
        }

      })
    }
  }

  render() {
    return (
      <div>
        <InlineEdit copyToClipboard name='test' value={this.state.inlineValue} changeCallback={this.handleSave} placeholder='Custom Placeholder' loading={this.state.loading} error={this.state.error} />
      </div>
    )
  }
}

export default ExampleInlineEditError
