import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'
import style from './style.scss'

const options = [
  {id: '0', display: 'test really long option'},
  {id: '1', display: 'test really really long option'},
  {id: '2', display: 'test really really really long option'}
]

class ExampleSelectFieldSelected extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: ['1', '2'],
    status: 'Chosen options are: 1, 2'
  }

  changeCallback = (event) => {
    this.setState({status: 'Chosen options are: ' + event.target.value.join(',') })
  }

  render () {
    return(
      <div>
        <SelectField
          options={options}
          valueProp='id'
          displayProp='display'
          value={this.state.selected}
          changeCallback={this.changeCallback}
          optClass={style['update-select']}
          multi={true}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldSelected
