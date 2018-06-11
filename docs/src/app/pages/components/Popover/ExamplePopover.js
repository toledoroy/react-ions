import React from 'react'
import Popover from 'react-ions/lib/components/Popover'
import Button from 'react-ions/lib/components/Button'
import localStyle from './style.scss'

class ExamplePopover extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: {
      left: false,
      right: false,
      top: false,
      bottom: false
    }
  }

  togglePopover = key => {
    this.setState({ showing: { [key]: !this.state.showing[key] } })
  }

  getPopoverContent = () => (
    <div className={localStyle['popover-wrapper']}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
      <Button onClick={this.togglePopover} optClass={localStyle['popover-btn']}>Close</Button>
    </div>
  )

  render = () => (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Popover
        showing={this.state.showing.left}
        defaultPosition='left'
        content={this.getPopoverContent()}
        maxHeight='280px'
        onRequestClose={this.togglePopover.bind(null, 'left')}
      >
        <Button
          onClick={this.togglePopover.bind(null, 'left')}
        >
          { this.state.showing.left ? 'Close' : 'Open' } Left popover
        </Button>
      </Popover>

      <Popover
        showing={this.state.showing.right}
        defaultPosition='right'
        content={this.getPopoverContent()}
        maxHeight='280px'
        onRequestClose={this.togglePopover.bind(null, 'right')}
      >
        <Button
          onClick={this.togglePopover.bind(null, 'right')}
        >
          { this.state.showing.right ? 'Close' : 'Open' } Right popover
        </Button>
      </Popover>

      <Popover
        showing={this.state.showing.top}
        defaultPosition='top'
        maxHeight='280px'
        content={this.getPopoverContent()}
        onRequestClose={this.togglePopover.bind(null, 'top')}
      >
        <Button
          onClick={this.togglePopover.bind(null, 'top')}
        >
          { this.state.showing.top ? 'Close' : 'Open' } Top popover
        </Button>
      </Popover>

      <Popover
        showing={this.state.showing.bottom}
        defaultPosition='bottom'
        maxHeight='280px'
        content={this.getPopoverContent()}
        onRequestClose={this.togglePopover.bind(null, 'bottom')}
      >
        <Button
          onClick={this.togglePopover.bind(null, 'bottom')}
        >
          { this.state.showing.bottom ? 'Close' : 'Open' } Bottom popover
        </Button>
      </Popover>
    </div>
  )
}

export default ExamplePopover
