import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The Textarea component.
 */
class Textarea extends React.Component {
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
     * Whether the texrtarea is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the textarea element.
     */
    label: React.PropTypes.string,
    /**
     * Value of the textarea.
     */
    value: React.PropTypes.string,
    /**
     * Optional placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * Optional styles to add to the textarea component.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the textfield changes.
     */
    onChange: React.PropTypes.func,
    /**
     * A callback function to be called when the textfield is focused.
     */
    onFocus: React.PropTypes.func,
    /**
     * A callback function to be called when the textfield is blurred.
     */
    onBlur: React.PropTypes.func
  };

  componentDidMount() {
    this.refs.textarea.disabled = this.props.disabled || false;
  }

  handleChange(event) {
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
    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['textarea-disabled'] : '';
    var textareaClass = cx(style['textarea-component'], this.props.optClass, disabledClass);

    return (
      <div className={textareaClass}>
        {this.props.label ? <label>{this.props.label}</label> : null}
        <textarea
          placeholder={this.props.placeholder}
          ref='textarea'
          value={this.state.value}
          onFocus={this.handleFocus.bind(this)}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}>
        </textarea>
      </div>
    )
  }
}

export default Textarea
