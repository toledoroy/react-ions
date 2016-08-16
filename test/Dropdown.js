import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount } from 'enzyme'
import Input from '../src/components/Input'
import Dropdown from '../src/components/Dropdown'

describe('Dropdown', () => {
  let wrapper, trigger;

  it('should display a dropdown', () => {
    wrapper = shallow(<Dropdown trigger='Test'>This is a test.</Dropdown>);

    expect(wrapper.props().trigger).to.equal('Test');
    expect(wrapper.props().isOpened).to.be.false;
    expect(wrapper.childAt(0).text()).to.equal('This is a test.');
    expect(wrapper.childAt(1).childAt(0).hasClass('list-wrapper')).to.equal(false)
  });

  it('should open when clicked', () => {
    wrapper = mount(<Dropdown trigger='Test'>This is a test.</Dropdown>);
    trigger = wrapper.childAt(0);
    expect(trigger.hasClass('trigger')).to.equal(true);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true);
    trigger.simulate('click');
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true);
    expect(wrapper.find('.dropdown-component').hasClass('is-opened')).to.equal(true);
  });

  it('should be opened by default', () => {
    wrapper = mount(<Dropdown isOpened={true} trigger='Test'>This is a test.</Dropdown>);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true);
    expect(wrapper.find('.dropdown-component').hasClass('is-opened')).to.equal(true);
   });

  it('should take an optional CSS class', () => {
    wrapper = mount(<Dropdown optClass='test' trigger='Test'>This is a test.</Dropdown>);
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true);
    expect(wrapper.find('.dropdown-component').hasClass('test')).to.equal(true);
  });

  it('displays a modified state upon changing props', function () {
    var TestParent = React.createFactory(React.createClass({
      getInitialState() {
        return {isOpened: false};
      },
      render() {
        return <Dropdown ref='dropdown' trigger='Test' isOpened={this.state.isOpened}>This is a test.</Dropdown>
      }
    }));

    var parent = TestUtils.renderIntoDocument(TestParent());
    expect(parent.refs.dropdown.props.isOpened).to.be.false;

    parent.setState({
      isOpened: true
    });

    expect(parent.refs.dropdown.props.isOpened).to.be.true;
  });

  it('should call changeCallback function', () => {
    const spy = sinon.spy();
    wrapper = mount(<Dropdown optClass='test' trigger='Test' changeCallback={spy}>This is a test.</Dropdown>);
    trigger = wrapper.childAt(0);

    trigger.simulate('click');

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(true)).to.be.true;
  });

  it('should display list', () => {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ]

    wrapper = mount(<Dropdown optClass='test' listItems={listItems}>This is a test.</Dropdown>);
    expect(wrapper.childAt(1).childAt(0).hasClass('list-wrapper')).to.equal(true)
    expect(wrapper.childAt(1).childAt(0).find('li').length).to.equal(3)
  })

});
