import React from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'

class ExampleTooltipCallbacks extends React.Component {
  constructor(props) {
    super(props)
  }

  handleVisibility = () => {
    this.setState({ showing: !this.state.showing })
  }

  render = () => {
    return(
      <p>Umami four dollar toast craft beer polaroid
        <Tooltip content='Tooltip with callbacks' />
          <a href='#'>tooltip link</a>
        </Tooltip>
      </p>
    )
  }
}

export default ExampleTooltipCallbacks
