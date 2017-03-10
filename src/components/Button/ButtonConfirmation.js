import React from 'react'
import { Link } from 'react-router'
import style from './style.scss'
import classNames from 'classnames/bind'

const ButtonConfirmation = (props) => {
  const cx = classNames.bind(style)
  const collapseClass = props.collapse ? 'collapse' : null
  const btnConfirmationClasses = cx(style.btn, props.optClass, props.size, collapseClass)

  let buttonConfirmation

  if (props.internal) {
    buttonConfirmation = <Link to={props.path} className={btnConfirmationClasses} {...props}>{props.children}</Link>
  } else {
    buttonConfirmation = <a href={props.path} className={btnConfirmationClasses} {...props}>{props.children}</a>
  }
  return buttonConfirmation
}

ButtonConfirmation.propTypes = {
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
  /**
   * A path to pass to the anchor tag.
   */
  path: React.PropTypes.string,
  /**
   * Whether the link it to an internal page, or external (default)
   */
  internal: React.PropTypes.bool,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: React.PropTypes.bool
}

export default ButtonConfirmation
