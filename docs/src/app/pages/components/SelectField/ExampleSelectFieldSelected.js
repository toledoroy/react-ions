import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const options = [
  {id: '0', display: 'test really long option'},
  {id: '1', display: 'test really really long option'},
  {id: '2', display: 'test really really really long option'}
];

class ExampleSelectFieldSelected extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: '1'
  }

  updateSelected = (index) => {
    this.setState({ selected: index });
  }

  changeCallback = (event) => {
    this.setState({ status: 'The callback was triggered and the chosen option is \'' + event.target.value + '\'' })
  }

  render () {
    return(
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, '1')}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, '2')}>Select 3rd item</Button>
          <Button onClick={this.updateSelected.bind(this, '3')}>Select 4th item</Button>
        </div>
        <SelectField
          options={options}
          valueProp='id'
          displayProp='display'
          value={this.state.selected}
          changeCallback={this.changeCallback}
          optClass={style['update-select']}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldSelected
