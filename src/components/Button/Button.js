import React from 'react'
import Loader from 'react-loader'
import style from './style.scss'
import classNames from 'classnames/bind'

const Button = (props) => {
  const cx = classNames.bind(style)
  const collapseClass = props.collapse ? 'collapse' : null
  const loaderClasses = props.loading ? 'loading' : null
  const btnClasses = cx(style.btn, props.optClass, props.size, loaderClasses, collapseClass)
  const spinnerOptions = {
    lines: 10,
    length: 4,
    width: 3,
    radius: 5
  }

  return (
    <button type='button' className={btnClasses} disabled={props.disabled || props.loading} {...props}>
      { props.loading ? <Loader loaded={false} options={spinnerOptions} /> : null }
      <em>{props.children}</em>
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
  /**
   * Whether the loading spinner is displayed.
   */
  loading: React.PropTypes.bool,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: React.PropTypes.bool
}

export default Button
