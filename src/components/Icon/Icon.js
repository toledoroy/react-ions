import React from 'react'
import PropTypes from 'prop-types'
import { paths } from './generated'

const Icon = props => {
  const {
    name, width, height, fill, className, onClick
  } = props

  return (
    <svg
      role='img'
      name={name}
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
      viewBox='0 0 24 24'>
      <path
        d={paths[name]}
        fillRule='evenodd'
      />
    </svg>
  )
}

Icon.defaultProps = {
  height: '24',
  width: '24'
}

Icon.propTypes = {
  /**
   * The name of the icon.
   */
  name: PropTypes.string.isRequired,
  /**
   * The width of the icon.
   */
  width: PropTypes.string,
  /**
   * The height of the icon.
   */
  height: PropTypes.string,
  /**
   * The color (fill) of the icon.
   */
  fill: PropTypes.string,
  /**
   * The CSS class of the icon.
   */
  className: PropTypes.string,
  /**
   * A function to be called on click
   */
  onClick: PropTypes.func
}

export default Icon
