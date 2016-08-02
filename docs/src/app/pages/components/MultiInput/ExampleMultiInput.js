import React from 'react'
import MultiInput from 'react-conventions/lib/MultiInput/MultiInput'
import style from './style.scss'

class ExampleMultiInput extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: ['0', '1'],
    status: 'Chosen options are: 0,1'
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value, status: 'The callback was triggered and ' + (event.target.value.length > 0 ? 'the chosen options are: ' + event.target.value.join(',') : 'there are no options selected') })
  }

  updateSelected = (index) => {
    this.setState({ value: [index], status: 'Chosen options are: ' + index })
  }

  render() {
    const options = [
    ]

    return(
      <div>
        <MultiInput optClass={style['custom-multi']} options={options} valueProp='value' displayProp='display' value={this.state.value} changeCallback={this.handleChange} placeholder="Select one or more items" />
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleMultiInput
