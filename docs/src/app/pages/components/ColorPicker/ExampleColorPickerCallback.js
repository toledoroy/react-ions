import React from 'react'
import ColorPicker from 'react-conventions/lib/ColorPicker'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'


const COLOR = '#3c97d3'
const NEW_COLOR = '#e54c3b'

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
          <Button onClick={this.updateColor} disabled={this.state.color == NEW_COLOR}>Set new color</Button>
          <Button onClick={this.resetColor} disabled={this.state.color == COLOR} optClass='danger'>Reset color</Button>
        </div>
        <ColorPicker color={this.state.color} changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleColorPickerCallback
