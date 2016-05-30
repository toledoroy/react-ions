import React from 'react'
import Input from '../Input/Input'
import { SketchPicker } from 'react-color'
import style from './style.scss'
import classNames from 'classnames/bind'


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

  static defaultProps = {
    color: ''
  }

  static propTypes = {
    /**
     * Hex color value.
     */
    color: React.PropTypes.string,
    /**
     * A callback function to be called when the color changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * An optional CSS class to be used for local styles
     */
    optClass: React.PropTypes.string
  }

  componentWillMount = () => {
    if (typeof this.props.color !== 'undefined') {
      this.setState({color: this.props.color})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.color !== this.props.color) {
      this.setState({ color: nextProps.color });
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handlePickerChange = (color) => {
    let newColor = color.hex
    this.setState({ color: newColor }, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(newColor);
      }
    })
  }

  handleInputChange = (event) => {
    let newColor = ''

    if (event.target.value && !event.target.value.startsWith('#')) {
      newColor = '#'
    }

    newColor += event.target.value

    this.setState({ color: newColor }, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(newColor);
      }
    })
  }

  render() {
    const cx = classNames.bind(style);
    var componentClass = cx(style['colorpicker-component'], this.props.optClass);
    var colorPreviewClass = cx(style['color-preview'], (this.state.color ? '' : 'empty'))

    return (
      <div className={componentClass}>
        <Input
          value={this.state.color}
          placeholder='Click to choose a color'
          onClick={this.handleClick}
          changeCallback={this.handleInputChange}
        />
        <div
          className={colorPreviewClass}
          style={{backgroundColor: this.state.color}}
          onClick={this.handleClick}>
        </div>
        { this.state.displayColorPicker ?
          <div className={style['sketch-container']} >
            <div onClick={this.handleClose} />
            <SketchPicker color={ this.state.color } onChange={this.handlePickerChange} />
          </div>
          : null
        }
      </div>
    )
  }
}

export default ColorPicker