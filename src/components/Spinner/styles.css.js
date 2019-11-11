import { keyframes, css } from 'styled-components'
import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

const dotsRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

css`@keyframes example {
  100% {
    transform: rotate(360deg);
  }
}`

const dotsRotateAnimation = () => {
  css`${ dotsRotate } 2.0s infinite linear`
}

const dotsBounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
`

const dotsBounceAnimation = () => {
  css`${dotsBounce} 2.0s infinite ease-in-out`
}

const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`

const bounceDelayAnimation = () => {
  css`${bounceDelay} 1.4s infinite ease-in-out both`
}

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`

const ringAnimation = () => {
  css`${ring} .5s linear infinite`
}

const sharedSpinnerSettings = {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  left: 0,
  right: 0,
  top: 0
}

const loadingStyles = loading => loading ? { display: 'flex' } : {}
const hiddenStyles = hidden => hidden ? { display: 'none' } : {}
const positionStyles = position => {
  if (position === 'inline') return { display: 'inline-flex' }
  if (position === 'fixed') {
    return {
      ...sharedSpinnerSettings,
      position: 'fixed',
      zIndex: zLayers['spinner-fixed']
    }
  }
  if (position === 'absolute') {
    return {
        ...sharedSpinnerSettings,
        position: 'absolute',
        zIndex: zLayers['spinner-absolute']
      }
  }
}

const styles = ({ backgroundColor, color, hidden, loading, position, size }) => {
  return {
    backgroundColor: backgroundColor || colors.white,
    display: 'none',

    ...loadingStyles(loading),
    ...positionStyles(position),
    ...hiddenStyles(!loading),

    '.spinner-dots': {
      animation: `${dotsRotateAnimation}`,
      height: `${size || 40}px`,
      position: 'relative',
      width: `${size || 40}px`,

      '.dot1, .dot2': {
        animation: `${dotsBounceAnimation}`,
        backgroundColor: color || colors.primary_1,
        borderRadius: '100%',
        display: 'inline-block',
        height: '60%',
        position: 'absolute',
        top: 0,
        width: '60%'
      },
      '.dot2': {
        animationDelay: '-1.0s',
        backgroundColor: color || colors.danger,
        bottom: 0,
        top: 'auto'
      }
    },

    '.spinner-bounce': {
      '.bounce1, .bounce2, .bounce3': {
        animation: `${bounceDelayAnimation}`,
        backgroundColor: color || colors.neutral_4,
        borderRadius: '100%',
        display: 'inline-block',
        height: `${size || 12}px`,
        marginRight: '3px',
        width: `${size || 12}px`
      },
      '.bounce1': {
        animationDelay: '-0.32s'
      },
      '.bounce2': {
        animationDelay: '-0.16s'
      },
      '.bounce3': {
        marginRight: 0
      }
    },

    '.spinner-circular': {
      display: 'inline-block',
      position: 'relative',
      width: `${size || 16}px`,
      height: `${size || 16}px`,
      '.sc-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        verticalAlign: 'middle'
      },
      '.sc-inner-animation': {
        animation: `${ringAnimation}`
      },
      '.sc-inner svg': {
        display: 'block'
      },
      '.sc-inner path': {
        fillOpacity: '0'
      },
      '.sc-inner-head': {
        transformOrigin: 'center',
        transition: 'stroke-dashoffset .2s cubic-bezier(.4, 1, .75, .9)',
        stroke: `${color || colors.neutral_4}`,
        strokeLinecap: 'round'
      },
      '.sc-inner-track': {
        stroke: 'rgba(92, 112, 128, .2)'
      }
    }
  }
}

export default styles
