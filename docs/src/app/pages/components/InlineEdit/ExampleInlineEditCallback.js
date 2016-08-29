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

  handleCallback = () => {
    this.setState({ isEditing: false })
  }

  buttonCallback = () => {
    this.setState({ isEditing: true })
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value='Click to edit' isEditing={this.state.isEditing} changeCallback={this.handleCallback} />
        {!this.state.isEditing
          ? <Button onClick={this.buttonCallback} optClass={styles['button-callback']}>Edit</Button>
          : null
        }
      </div>
    )
  }
}

export default ExampleInlineEditCallback
