import React from 'react'
import Loader from 'react-loader'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import optclass from '../internal/OptClass'

const style = prefix(rawStyle)

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
    <button type='button' className={btnClasses} disabled={props.disabled || props.loading} {...props}>
      { props.loading ? <Loader loaded={false} options={spinnerOptions} /> : null }
      <em>{props.children}</em>
    </button>
  )
}

Button.propTypes = {
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
  collapse: React.PropTypes.bool,
  /**
   * Optional CSS class(es) to be used for local styles (string or array of strings)
   */
  optClass: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ])
}

export default Button
