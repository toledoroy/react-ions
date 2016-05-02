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
     * Whether the texrtarea is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the input element.
     */
    label: React.PropTypes.string,
    /**
     * Value of the input.
     */
    value: React.PropTypes.string,
    /**
     * Optional styles to add to the input component.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function (from RadioGroup) to be called when the option is selected.
     */
    selectCallback: React.PropTypes.func
  };

  componentDidMount() {
    this.refs.input.disabled = this.props.disabled || false;
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['input-disabled'] : '';
    var inputClass = cx(style['input-component'], this.props.optClass, disabledClass);

    return (
      <div className={inputClass}>
        { this.props.label ? <label>{this.props.label}</label> : null }
        <input ref="input" name={this.props.name} value={this.state.value} onChange={this.handleChange.bind(this)}></input>
      </div>
    )
  }
}

export default Input
