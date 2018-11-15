import styled from 'styled-components'
import { object } from 'prop-types'

export const StyledDivTest = styled.div`${props => props.css}`

StyledDivTest.defaultProps = {
  css: {}
}

StyledDivTest.propTypes = {
  css: object
}

export default StyledDivTest
