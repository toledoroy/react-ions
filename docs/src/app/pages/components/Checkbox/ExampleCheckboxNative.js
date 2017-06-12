import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'
import style from './style.scss'

class ExampleCheckboxNative extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    checked: true
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return(
      <div>
        <Checkbox label="Default checkbox" description='this is a description' forLabelAttr='testing' allowNative={true} value={this.state.checked} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleCheckboxNative
