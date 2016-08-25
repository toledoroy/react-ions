import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Input from 'react-conventions/lib/Input'
import Button from 'react-conventions/lib/Button'
import styles from './styles'

class ExampleInlineEditDefault extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: null
  }

  handleSave = (name, value) => {
    if (name === 'test') {
      this.setState({ inlineValue: value })
    }
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value='This is a test' changeCallback={this.handleSave} />

        {this.state.inlineValue
          ? <code>The Inline Edit value is '{this.state.inlineValue}'.</code>
          : null
        }
      </div>
    )
  }
}

export default ExampleInlineEditDefault
