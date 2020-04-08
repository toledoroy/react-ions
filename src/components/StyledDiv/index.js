import styled from 'styled-components'
import { array, object, oneOfType } from 'prop-types'

export const StyledDiv = styled.div`${props => props.css}`

StyledDiv.defaultProps = {
  css: {}
}

StyledDiv.propTypes = {
  css: oneOfType([array, object])
}

export default StyledDiv
