import React from 'react'
import {PanelSlider, Panel, PanelContent} from 'react-ions/lib/PanelGroup'
import Button from 'react-ions/lib/Button'
import style from './style.scss'

class ExamplePanelSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    activePanel: null
  }

  setActivePanel = (index, event) => {
    event.preventDefault()

    this.setState({
      activePanel: index
    })
  }

  render() {
    const currentlyActive = style[`custom-panel-slider-demo-slide-${this.state.activePanel + 1}`]

    return (
      <div>
        <PanelSlider activePanel={this.state.activePanel}>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>1</h1>
              <p>Bacon ipsum dolor amet sausage kielbasa pancetta turkey shankle, ball tip spare ribs meatball.</p>
            </PanelContent>
          </Panel>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>2</h1>
              <p>Pork sausage cupim beef.</p>
            </PanelContent>
          </Panel>
          <Panel>
            <PanelContent optClass={style['custom-panel-slider']}>
              <h1>3</h1>
              <p> Flank meatball andouille prosciutto spare ribs.</p>
            </PanelContent>
          </Panel>
        </PanelSlider>

        <span className={currentlyActive}>
          <a href="#" onClick={this.setActivePanel.bind(this, 0)} className={style['slide-1']}>Slide 1</a> <a href="#" onClick={this.setActivePanel.bind(this, 1)} className={style['slide-2']}>Slide 2</a> <a href="#" onClick={this.setActivePanel.bind(this, 2)} className={style['slide-3']}>Slide 3</a>
        </span>
      </div>
    )
  }
}

export default ExamplePanelSlider
