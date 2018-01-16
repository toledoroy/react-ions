import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  }, {
    value: 'option_2',
    label: 'Option 2'
  }, {
    value: 'option_3',
    label: 'Option 3'
  }
]

class ExampleRadioChecked extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: 'option_2'
  }

  updateSelected = value => {
    this.setState({ selected: value })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, 'option_1')}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, 'option_2')}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, 'option_3')}>Select 3rd item</Button>
          <Button onClick={this.updateSelected.bind(this, '')}>Uncheck</Button>
        </div>
        <RadioGroup
          name="checked-radio-group"
          options={options}
          value={this.state.selected}>
        </RadioGroup>
      </div>
    )
  }
}

export default ExampleRadioChecked
