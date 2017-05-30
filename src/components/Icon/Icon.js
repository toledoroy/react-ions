import React from 'react'
import PropTypes from 'prop-types'
import svg from '../../assets/icons/icons.svg'

const Icon = (props) => {
  return (
    <svg role='img' {...props}>
      <use xlinkHref={svg+'#'+props.name} />
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
  className: PropTypes.string
}

export default Icon
