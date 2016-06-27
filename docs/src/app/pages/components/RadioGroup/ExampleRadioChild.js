import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import Input from 'react-conventions/lib/Input'

class ExampleRadioChild extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null
  }

  handleChange = (event, value) => {
    this.setState({status: value + ' is checked'})
  }

  render() {
    const options = [
      {
        value: 'Option 1',
        label: 'Option 1',
        childNode: <Input />
      },{
        value: 'Option 2',
        label: 'Option 2',
        childNode: <Input />
      },{
        value: 'Option 3',
        label: 'Option 3',
        childNode: <Input />
      }
    ]

    return(
      <div>
        <RadioGroup
          label="Child radio label"
          name="child-radio-group"
          options={options}
          changeCallback={this.handleChange}>
        </RadioGroup>
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
