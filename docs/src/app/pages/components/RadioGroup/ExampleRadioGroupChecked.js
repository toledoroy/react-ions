import React from 'react'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

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

class ExampleRadioChecked extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: 1
  }

  updateSelected = (index) => {
    this.setState({ selected: index });
  }

  render () {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, 0)}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, 1)}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, 2)}>Select 3rd item</Button>
        </div>
        <RadioGroup
          label="Checked radio label"
          name="checked-radio-group"
          options={options}
          defaultOption={this.state.selected}>
        </RadioGroup>
      </div>
    )
  }
}

export default ExampleRadioChecked
