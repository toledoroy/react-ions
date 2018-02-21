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
    hasText: false
  }

  state = {
    value: this.props.value,
    text: ['Yes', 'No']
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

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  toggleText = (hasText, text, isOn) => {
    if (hasText && isOn) {
      return text[0]
    } else if (hasText && !isOn) {
      return text[1]
    }
    return ''

  }

  render = () => {
    const cx = classNames.bind(style)
    const onClass = this.state.value ? style.on : ''
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    const textClasses = cx(style.text, onClass)
    const hasTextClass = this.props.hasText ? style['has-text'] : style['no-text']
    const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    const toggleWrapper = cx(style['toggle-wrapper'], hasTextClass)
    const toggleClass = cx(style['toggle-component'], disabledClass, this.props.optClass)
    const toggleText = this.toggleText(this.props.hasText, this.state.text, onClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        {
          this.props.label &&
          <label>{this.props.label}</label>
        }
        <div className={toggleWrapper}>
          <div className={outerClasses} />
           {this.props.hasText
             ? <span className={textClasses}>{toggleText}</span>
             : null
           }
          <div className={innerClasses} />
        </div>
      </div>
    )
  }
}

export default Toggle
