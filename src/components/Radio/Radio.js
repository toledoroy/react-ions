import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

const Radio = (props) => {
  const cx = classNames.bind(style);
  const disabledClass = this.props.disabled ? style['radio-disabled'] : '';
  const radioClass = cx(style['radio-component'], optClass, disabledClass);

  const {
    label,
    labelPosition,
    optClass,
    ...other
  } = this.props;

  const handleChange = function(event) {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback(event, this.props.value);
    }
  }

  return (
    <div className={radioClass}>
      <input type="radio" onChange={handleChange} {...other}></input>
      <div>
        { label && labelPosition === 'left' ? <label className={style['label-left']}>{label}</label> : null }
        <div className={style['radio-input']}></div>
        { label && labelPosition === 'right' ? <label className={style['label-right']}>{label}</label> : null }
      </div>
    </div>
  )
}

Radio.defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'right'
}

Radio.propTypes = {
  /**
   * True if the option is checked.
   */
  checked: React.PropTypes.bool,
  /**
   * Whether the option is disabled.
   */
  disabled: React.PropTypes.bool,
  /**
   * Text shown next to the radio input element.
   */
  label: React.PropTypes.string,
  /**
   * The position of the label.
   */
  labelPosition: React.PropTypes.oneOf(['left', 'right']),
  /**
   * Value of the option.
   */
  value: React.PropTypes.string,
  /**
   * Optional styles to add to the radio component.
   */
  optClass: React.PropTypes.string,
  /**
   * Name specified in the RadioGroup component.
   */
  name: React.PropTypes.string,
  /**
   * A callback function (from RadioGroup) to be called when the option is changed.
   */
  changeCallback: React.PropTypes.func
}

export default Radio
