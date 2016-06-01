import React from 'react'
import { shallow, mount } from 'enzyme'
import Dropdown from '../src/components/Dropdown'

describe('Dropdown', () => {
  let wrapper, trigger;

  it('should display a dropdown', () => {
    wrapper = shallow(<Dropdown trigger='Test'>This is a test.</Dropdown>);

    expect(wrapper.props().trigger).to.equal('Test');
    expect(wrapper.props().isOpened).to.be.false;
    expect(wrapper.childAt(0).text()).to.equal('This is a test.');
  });

  it('should open when clicked', () => {
    wrapper = mount(<Dropdown trigger='Test'>This is a test.</Dropdown>);
    trigger = wrapper.childAt(0);
    expect(trigger.hasClass('trigger')).to.equal(true);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true);
    trigger.simulate('click');
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component is-opened')).to.equal(true);
  });

  it('should be opened by default', () => {
    wrapper = mount(<Dropdown isOpened={true} trigger='Test'>This is a test.</Dropdown>);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component is-opened')).to.equal(true);
  });

  it('should take an optional CSS class', () => {
    wrapper = mount(<Dropdown optClass='test' trigger='Test'>This is a test.</Dropdown>);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component test')).to.equal(true);
  });

  it('should open when passed props', () => {
    wrapper = shallow(<Dropdown trigger='Test'>This is a test.</Dropdown>);
    expect(wrapper.props().isOpened).to.equal(false);
    wrapper.setProps({isOpened: true});
    expect(wrapper.props().isOpened).to.equal(true);
  });
});
