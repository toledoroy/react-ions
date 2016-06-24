import React from 'react'
import MultiSelect from 'react-conventions/lib/MultiSelect/MultiSelect'
import SelectField from 'react-conventions/lib/SelectField/SelectField'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

class ExampleMultiSelectField extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: ['0', '1'],
    status: 'Chosen options are: 0,1'
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value, status: 'The callback was triggered and the chosen options are: ' + event.target.value.join(',') })
  }

  updateSelected = (index) => {
    this.setState({ value: [index], status: 'Chosen options are: ' + index })
  }

  render() {
    const options = [
      {value: '0', display: 'test 1'},
      {value: '1', display: 'test 2'},
      {value: '2', display: 'test 3'},
      {value: '3', display: 'test 4'}
    ]

    return(
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
        </div>
        <MultiSelect options={options} valueProp='value' displayProp='display' value={this.state.value} changeCallback={this.handleChange} placeholder="Select one or more items">
          <SelectField />
        </MultiSelect>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleMultiSelectField
