import React from 'react'
import ColorPicker from 'react-conventions/lib/ColorPicker'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'


const oldColor = '#3c97d3'
const newColor = '#e54c3b'

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
    status: this._setStatus(oldColor),
    color: oldColor
  }

  handleChange = (newColor) => {
    this._updateState(newColor)
  }

  updateColor = () => {
    this._updateState(newColor)
  }

  resetColor = () => {
    this._updateState(oldColor)
  }

  render() {
    return(
      <div>
        <div className={style.buttons}>
          <Button onClick={this.updateColor} disabled={this.state.color == newColor}>Set new color</Button>
          <Button onClick={this.resetColor} disabled={this.state.color == oldColor} optClass='danger'>Reset color</Button>
        </div>
        <ColorPicker color={this.state.color} changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleColorPickerCallback
