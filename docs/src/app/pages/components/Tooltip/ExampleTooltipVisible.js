import React from 'react'
import Tooltip from 'react-conventions/lib/Tooltip'

const ExampleTooltipVisible = () => (
  <p>Umami four dollar toast craft beer polaroid <Tooltip content="Visible tooltip" tooltipPlacement={'top'} show={true}><a href="#">visible</a></Tooltip> tooltip.</p>
)

export default ExampleTooltipVisible
