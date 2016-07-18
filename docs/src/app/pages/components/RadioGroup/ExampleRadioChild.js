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
    currentChildValue: null,
    option1: null,
    option2: null,
    option3: null
  }

  handleChange = (event, value) => {
    const currentChildValue = this.state[value]
    if (event.target.name === 'child-radio-group') {
      this.setState({checkedValue: value, currentChildValue: currentChildValue})
    }
    else if (event.target.name === 'child-input-1') {
      this.setState({option1: event.target.value, currentChildValue: event.target.value})
    }
    else if (event.target.name === 'child-input-2') {
      this.setState({option2: event.target.value, currentChildValue: event.target.value})
    }
    else if (event.target.name === 'child-input-3') {
      this.setState({option3: event.target.value, currentChildValue: event.target.value})
    }
  }

  getClass = (sibling) => {
    return sibling !== this.state.checkedValue ? style['is-hidden'] : style['radio-child']
  }

  render() {
    return (
      <div>
        <RadioGroup name='child-radio-group' label='Child radio label' changeCallback={this.handleChange}>
          <Radio value='option1' label='Option 1' />
          <Input name='child-input-1' changeCallback={this.handleChange} optClass={this.getClass('option1')} />
          <Radio value='option2' label='Option 2' />
          <Input name='child-input-2' changeCallback={this.handleChange} optClass={this.getClass('option2')} />
          <Radio value='option3' label='Option 3' />
          <Input name='child-input-3' changeCallback={this.handleChange} optClass={this.getClass('option3')} />
        </RadioGroup>

        <code>{this.state.checkedValue ? this.state.checkedValue + ' is checked' : null}</code>
        <code>{this.state.currentChildValue ? 'Child value is ' + this.state.currentChildValue : null}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
