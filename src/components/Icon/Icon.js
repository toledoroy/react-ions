import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { paths } from './generated'

const Icon = props => {
  const {
    name, width, height, fill, className, onClick
  } = props

  const obj = paths.find(item => item.name === name)

  const getPaths = () => {
    if (obj === undefined) return

    const pathArray = obj !== undefined && obj.path.split('|')

    return pathArray.length > 1
      ? <Fragment>
        { pathArray.map((path, index) => <path key={index} d={path} />) }
      </Fragment>
    : <path d={obj.path} />
  }

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
      {getPaths()}
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
