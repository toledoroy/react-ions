import React from 'react'

const Overlay = (props) => {
  const getStyles = function() {
    var style = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: '-100%',
      opacity: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
      willChange: 'opacity',
      transform: 'translateZ(0)',
      zIndex: -1,
      transition: 'left 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 400ms, opacity 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms'
    }

    document.body.style.removeProperty('overflow')

    if (props.show) {
      document.body.style.overflow = 'hidden'
      style.left = 0
      style.opacity = 0.6
      style.transition = 'left 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms'
    }

    return style
  }

  var style = getStyles()

  const {
    show,
    ...other,
  } = props

  return (
    <div {...other} style={style}>
    </div>
  )
}

Overlay.propTypes = {
  show: React.PropTypes.bool.isRequired
}

Overlay.defaultProps = {
  show: false
}

export default Overlay
