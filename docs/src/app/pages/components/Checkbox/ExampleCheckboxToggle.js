import React from 'react'
import Checkbox from 'react-conventions/lib/Checkbox'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

class ExampleCheckboxToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    checked: true
  }

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return(
      <div>
        <Button onClick={this.toggleCheckbox} optClass={style.toggle}>{this.state.checked ? 'Uncheck' : 'Check' } Checkbox</Button>
        <Checkbox label="Default checkbox" value={true} checked={this.state.checked} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleCheckboxToggle
