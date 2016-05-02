import React from 'react'
import Textarea from 'react-conventions/lib/Textarea'
import style from './style'

class ExampleTextareaCallback extends React.Component {
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
    this.setState({status: 'Things are a bit blurry.'});
  }

  render() {
    return(
      <div>
        <Textarea value=''
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleTextareaCallback
