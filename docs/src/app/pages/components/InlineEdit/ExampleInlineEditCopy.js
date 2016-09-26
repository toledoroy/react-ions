import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditCopy extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'Click to edit'
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} copyToClipboard={true} />
      </div>
    )
  }
}

export default ExampleInlineEditCopy
