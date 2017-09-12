import React from 'react'
import Button from 'react-ions/lib/components/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background-color: palevioletred;
  color: papayawhip;
  &:hover {
    background-color: papayawhip;
    color: palevioletred;
  }
`

const ExampleButtonDefault = () => (
  <StyledButton>I am a StyledButton</StyledButton>
)

export default ExampleButtonDefault
