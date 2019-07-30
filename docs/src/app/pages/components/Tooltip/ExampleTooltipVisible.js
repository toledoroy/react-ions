import React, { Fragment } from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'
import Button from 'react-ions/lib/components/Button'

class ExampleTooltipVisible extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: true
  }

  handleVisibility = () => {
    this.setState({ showing: !this.state.showing })
  }

  render = () => {
    const sample = 'sample text'

    return (
      <div>
        <p>Umami four dollar toast craft beer polaroid
          <Tooltip tipWrapper='tooltip-visible-by-default' content={`<Fragment><b>Description: </b>${sample}<br/><b>Description: </b>more testing<br/><b>Description: </b>and more testing</Fragment>`} show={this.state.showing}>
            <a href='#'>visible</a>
          </Tooltip>
          tooltip.
        </p>
        <Button onClick={this.handleVisibility}>{this.state.showing ? 'Hide' : 'Show'} Tooltip</Button>
      </div>
    )
  }
}

export default ExampleTooltipVisible
