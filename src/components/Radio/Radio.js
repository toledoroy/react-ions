import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

const Radio = (props) => {
  const {
    label,
    optClass,
    description,
    ...other
  } = props

  const cx = classNames.bind(style)
  const disabledClass = props.disabled ? style['radio-disabled'] : null
  const radioClass = cx(style['radio-component'], optClass, disabledClass)
  const labelWrapperClass = props.description ? style['label-group'] : null

  const handleChange = (event) => {
    event.persist()
    if (typeof props.changeCallback === 'function') {
      props.changeCallback(event, props.value)
    }
  }

  const getLabel = () => {
    if (props.label && props.description) {
      return <div className={style['label-wrapper']}>
        <label>
          <span className={style['label-title']}>{label}</span>
          <span className={style['label-description']}>{description}</span>
        </label>
      </div>
    }

    if (props.label) {
      return <label>{label}</label>
    }

    return null
  }

  return (
    <div className={radioClass}>
      <input type="radio" onChange={handleChange} value={props.value} name={props.name} disabled={props.disabled}></input>
      <div className={labelWrapperClass}>
        <div className={style['radio-input']}></div>
        {getLabel()}
      </div>
    </div>
  )
}

Radio.defaultProps = {
  checked: false,
  disabled: false
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
  changeCallback: React.PropTypes.func,
  /**
   * An optional string that appears below the label
   */
  description: React.PropTypes.string
}

export default Radio
