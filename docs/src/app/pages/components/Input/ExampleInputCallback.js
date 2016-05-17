import React from 'react'
import Input from 'react-conventions/lib/Input'

class ExampleInputCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: null
  }

  handleFocus = () => {
    this.setState({status: 'I am focused.'});
  }

  handleChange = () => {
    this.setState({status: 'I have changed.'});
  }

  handleBlur = () => {
    this.setState({status: 'I am blurred.'});
  }

  render() {
    return(
      <div>
        <Input value=''
          focusCallback={this.handleFocus}
          changeCallback={this.handleChange}
          blurCallback={this.handleBlur} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleInputCallback
