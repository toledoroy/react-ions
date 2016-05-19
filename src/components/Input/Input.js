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
    changeCallback: React.PropTypes.func,
    /**
     * A callback function to be called when the input is focused.
     */
    focusCallback: React.PropTypes.func,
    /**
     * A callback function to be called when the input is blurred.
     */
    blurCallback: React.PropTypes.func
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback(event);
    }
  }

  handleFocus = (event) => {
    if (typeof this.props.focusCallback === 'function') {
      this.props.focusCallback(event);
    }
  }

  handleBlur = (event) => {
    if (typeof this.props.blurCallback === 'function') {
      this.props.blurCallback(event);
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
