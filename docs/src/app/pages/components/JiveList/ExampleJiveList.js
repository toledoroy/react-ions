import React from 'react'
import JiveList from 'react-conventions/lib/JiveList/JiveList'
import style from './style.scss'

class ExampleJiveList extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: [
      'Test 1',
      'Test 2'
    ],    
    status: 'Chosen options are: Test 1,Test 2'
  }

  handleChange = (event) => {
    this.setState({
      values: event.target.value,
      status: 'The callback was triggered and ' + (event.target.value.length > 0 ? 'the chosen options are: ' + event.target.value.join(',') : 'there are no options selected')
    })
  }

  render() {
    return(
      <div>
        <JiveList optClass={style['jive-list']} valueProp='value' displayProp='display' value={this.state.value} changeCallback={this.handleChange} placeholder="Select one or more items" />
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleJiveList
