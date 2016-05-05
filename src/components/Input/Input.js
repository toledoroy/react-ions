import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The Input component.
 */
class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.value
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * Whether the input is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the input.
     */
    label: React.PropTypes.string,
    /**
     * Value of the input.
     */
    value: React.PropTypes.string,
    /**
     * Optional placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * Name of the input.
     */
    name: React.PropTypes.string,
    /**
     * Optional styles to add to the input.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the input changes.
     */
    onChange: React.PropTypes.func,
    /**
     * A callback function to be called when the input is focused.
     */
    onFocus: React.PropTypes.func,
    /**
     * A callback function to be called when the input is blurred.
     */
    onBlur: React.PropTypes.func
  };

  handleChange = (event) => {
    this.setState({value: event.target.value}, function() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event);
      }
    });
  }

  handleFocus = (event) => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }
  }

  handleBlur = (event) => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  }

  render() {
    const {
      label,
      value,
      optClass,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['input-disabled'] : '';
    var inputClass = cx(style['input-component'], this.props.optClass, disabledClass);

    return (
      <div className={inputClass}>
        { label ? <label>{label}</label> : null }
        <input
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          {...other}>
        </input>
      </div>
    )
  }
}

export default Input
