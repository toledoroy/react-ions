import React from 'react'
import PropTypes from 'prop-types'
import svg from 'open-iconic/sprite/open-iconic.min.svg'

const Icon = (props) => {
  const sprite = props.sprite ? props.sprite : svg
  const {
    name,
    width,
    height,
    fill,
    className,
    onClick
  } = props

  return (
    <svg role='img' name={name} width={width} height={height} fill={fill} className={className} onClick={onClick} viewBox='0 0 8 8'>
      <use xlinkHref={sprite+'#'+props.name} />
    </svg>
  )
}

Icon.defaultProps = {
  height: '24',
  width: '24'
}

Icon.propTypes = {
  /**
   * The name of the button (see Iconography).
   */
  name: PropTypes.string.isRequired,
  /**
   * The width of the button.
   */
  width: PropTypes.string,
  /**
   * The height of the button.
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
   * An optional path to reference another .svg sprite.
   * NOTE: file must be imported. See example code.
   */
  sprite: PropTypes.string,
  /**
   * A function to be called on click
   */
  onClick: PropTypes.func
}

export default Icon
