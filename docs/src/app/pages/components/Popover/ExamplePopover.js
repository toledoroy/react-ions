import React from 'react'
import Popover from 'react-ions/lib/components/Popover'
import Button from 'react-ions/lib/components/Button'
import localStyle from './style.scss'

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
      <div className={localStyle['popover-wrapper']}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Duis sit amet ex ligula. Nam sit amet leo leo. Aliquam erat volutpat. Vivamus in ipsum et felis aliquet ullamcorper.</p>
        <Button onClick={this.togglePopover} optClass={localStyle['popover-btn']}>Close</Button>
      </div>
    )
  }

  render = () => {
    return (
      <div style={{display: 'flex'}}>
        <Popover showing={this.state.showing} content={this.getPopoverContent()} onRequestClose={this.togglePopover}>
          <Button onClick={this.togglePopover}>{ this.state.showing ? 'Close' : 'Open' } default popover</Button>
        </Popover>
      </div>
    )
  }
}

export default ExamplePopover
