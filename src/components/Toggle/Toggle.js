import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import classNames from 'classnames/bind'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false,
    value: false,
    text: ['Yes', 'No'],
    hasText: false
  }

  state = {
    value: this.props.value
  }

  static propTypes = {
    /**
     * Name of the toggle.
     */
    name: PropTypes.string,
    /**
     * Value of the toggle.
     */
    value: PropTypes.bool,
    /**
     * Text displayed with the toggle.
     */
    label: PropTypes.string,
    /**
     * Whether the toggle is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Optional styles to add to the toggle.
     */
    optClass: PropTypes.string,
    /**
     * A callback function to be called when the toggle changes.
     */
    changeCallback: PropTypes.func,
    /**
    * Optional customized text inside the toggle, first value is text for True and second value is for False
    */
    text: PropTypes.array,
    /**
    * Boolean used to signify if text is used on the toggle
    */
    hasText: PropTypes.bool
  }

  handleChange = () => {
    if (this.props.disabled) {
      return
    }

    this.setState({ value: !this.state.value }, () => {
      if (this.props.changeCallback) {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: this.state.value
          }
        })
      }
    })
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  findToggleSize = (hasText, text) => {
    if (hasText && (text[0] !== 'Yes' && text[1] !== 'No')) {
      const value = this.calculateCustomTextAdjust(text)
      return { width: 44 + value + 'px'}
    } else {
      return {width: '50px'}
    }
  }

  calculateCustomTextAdjust = (text) => {
    let value = 0
    text.map(t => {
      value = t.length > value ? t.length : value
    })
    return (value * 4)
  }

  toggleText = (hasText, text, isOn) => {
    if (hasText && isOn) {
      return text[1]
    }
    else if (hasText && !isOn) {
      return text[0]
    }
    else {
      return ''
    }
  }

  customText = (text) => {
    if (text[0] === 'Yes' && text[1] === 'No') {
      return false
    }
    else {
      return true
    }
  }
  render = () => {
    const cx = classNames.bind(style)
    const onClass = this.state.value ? style.on : ''
    const isCustomText = !!this.customText(this.props.text)
    const toggleSize = this.findToggleSize(this.props.hasText, this.props.text)
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    const textClasses = cx(style.text, onClass)
    const hasText = this.props.hasText ? style['has-text'] : ''
    const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    const toggleWrapper = cx(style['toggle-wrapper'], hasText)
    const toggleClass = cx(style['toggle-component'], disabledClass, this.props.optClass)
    const toggleText = this.toggleText(this.props.hasText, this.props.text, onClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        {
          this.props.label &&
          <label>{this.props.label}</label>
        }
        <div className={toggleWrapper} style={toggleSize}>
          <div className={outerClasses} />
          <span className={textClasses}>{toggleText}</span>
          <div className={innerClasses} />
        </div>
      </div>
    )
  }
}

export default Toggle
