import { css, keyframes } from 'styled-components'
import colors from '../../styles/common/colors.css'

export const alertWrapper = (type, closeable) => ({
  display: 'flex',
  padding: '7px 10px',
  borderRadius: '4px',
  backgroundColor: colors.white,
  color: colors.primary_4,
  fontSize: '13px',
  lineHeight: '1.5',
  fontWeight: 200,
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.2)',
  marginBottom: '15px',
  position: 'relative',
  overflow: 'hidden',
  
  '> svg': {
    fill: colors[type],
    marginTop: '1px',
    minWidth: '17px',

    '+ div': {
      marginLeft: '10px',
      marginRight: closeable ? '20px' : 0
    }
  },

  '&:hover .countdown-bar': {
    animationPlayState: 'paused'
  }
})

export const closeIcon = {
  cursor: 'pointer',
  height: '15px',
  margin: 0,
  position: 'absolute',
  right: '10px',
  top: '9px',

  '> svg': {
    marginTop: 0,
    fill: colors.neutral_4
  }
}

export const countdownBarWrapper = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '2px',
  margin: 0
}

export const countdownBar = (type, timeout) => css`
  animation: ${countdownAnimation(timeout/1000)};
  height: 100%;
  position: absolute;
  background-color: ${colors[type]}
`

const countdownAnimation = duration => css`
  ${countdown} ${duration}s linear 1;
`

const countdown = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`
