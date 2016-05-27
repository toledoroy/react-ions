import React from 'react'
import Input from '../Input/Input'
import { SketchPicker } from 'react-color'
import style from './style.scss'


/**
 * The ColorPicker component.
 */
class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    displayColorPicker: false,
    color: ''
  }

  componentWillMount = () => {
    if (typeof this.props.color !== 'undefined') {
      this.setState({color: this.props.color})
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = (color) => {
    this.setState({ color: color.hex })
  }

  render() {
    return (
      <div className={style['colorpicker-component']}>
        <Input value={this.state.color} onClick={this.handleClick} />
        <div
          className={style['color-preview']}
          style={{backgroundColor: this.state.color}}
          onClick={this.handleClick}>
        </div>
        { this.state.displayColorPicker ?
          <div className={style['sketch-container']} >
            <div onClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
          </div>
          : null
        }
      </div>
    )
  }
}

export default ColorPicker