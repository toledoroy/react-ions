import { css, keyframes } from 'styled-components'
import colors from '../../styles/common/colors.css'
import { zLayers } from '../../styles/common/functions.css'

export const alertWrapper = (type, closable, slideIn) => css`
  display: flex;
  padding: 7px 10px;
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${colors.primary_4};
  font-size: 13px;
  line-height: 1.5;
  font-weight: 200;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;

  ${
    slideIn &&
    css`
      animation: ${slideInAnimation};
      animation-iteration-count: 1;
      max-width: 350px;
      margin-left: 15px;
    `
  }
  
  > svg {
    fill: ${colors[type]};
    margin-top: 1px;
    min-width: 17px;

    + div {
      margin-left: 10px;
      margin-right: ${closable ? '20px' : 0};
    }
  }

  &:hover .countdown-bar {
    animation-play-state: paused;
  }
`

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

export const alertSystemWrapper = slideIn => {
  if (!slideIn) return {}

  return {
    position: 'fixed',
    top: '15px',
    right: '15px',
    zIndex: zLayers.alert
  }
}

const countdown = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`

const countdownAnimation = duration => css`
  ${countdown} ${duration}s linear 1;
`

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  80% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`

const slideInAnimation = css`
  ${slideInRight} .75s ease-out;
`
