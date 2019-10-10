import React, { PureComponent } from 'react'
import Popover from 'react-ions/lib/components/Popover'
import Button from 'react-ions/lib/components/Button'
import StyledDiv from 'react-ions/lib/components/StyledDiv'
import localStyle from './style.scss'

const positions = [
  'top', 'topLeft', 'left', 'bottomLeft', 'bottom', 'bottomRight', 'right', 'topRight'
]

class ExamplePopover extends PureComponent {
  constructor(props) {
    super(props)
  }

  state = {
    showing: false,
    positionIndex: 0
  }

  togglePopover = () => {
    this.setState({ showing: !this.state.showing }, () => {
      const newPositionIndex = this.state.positionIndex < positions.length-1
        ? this.state.positionIndex + 1
        : 0

      if (!this.state.showing) this.setState({ positionIndex: newPositionIndex })
    })
  }

  getPopoverContent = () => (
    <div className={localStyle['popover-wrapper']}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
      <Button onClick={this.togglePopover} optClass={localStyle['popover-btn']}>Close</Button>
    </div>
  )

  render = () => { console.log('positionIndex', this.state.positionIndex, positions[this.state.positionIndex]); return (
    <StyledDiv css={{ display: 'flex', justifyContent: 'space-around' }}>
      <Popover
        showing={this.state.showing}
        defaultPosition={positions[this.state.positionIndex]}
        content={this.getPopoverContent()}
        maxHeight='280px'
        onRequestClose={this.togglePopover}>
        <Button onClick={this.togglePopover}>
          { this.state.showing ? 'Close' : 'Open' } Popover
        </Button>
      </Popover>
    </StyledDiv>
  )}
}

export default ExamplePopover
