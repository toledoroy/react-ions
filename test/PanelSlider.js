import React from 'react'
import { shallow, mount } from 'enzyme'
import {PanelSlider, Panel, PanelContent} from '../src/components/PanelGroup'

describe('PanelSlider', () => {
  let panelSlider, panel

  it('should shallow render itself', () => {
    panelSlider = shallow(<PanelSlider />)

    expect(panelSlider.find('div')).to.have.length(4)
    expect(panelSlider.hasClass('panel-slider')).to.equal(true)
  })

  it('should render with an optional CSS class', () => {
    panelSlider = shallow(<PanelSlider optClass='test' />)
    expect(panelSlider.hasClass('panel-slider test')).to.equal(true)
  })

  it('should render with one panel active', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    panel = panelSlider.childAt(0).childAt(0).childAt(0).childAt(0)

    expect(panel.props().panelIndex).to.equal(0)
  })

  it('should not render if specified props and state do not change', () => {
    let nextProps = {
      activePanel: 1
    }
    let nextState = {
      panels: [
        {active: false}, {active: true}
      ]
    }

    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    expect(panelSlider.instance().shouldComponentUpdate(nextProps, nextState)).to.be.true

    panelSlider = shallow(<PanelSlider activePanel={1}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    expect(panelSlider.instance().shouldComponentUpdate(nextProps, nextState)).to.be.false
  })

  it('should return a transform value', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    expect(panelSlider.instance().getStyle(1)).to.deep.equal({
      'transform': `translateX(-100%)`
    })
  })

  it('should set an active panel in-state', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    panelSlider.instance().activatePanel(1)

    expect(panelSlider.state().panels).to.deep.equal([{active: false},{active: true}])
  })
})
