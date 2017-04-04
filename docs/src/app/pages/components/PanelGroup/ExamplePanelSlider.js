import React from 'react'
import {PanelSlider, Panel, PanelContent} from 'react-ions/lib/PanelGroup'
import Button from 'react-ions/lib/Button'
import style from './style.scss'

class ExamplePanelSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    content: {
      firstPanel: 'First PanelContent block here',
      secondPanel: 'Second PanelContent block here',
      thirdPanel: 'Third PanelContent block here'
    }
  }

  render() {
    return (
      <PanelSlider activePanel={1}>
        <Panel>
          <PanelContent>
            <p>{this.state.content.firstPanel}</p>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelContent>
            <p>{this.state.content.secondPanel}</p>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelContent>
            <p>{this.state.content.thirdPanel}</p>
          </PanelContent>
        </Panel>
      </PanelSlider>
    )
  }
}

export default ExamplePanelSlider
