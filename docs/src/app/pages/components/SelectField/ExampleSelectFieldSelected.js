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

  render () {
    return(
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, '1')}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, '2')}>Select 3rd item</Button>
        </div>
        <SelectField
          options={options}
          valueProp='id'
          displayProp='display'
          value={this.state.selected}
          optClass={style['update-select']} />
      </div>
    )
  }
}

export default ExampleSelectFieldSelected
