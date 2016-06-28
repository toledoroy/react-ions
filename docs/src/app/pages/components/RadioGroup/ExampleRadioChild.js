import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import Radio from 'react-conventions/lib/Radio/Radio'
import Input from 'react-conventions/lib/Input'
import style from './style.scss'

class ExampleRadioChild extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null,
    childStatus: null
  }

  handleChange = (event, value) => {
    console.log(event)
    if (event.target.name === 'child-radio-group') {
      this.setState({status: value + ' is checked', childStatus: null})
    }
    else if (event.target.name === 'child-input') {
      this.setState({childStatus: 'It\'s child value is ' + event.target.value})
    }
  }

  render() {
    return(
      <div>
        <RadioGroup name='child-radio-group' label='Child radio label' changeCallback={this.handleChange}>
          <Radio value='Option 1' label='Option 1' />
          <Input name='child-input' changeCallback={this.handleChange} />
          <Radio value='Option 2' label='Option 2' />
          <Input name='child-input' changeCallback={this.handleChange} />
          <Radio value='Option 3' label='Option 3' />
          <Input name='child-input' changeCallback={this.handleChange} />
        </RadioGroup>

        <code>{this.state.status}</code>
        <code>{this.state.childStatus}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
