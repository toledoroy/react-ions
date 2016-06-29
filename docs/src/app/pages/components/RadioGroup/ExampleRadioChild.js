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
    checkedValue: null,
    childValue: null
  }

  handleChange = (event, value) => {
    if (event.target.name === 'child-radio-group') {
      this.setState({checkedValue: value, childValue: null})
    }
    else if (event.target.name === 'child-input') {
      this.setState({childValue: event.target.value})
    }
  }

  getClass = (sibling) => {
    return sibling !== this.state.checkedValue ? style['is-hidden'] : null
  }

  render() {
    return (
      <div>
        <RadioGroup name='child-radio-group' label='Child radio label' changeCallback={this.handleChange}>
          <Radio value='Option 1' label='Option 1' />
          <Input name='child-input' changeCallback={this.handleChange} optClass={this.getClass('Option 1')} />
          <Radio value='Option 2' label='Option 2' />
          <Input name='child-input' changeCallback={this.handleChange} optClass={this.getClass('Option 2')} />
          <Radio value='Option 3' label='Option 3' />
          <Input name='child-input' changeCallback={this.handleChange} optClass={this.getClass('Option 3')} />
        </RadioGroup>

        <code>{this.state.checkedValue ? this.state.checkedValue + ' is checked' : null}</code>
        <code>{this.state.childValue ? 'Child value is ' + this.state.childValue : null}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
