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
     * Optional styles to add to the textarea component.
     */
    optClass: React.PropTypes.string,
  };

  componentDidMount() {
    this.refs.textarea.disabled = this.props.disabled || false;
  }

  handleChange(event) {
    if (typeof this.props.selectCallback === 'function') {
      this.props.selectCallback(event, this.props.value);
    }
  }

  render() {
    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    var textareaClass = cx(style['textarea-component'], this.props.optClass, disabledClass);

    return (
      <div className={style['textarea-component']}>
        { this.props.label ? <label>{this.props.label}</label> : null }
        <textarea type="textarea" ref="textarea" value={this.props.value} name={this.props.name} onChange={this.handleChange.bind(this)}></textarea>
      </div>
    )
  }
}

export default Textarea
