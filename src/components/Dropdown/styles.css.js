import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

// TODO: Write test(s) for any logic contained herein
const styles = ({ listItems, alignment, optClass, isOpened, triggerRect = { width: 0 } }) => {
  return {
    display: 'inline-block',
    position: 'relative',
    '> *': {
      margin: 0
    },
    '.trigger': {
      cursor: 'pointer'
    },
    '.dropdown-wrapper': {
      backgroundColor: colors.white,
      borderRadius: '3px',
      boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
      height: 'auto',
      marginTop: '7px',
      opacity: isOpened ? 1 : 0,
      overflow: listItems ? 'hidden' : 'unset',
      padding: listItems ? 0 : '10px',
      position: 'absolute',
      transform: isOpened && alignment === 'right' ? `translateX(calc(-100% + ${triggerRect.width}px))` : 'inherit',
      display: isOpened ? 'block' : 'none',
      zIndex: zLayers.dropdown
    },
    '.list-wrapper': {
      margin: 0,
      minWidth: '110px',
      padding: 0,
      lineHeight: 'initial',
      li: {
        boxSizing: 'border-box',
        color: colors.primary_4,
        cursor: 'pointer',
        display: 'block',
        minHeight: '18px',
        padding: '10px',
        textDecoration: 'none',
        width: '100%',
        '&:hover': {
          backgroundColor: colors.primary_1,
          color: colors.white
        }
      }
    },
    '.overlay': {
      backgroundColor: colors.white,
      width: '100%',
      '> span': {
        fontSize: '16px',
        fontWeight: 200,
        color: colors.navy_text,
        marginLeft: '10px',
        marginTop: '10px',
        display: 'block'
      },
      '.button-wrapper': {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 10px 10px 0',
        width: '100%',
        button: {
          margin: 0
        }
      }
    }
  }
}

export default styles
