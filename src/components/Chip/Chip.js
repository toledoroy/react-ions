import React from 'react'
import PropTypes from 'prop-types'
import optclass from '../internal/OptClass'
import style from './style.scss'

const Chip = props => {
  const isActionable = props.clickCallback ? 'is-actionable' : null
  const chipClasses = optclass(style, ['chip-wrapper', props.color, props.size, props.optClass, isActionable])

  return (
    <span className={chipClasses}>
      <span onClick={props.clickCallback}>{props.text}</span>
    </span>
  )
}

Chip.propTypes = {
  /**
   * The background color of the chip.
   */
  color: PropTypes.oneOf([
    'danger',
    'neutral-1',
    'neutral-4',
    'primary',
    'primary-darker',
    'success'
  ]),
  /**
   * Optional click callback.
   */
  clickCallback: PropTypes.func,
  /**
   * Optional styles to add to the chip.
   */
  optClass: PropTypes.string,
  /**
   * Optional size of the chip.
   */
  size: PropTypes.oneOf(['larger', 'smaller']),
  /**
   * Text to display inside the chip.
   */
  text: PropTypes.string
}

Chip.defaultProps = {
  color: 'primary'
}

export default Chip
