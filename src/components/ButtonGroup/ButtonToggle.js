import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Button from '../Button/Button'

/**
 * The ButtonToggle component.
 */
class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    checked: false,
    disabled: false
  }

  static propTypes = {
    /**
     * True if the option is checked.
     */
    checked: React.PropTypes.bool,
    /**
     * Whether the option is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown inside the button toggle element.
     */
    label: React.PropTypes.string,
    /**
     * Value of the option.
     */
    value: React.PropTypes.string,
    /**
     * Optional styles to add to the button toggle component.
     */
    optClass: React.PropTypes.string,
    /**
     * Name specified in the ButtonGroup component.
     */
    name: React.PropTypes.string,
    /**
     * A callback function (from ButtonGroup) to be called when the option is changed.
     */
    changeCallback: React.PropTypes.func
  };

  handleChange = (event) => {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback(event, this.props.value);
    }
  }

  render() {
    const {
      label,
      optClass,
      type,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['button-toggle-disabled'] : '';
    var activeClass = this.props.checked ? 'active' : '';
    var buttonToggleClass = cx(style['button-toggle-component'], optClass, disabledClass, activeClass);

    return (
      <div className={buttonToggleClass}>
        <input type="radio" onChange={this.handleChange} {...other}></input>
        <Button optClass={optClass} {...other}>{label}</Button>
      </div>
    )
  }
}

export default ButtonToggle
