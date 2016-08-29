import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditDefault extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'Click to edit'
  }

  handleSave = (name, value) => {
    if (name === 'test') {
      this.setState({ inlineValue: value })
    }
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} />
        <code>The Inline Edit value is {this.state.inlineValue}.</code>
      </div>
    )
  }
}

export default ExampleInlineEditDefault
