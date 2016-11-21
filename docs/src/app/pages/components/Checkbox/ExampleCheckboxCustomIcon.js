import React from 'react'
import Checkbox from 'react-conventions/lib/Checkbox'
import Button from 'react-conventions/lib/Button'
import Icon from 'react-conventions/lib/Icon'
import style from './style.scss'

class ExampleCheckboxToggle extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    iconName: 'icon-minus-2',
    checked: true
  }

  toggleIcon = () => {
    const iconName = this.state.iconName === 'icon-minus-2' ? 'icon-check-1-1' : 'icon-minus-2'
    this.setState({ iconName: iconName })
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return(
      <div>
        <Button onClick={this.toggleIcon} optClass={style.toggle}>
          <span>Use</span>
          {this.state.iconName === 'icon-minus-2' ? <Icon name='icon-check-1-1' fill='#3C97D3' height='14' width='14' /> : <Icon name='icon-minus-2' fill='#3C97D3' height='14' width='14' /> }
        </Button>
        <Checkbox label="Default checkbox" value={this.state.checked} changeCallback={this.handleChange} iconName={this.state.iconName} />
      </div>
    )
  }
}

export default ExampleCheckboxToggle
