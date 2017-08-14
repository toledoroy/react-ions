import React from 'react'
import Popover from 'react-ions/lib/components/Popover'
import Button from 'react-ions/lib/components/Button'

class ExamplePopover extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: false
  }

  togglePopover = () => {
    this.setState({ showing: !this.state.showing })
  }

  getPopoverContent = () => {
    return (
      <div>
        <h1>Popover Title</h1>
        <p>Popover content.</p>
        <Button onClick={this.togglePopover}>Close</Button>
      </div>
    )
  }

  render = () => {
    return(
      <div style={{ display: 'inline-block' }}>
        <Popover showing={this.state.showing} content={this.getPopoverContent()} onRequestClose={this.togglePopover}>
          <Button onClick={this.togglePopover}>{ this.state.showing ? 'Close' : 'Open' } popover</Button>
        </Popover>
      </div>
    )
  }
}

export default ExamplePopover
