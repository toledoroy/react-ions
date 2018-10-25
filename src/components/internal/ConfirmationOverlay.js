import React from 'react'
import PropTypes from 'prop-types'
import optclass from './OptClass'
import Button from '../Button'
import colors from '../internal/colors'

const ConfirmationOverlay = ({ prompt, handleConfirmation }) => {
  const getTextStyle = () => {
    return {
      fontSize: '14px',
      fontWeight: '600',
      color: colors.primary4,
      margin: '8px 8px 24px 8px',
      display: 'block'
    }
  }

  const getButtonStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }

  return (
    <div>
      <span style={getTextStyle()}>{prompt || 'Are you sure?'}</span>
      <div style={getButtonStyle()}>
        <Button onClick={handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
        <Button onClick={handleConfirmation.bind(this, true)}>Yes</Button>
      </div>
    </div>
  )
}

ConfirmationOverlay.propTypes = {
  prompt: PropTypes.string,
  handleConfirmation: PropTypes.func.isRequired
}

export default ConfirmationOverlay
