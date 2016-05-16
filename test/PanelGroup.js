import React from 'react';
import { shallow } from 'enzyme';
import {PanelGroup, Panel, PanelHeader, PanelContent} from '../src/components/PanelGroup'

describe('PanelGroup', () => {
  let panelGroup, panel;

  it('should shallow render itself', () => {
    panelGroup = shallow(<PanelGroup />);
    expect(panelGroup.find('div')).to.have.length(1);
    expect(panelGroup.hasClass('panel-group')).to.equal(true);
  });

  it('should render with an optional CSS class', () => {
    panelGroup = shallow(<PanelGroup optClass='test' />);
    expect(panelGroup.hasClass('panel-group test')).to.equal(true);
  });

  it('should render with one panel active', () => {
    panelGroup = shallow(<PanelGroup activePanels={[0]}><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>);
    panel = panelGroup.childAt(0);
    expect(panel.props().panelIndex).to.equal(0);
    expect(panel.props().active).to.equal(true);
    expect(typeof panel.props().onPanelClick).to.equal('function');
  });

  it('should render with two panels active', () => {
    panelGroup = shallow(<PanelGroup activePanels={[0, 1]}><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' /><PanelContent>Test Content</PanelContent></Panel><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>);
    panel = panelGroup.childAt(1);
    expect(panel.props().panelIndex).to.equal(1);
    expect(panel.props().active).to.equal(true);
  });

  it('should render with no active panels', () => {
    panelGroup = shallow(<PanelGroup><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>);
    panel = panelGroup.childAt(0);
    expect(panel.props().active).to.equal(false);
  });

  it('should set the current panel to active', () => {
    panelGroup = shallow(<PanelGroup><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>);
    panel = panelGroup.childAt(0);
    panelGroup.setState(panel: {active: true})
    expect(panel.props().active).to.equal(true);
  });

});
