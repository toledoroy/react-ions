import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import Input from 'react-conventions/lib/Input'

class ExampleRadioChild extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null,
    childStatus: null
  }

  handleChange = (event, value) => {
    if (event.target.name === 'child-radio-group') {
      this.setState({status: value + ' is checked', childStatus: null})
    }
    else if (event.target.name === 'child-input') {
      this.setState({childStatus: 'It\'s child value is ' + event.target.value})
    }
  }

  render() {
    const options = [
      {
        value: 'Option 1',
        label: 'Option 1',
        childNode: <Input name='child-input' changeCallback={this.handleChange} />
      },{
        value: 'Option 2',
        label: 'Option 2',
        childNode: <Input name='child-input' changeCallback={this.handleChange} />
      },{
        value: 'Option 3',
        label: 'Option 3',
        childNode: <Input name='child-input' changeCallback={this.handleChange} />
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
        <code>{this.state.childStatus}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
