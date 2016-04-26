import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

const Button = (props) => {
  const cx = classNames.bind(style);
  const btnClasses = cx(style.btn, props.optClass, props.size);

  return (
    <button type='button' className={btnClasses} {...props}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  /**
   * Optional styles to add to the button.
   */
  optClass: React.PropTypes.string,
  /**
   * The size of button.
   */
  size: React.PropTypes.string,
  /**
   * Whether the button is disabled.
   */
  disabled: React.PropTypes.bool,
}

export default Button
