import React from 'react'
import Checkbox from 'react-conventions/lib/Checkbox'
import style from './style' 

class ExampleCheckboxCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: null
  }

  handleChange = () => {
    this.setState({status: 'I have changed.'});
  }

  render() {
    return(
      <div>
        <Checkbox label="Checkbox with callback" value="checked" changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleCheckboxCallback
