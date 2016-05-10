import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import style from './style' 

class ExampleRadioCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: null
  }

  handleChange = (event) => {
    this.setState({status: 'Checked state is ' + event.target.checked});
  }

  render() {
    const options = [
      {
        value: 'option_1',
        label: 'Option 1'
      },{
        value: 'option_2',
        label: 'Option 2'
      },{
        value: 'option_3',
        label: 'Option 3'
      }
    ];

    return(
      <div>
        <RadioGroup
          label="Callback radio label"
          name="default-radio-group"
          options={options}
          defaultOption={1}
          changeCallback={this.handleChange}>
        </RadioGroup>
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleRadioCallback
