import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

const Spinner = (props) => {
  const cx = classNames.bind(style)
  const loadingClass = props.loading ? style['loading'] : null
  const spinnerPosition = props.position ? style[props.position] : style['absolute']
  const spinnerHidden = props.loading ? '' : style['is-hidden']
  const spinnerWrap = cx(style['spinner-wrap'], loadingClass, spinnerPosition, props.optClass, spinnerHidden)
  const spinnerClass = cx(style[props.type])

  const getStyle = () => {
    return props.color ? { backgroundColor: props.color } : null
  }

  const innerHtml = () => {
    if (props.type === 'spinner-dots') {
      return <span>
               <span className={style.dot1} style={getStyle()}></span>
               <span className={style.dot2} style={getStyle()}></span>
             </span>
    }
    return <span>
             <span className={style.bounce1} style={getStyle()}></span>
             <span className={style.bounce2} style={getStyle()}></span>
             <span className={style.bounce3} style={getStyle()}></span>
           </span>
  }

  return (
    <span className={spinnerWrap}>
      <span className={spinnerClass}>
        {innerHtml()}
      </span>
    </span>
  )
}

Spinner.defaultProps = {
  loading: false
}

Spinner.propTypes = {
  /**
   * Whether the spinner is displayed
   */
  loading: React.PropTypes.bool,
  /**
   * CSS positioning options for the loader. By default, the spinner will be positioned
   * in the center of any element with relative positioning.
   */
  position: React.PropTypes.oneOf(['fixed', 'inline']),
  /**
   * The type of loader you want to display.
   */
  type: React.PropTypes.oneOf(['spinner-dots', 'spinner-bounce']).isRequired,
  /**
   * The hex code of the loader color.
   */
  color: React.PropTypes.string,
  /**
   * Optional styles to add to the spinner.
   */
  optClass: React.PropTypes.string
}

export default Spinner
