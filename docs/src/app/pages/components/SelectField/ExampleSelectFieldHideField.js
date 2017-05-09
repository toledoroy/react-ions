import React from 'react'
import SelectField from 'react-ions/lib/SelectField/SelectField'
import style from './style'

class ExampleSelectFieldCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    options: [
      { value: '0', display: 'test 1' },
      { value: '1', display: 'test 2' },
      { value: '2', display: 'test 3' }
    ],
    value: '1',
    status: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value, status: 'Chosen option is ' + event.target.value })
  }

  render() {
    return(
      <SelectField
        options={this.state.options}
        valueProp='value'
        displayProp='display'
        changeCallback={this.handleChange}
        value={this.state.value}
        hideField='notShowing'
      />
    )
  }
}

export default ExampleSelectFieldCallback
