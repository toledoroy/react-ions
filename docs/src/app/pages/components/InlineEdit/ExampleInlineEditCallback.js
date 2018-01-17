import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import styles from './styles'

class ExampleInlineEditCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isEditing: false
  }

  changeCallback = event => {
    console.log(event.target.value)
  }

  render = () => {
    return (
      <InlineEdit name='test' value='Example value' changeCallback={this.changeCallback} />
    )
  }
}

export default ExampleInlineEditCallback
