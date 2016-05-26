import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'

const Badge = (props) => {
  const cx = classNames.bind(style);
  const iconPlusText = (props.icon && props.text) ? 'padded' : null;
  const iconSize = props.size === 'heavy' ? '30' : '16';
  const badgeClasses = cx(style.badge, props.theme, props.size, props.optClass, iconPlusText);

  return (
    <div className={badgeClasses}>
      {props.icon ? <Icon name={props.icon} height={iconSize} width={iconSize} /> : null} {props.text ? <span>{props.text}</span> : null}
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
   * The size of the badge.
   */
  size: React.PropTypes.string,
  /**
   * Optional CSS class to pass to the badge.
   */
  optClass: React.PropTypes.string
}

export default Badge
