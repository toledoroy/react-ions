import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

// // bottom
// {
//   left: 'calc(50% - 4px)',
//   top: '-3px'
// }
//
// // top
// {
//   left: 'calc(50% - 4px)',
//   bottom: '-16px'
// }
//
// // right
// {
//   left: '-3px',
//   bottom: 'calc(50% - 4px)'
// }
//
// // left
// {
//   right: '-16px',
//   bottom: 'calc(50% - 4px)'
// }

const styles = ({ showing, position, parent = { width: 0, height: 0 } }) => console.log(parent) ||  ({
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
    right: position === 'left' ? `${Math.ceil(parent.width) + 14}px` : 'initial',
    left: position === 'right' ? `${Math.ceil(parent.width) + 14}px` : 'initial',
    bottom: position === 'top' ? `${Math.ceil(parent.height) + 14}px` : 'initial',
    top: position === 'bottom' ? `${Math.ceil(parent.height) + 14}px` : 'initial',
    transform: position === 'top' || position === 'bottom' ? `translateX(calc(-50% + ${parent.width / 2}px))` : `translateY(calc(-50% + ${parent.height / 2}px))`,
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
      transform: 'rotate(45deg) translateX(-50%)',
      width: '20px',
      right: '-16px',
      bottom: 'calc(50% - 4px)'
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
})

export default styles
