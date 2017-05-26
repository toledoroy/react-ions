import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader'
import style from './style.scss'
import optclass from '../internal/OptClass'

const Button = (props) => {
  const collapseClass = props.collapse ? 'collapse' : null
  const loaderClasses = props.loading ? 'loading' : null
  const btnClasses = optclass(style, [style.btn, props.size, loaderClasses, collapseClass], props.optClass)
  const spinnerOptions = {
    lines: 10,
    length: 4,
    width: 3,
    radius: 5
  }

  return (
    <button type='button' className={btnClasses} disabled={props.disabled || props.loading} onClick={props.onClick}>
      { props.loading ? <Loader loaded={false} options={spinnerOptions} /> : null }
      <em>{props.children}</em>
    </button>
  )
}

Button.propTypes = {
  /**
   * The size of button.
   */
  size: PropTypes.string,
  /**
   * Whether the button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the loading spinner is displayed.
   */
  loading: PropTypes.bool,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: PropTypes.bool,
  /**
   * Optional CSS class(es) to be used for local styles (string or array of strings)
   */
  optClass: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  /**
   * A function to be called onClick
   */
  onClick: PropTypes.func
}

export default Button
