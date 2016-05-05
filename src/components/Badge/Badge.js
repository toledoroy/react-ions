import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from 'react-conventions/lib/Icon'

const Badge = (props) => {
  const cx = classNames.bind(style);
  const badgeClasses = cx(style.badge, props.theme, props.optClass);

  return (
    <div className={badgeClasses}>
      {props.icon ? <Icon name={props.icon} height='16' width='16' /> : null} {props.text ? props.text : null}
    </div>
  )
}

Badge.propTypes = {
  /**
   * Background color of the badge.
   */
  theme: React.PropTypes.string,
  /**
   * Icon value to display in the badge.
   */
  icon: React.PropTypes.string,
  /**
   * Text value to display in the badge.
   */
  text: React.PropTypes.string,
  /**
   * Optional CSS class to pass to the badge.
   */
  optClass: React.PropTypes.string
}

export default Badge
