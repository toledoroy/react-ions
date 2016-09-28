import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditCopy extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'Example value'
  }

  render = () => {
    return (
      <InlineEdit name='test' value={this.state.inlineValue} copyToClipboard />
    )
  }
}

export default ExampleInlineEditCopy
