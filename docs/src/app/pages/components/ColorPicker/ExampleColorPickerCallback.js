import React from 'react'
import ColorPicker from 'react-conventions/lib/ColorPicker'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'


const COLOR = '#3C97D3'
const NEW_COLOR = '#CA1D31'

class ExampleColorPickerCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  _setStatus = (color) => {
    return 'Selected color is ' + color
  }

  _updateState = (color) => {
    this.setState({
      color: color,
      status: this._setStatus(color)
    })
  }

  state = {
    status: this._setStatus(COLOR),
    color: COLOR
  }

  handleChange = (newColor) => {
    this._updateState(newColor)
  }

  updateColor = () => {
    this._updateState(NEW_COLOR)
  }

  resetColor = () => {
    this._updateState(COLOR)
  }

  render() {
    return(
      <div>
        <div className={style.buttons}>
          <Button onClick={this.updateColor}>Set new color</Button>
          <Button onClick={this.resetColor}>Reset color</Button>
        </div>
        <ColorPicker color={this.state.color} changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleColorPickerCallback
