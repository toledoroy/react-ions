import React from 'react'
import ColorPicker from 'react-conventions/lib/ColorPicker'


class ExampleColorPickerCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: null
  }

  handleChange = (newColor) => {
    this.setState({status: 'Selected color is: ' + newColor});
  }


  render() {
    return(
      <div>
        <ColorPicker color='#3C97D3' changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleColorPickerCallback
