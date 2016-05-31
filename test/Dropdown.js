import React from 'react'
import { shallow, mount } from 'enzyme'
import Dropdown from '../src/components/Dropdown'

describe('Dropdown', () => {
  let wrapper, trigger;

  it('should display a dropdown', () => {
    wrapper = shallow(<Dropdown trigger='Test' optClass='test'>This is a test.</Dropdown>);

    expect(wrapper.props().trigger).to.equal('Test');
    expect(wrapper.props().isOpened).to.be.false;
    expect(wrapper.childAt(0).text()).to.equal('This is a test.');
  });


  it('should open when clicked', () => {
    wrapper = mount(<Dropdown trigger='Test'>This is a test.</Dropdown>);
    trigger = wrapper.childAt(0);
    expect(trigger.hasClass('trigger')).to.equal(true);
    trigger.simulate('click');
    console.log(wrapper.debug());
  });

});
