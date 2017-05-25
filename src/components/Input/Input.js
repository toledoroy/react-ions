import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The Input component.
 */
class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: this.props.value
  }

  static defaultProps = {
    disabled: false,
    value: '',
    valueType: 'string'
  }

  static propTypes = {
    /**
     * Whether the input is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Text shown above the input.
     */
    label: PropTypes.string,
    /**
     * Value of the input.
     */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    /**
     * Type of the value.
     */
    valueType: PropTypes.oneOf(['string', 'number']),
    /**
     * Optional placeholder text.
     */
    placeholder: PropTypes.string,
    /**
     * Name of the input.
     */
    name: PropTypes.string,
    /**
     * Optional styles to add to the input.
     */
    optClass: PropTypes.string,
    /**
     * A callback function to be called when the input changes.
     */
    changeCallback: PropTypes.func,
    /**
     * A callback function to be called when the input is focused.
     */
    focusCallback: PropTypes.func,
    /**
     * A callback function to be called when the input is blurred.
     */
    blurCallback: PropTypes.func,
    /**
     * A callback function to be called when the input is clicked.
     */
    onClick: PropTypes.func,
    /**
     * A callback function to be called when the onkeyup event is fired.
     */
    onKeyUp: PropTypes.func,
    /**
     * A callback function to be called when the onkeypress event is fired.
     */
    onKeyPress: PropTypes.func,
    /**
     * A callback function to be called when the onkeydown event is fired.
     */
    onKeyDown: PropTypes.func,
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = (event) => {
    event.persist()

    const value = this.props.valueType === 'number' && event.target.value !== '' && !isNaN(event.target.value)
      ? parseFloat(event.target.value) : event.target.value

    this.setState({value: event.target.value}, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: value
          }
        })
      }
    })
  }

  handleFocus = (event) => {
    if (typeof this.props.focusCallback === 'function') {
      this.props.focusCallback(event)
    }
  }

  handleBlur = (event) => {
    if (typeof this.props.blurCallback === 'function') {
      this.props.blurCallback(event)
    }
  }

  focus = () => {
    this._input.focus()
  }

  render() {
    const {
      label,
      value,
      optClass,
      ...other
    } = this.props

    const cx = classNames.bind(style)
    var disabledClass = this.props.disabled ? style['input-disabled'] : ''
    var inputClass = cx(style['input-component'], this.props.optClass, disabledClass)

    return (
      <div className={inputClass}>
        { label ? <label>{label}</label> : null }
        <input
          ref={(c) => this._input = c}
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onClick={this.props.onClick}
          onBlur={this.handleBlur}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onKeyUp={this.props.onKeyUp}
          onKeyPress={this.props.onKeyPress}
          onKeyDown={this.props.onKeyDown}>
        </input>
      </div>
    )
  }
}

export default Input
