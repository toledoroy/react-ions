import React from 'react'
import {PanelGroup, Panel, PanelContent} from 'react-ions/lib/PanelGroup'
import Button from 'react-ions/lib/Button'
import style from './style.scss'

class ExamplePanelSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    content: {
      firstPanel: 'Just a PanelContent block here. No header.'
    }
  }

  render() {
    return (
      <div>
        <PanelGroup activePanels={[0]}>
          <Panel>
            <PanelContent>
              <p>{this.state.content.firstPanel}</p>
            </PanelContent>
          </Panel>
        </PanelGroup>
      </div>
    )
  }
}

export default ExamplePanelSlider
