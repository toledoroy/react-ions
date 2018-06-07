import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

const styles = ({ showing, position = 'bottom', parent = { width: 0, height: 0 } }) => {
  const caretPos = {
    left: {
      right: '-10px',
      bottom: 'calc(50% - 10px)'
    },
    right: {
      left: '-10px',
      bottom: 'calc(50% - 10px)'
    },
    top: {
      left: 'calc(50% - 10px)',
      bottom: '-10px'
    },
    bottom: {
      left: 'calc(50% - 10px)',
      top: '-10px'
    }

  }
  const popoverPos = {
    left: {
      right: `${Math.ceil(parent.width) + 14}px`,
      transform: `translateY(calc(-50% + ${parent.height / 2}px))`
    },
    right: {
      left: `${Math.ceil(parent.width) + 14}px`,
      transform: `translateY(calc(-50% + ${parent.height / 2}px))`
    },
    top: {
      bottom: `${Math.ceil(parent.height) + 14}px`,
      transform: `translateX(calc(-50% + ${parent.width / 2}px))`
    },
    bottom: {
      top: `${Math.ceil(parent.height) + 14}px`,
      transform: `translateX(calc(-50% + ${parent.width / 2}px))`
    }
  }

  return {
    position: 'relative',
    '> *': {
      margin: 0
    },
    '.popoverInner': {
      backgroundColor: colors.white,
      borderRadius: '3px',
      boxShadow: '0 8px 24px 0 rgba(27,37,47,0.5)',
      width: '300px',
      boxSizing: 'border-box',
      padding: '20px',
      position: 'absolute',
      ...popoverPos[position],
      transition: 'opacity .25s ease',
      visibility: showing ? 'visible' : 'hidden',
      opacity: showing ? 1 : 0,
      zIndex: zLayers.alert,

      '&:before': {
        backgroundColor: colors.white,
        borderRadius: '3px',
        content: '" "',
        height: '20px',
        position: 'absolute',
        transform: 'rotate(45deg)',
        width: '20px',
        ...caretPos[position]
      }
    },
    '.popoverContent': {
      overflowWrap: 'break-word',
      position: 'relative',
      wordWrap: 'break-word',
      zIndex: 1,

      // Center the text on the popover-content buttons,
      // since we can't easily apply the `fill` class to each one
      // eg: buttons are implemented in a child component
      'button em': {
        display: 'block'
      }
    }
  }
}

export default styles
