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
     * Name of the input.
     */
    prefix: PropTypes.string,
    /**
     * Optional prefix to add to the input.
     */
    suffix: PropTypes.string,
    /**
     * Optional suffix to add to the input.
     */
    optClass: PropTypes.string,
    /**
     * Name of the input.
     */
    name: PropTypes.string,
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
    /**
     * A helper will render inline style='width: <value>px'
     */
    width: PropTypes.string
  }

  componentDidMount = () => {
    const inputStyles = {}

    if (this.props.prefix) {
      // Add 24 to accommodate for left and right padding of prefix (16+8)
      inputStyles.paddingLeft = this._prefix.getBoundingClientRect().width + 24
    }
    if (this.props.suffix) {
      // Add 24 to accommodate for left and right padding of prefix (8+16)
      inputStyles.paddingRight = this._suffix.getBoundingClientRect().width + 24
    }

    this.setState({ inputStyles })
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = (event) => {
    event.persist()
    const value = (this.props.valueType === 'number' && event.target.value !== '' && !isNaN(event.target.value))
                  ? parseFloat(event.target.value) : event.target.value

    this.setState({value: event.target.value}, () => {
      this.props.changeCallback && this.props.changeCallback({ target: { name: this.props.name, value } })
    })
  }

  handleFocus = (event) => {
    this.props.focusCallback && this.props.focusCallback(event)
  }

  handleBlur = (event) => {
    this.props.blurCallback && this.props.blurCallback(event)
  }

  focus = () => {
    this._input.focus()
  }

  render = () => {
    const {prefix, suffix, label, value, optClass} = this.props
    const cx = classNames.bind(style)
    const disabledClass = this.props.disabled ? style['input-disabled'] : null
    const widthStyle = this.props.width ? { width: this.props.width + 'px' } : null
    const prefixClass = prefix ? style['prefix'] : null
    const suffixClass = suffix ? style['suffix'] : null
    const inputClass = cx(style['input-component'], optClass, disabledClass, prefixClass, suffixClass)
    const inputContainerClass = style['input-container']

    return (
      <div className={inputClass}>
        {label && <label>{label}</label>}
        <div className={inputContainerClass} style={widthStyle}>
          {prefix && <div ref={(c) => this._prefix = c} className={prefixClass}>{prefix}</div>}

          <input
            ref={(c) => this._input = c}
            value={this.state.value}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onClick={this.props.onClick}
            onBlur={this.handleBlur}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            style={this.state.inputStyles}
            onKeyUp={this.props.onKeyUp}
            onKeyPress={this.props.onKeyPress}
            onKeyDown={this.props.onKeyDown}>
          </input>

          {suffix && <div ref={(c) => this._suffix = c} className={suffixClass}>{suffix}</div>}
        </div>
      </div>
    )
  }
}

export default Input
