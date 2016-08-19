import React from 'react'
import Tooltip from 'react-conventions/lib/Tooltip'
import Button from 'react-conventions/lib/Button'

class ExampleTooltipVisible extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: true
  }

  handleVisibility = () => {
    this.state.showing ? this.setState({ showing: false }) : this.setState({ showing: true })
  }

  render() {
    return(
      <div>
        <p>Umami four dollar toast craft beer polaroid <Tooltip content="Visible tooltip" tooltipPlacement={'top'} show={this.state.showing}><a href="#">visible</a></Tooltip> tooltip.</p>
        <Button onClick={this.handleVisibility}>{this.state.showing ? 'Hide' : 'Show'} Tooltip</Button>
      </div>
    )
  }
}

export default ExampleTooltipVisible
