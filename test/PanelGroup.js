import React from 'react';
import { shallow, mount } from 'enzyme';
import PanelGroup from '../src/components/PanelGroup'

describe('PanelGroup', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<PanelGroup />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.hasClass('panel-group')).to.equal(true);
  });

  it('should render with an optional CSS class', () => {
    wrapper = shallow(<PanelGroup optClass='test' />);
    expect(wrapper.hasClass('panel-group test')).to.equal(true);
  });
});
