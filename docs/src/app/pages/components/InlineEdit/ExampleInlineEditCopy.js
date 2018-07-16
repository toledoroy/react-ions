import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditCopy extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'Example value',
    hardcodedCopy: 'Hardcoded copy value'
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} copyToClipboard />
        <br />
        <InlineEdit name='test' value={this.state.hardcodedCopy} copyToClipboard='Lorem ipsum' />
      </div>
    )
  }
}

export default ExampleInlineEditCopy
