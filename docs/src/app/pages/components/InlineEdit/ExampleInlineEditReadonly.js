import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import styles from './styles'

class ExampleInlineEditReadonly extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'You can\'t click to edit me'
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} placeholder='Custom Placeholder' readonly />
      </div>
    )
  }
}

export default ExampleInlineEditReadonly
