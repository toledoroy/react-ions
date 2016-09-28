import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Button from 'react-conventions/lib/Button'
import styles from './styles'

class ExampleInlineEditCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isEditing: false
  }

  changeCallback = (event) => {
    console.log(event.target.value)
  }

  render = () => {
    return (
      <InlineEdit name='test' value='Example value' changeCallback={this.changeCallback} />
    )
  }
}

export default ExampleInlineEditCallback
