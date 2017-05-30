import React from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'

const ExampleTooltipBody = () => (
  <p>Umami four dollar toast craft beer polaroid <Tooltip appendToBody={true} content="Testing the right tooltip" tooltipPlacement={'right'}><a href="#">right</a></Tooltip> tooltip, synth keytar echo park whatever sustainable <Tooltip appendToBody={true} content="Testing the left tooltip" tooltipPlacement={'left'}><a href="#">left</a></Tooltip> tooltip. Poutine cardigan gentrify, tumblr meggings <Tooltip appendToBody={true} content="Testing the bottom tooltip" tooltipPlacement={'bottom'}><a href="#">bottom</a></Tooltip> tooltip sriracha brunch offal plaid beard. Cronut cliche cred pabst <Tooltip appendToBody={true} content="Testing the top tooltip"><a href="#">top</a></Tooltip> tooltip.</p>
)

export default ExampleTooltipBody
