import React from 'react'
import Button from 'react-ions/lib/components/Button'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Input from 'react-ions/lib/components/Input'
import Icon from 'react-ions/lib/components/Icon'

class ExampleInputCaret extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selectionStart: 0,
    insertedValue: null,
    inputValue: 'http://samplecompany.com'
  }

  getCurrentPosition = () => {
    this._input.focus()

    this.setState({
      // TODO: upgrade react from 16.2 -> 16.4, to gain access to React.createRef()
      // Thus, giving us access to what we need in the DOM vs. doing this crap
      selectionStart: this._input._input.selectionStart
    })
  }

  setValueAtPosition = (value, start) => {
    let updatedValue = this.state.inputValue.slice(0, start) + value + this.state.inputValue.slice(start)

    this.setState({
      inputValue: updatedValue
    })

    this._input.focus()
  }

  itemSelected = value => {
    // For demo only
    this.setState({insertedValue: value.insert})

    this.setValueAtPosition(value.insert, this.state.selectionStart)
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const listItems = [
      {name: 'First Name', callback: this.itemSelected.bind(this, {insert: '{first_name}'})},
      {name: 'Last Name', callback: this.itemSelected.bind(this, {insert: '{last_name}'})},
      {name: 'UID', callback: this.itemSelected.bind(this, {insert: '{uid}'})}
    ]

    const iconNode = <div style={{marginRight: '-25px'}}>
      <Button onClick={this.getCurrentPosition.bind(this, null)}>
        <Icon name='md-add' width='16' height='16' />
      </Button>
    </div>

    const dropdown = <Dropdown trigger={iconNode} listItems={listItems} />

    return (
      <div>
        <Input value={this.state.inputValue}
          focusCallback={this.handleFocus}
          changeCallback={this.handleChange}
          ref={i => this._input = i}
          suffix={dropdown}
        />
        <br />
        <p>
          Selection start: {this.state.selectionStart}<br />
          Inserted value: {this.state.insertedValue}
        </p>
      </div>
    )
  }
}

export default ExampleInputCaret
