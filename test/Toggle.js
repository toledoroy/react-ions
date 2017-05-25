import React from 'react';
import TestUtils from 'react-addons-test-utils'
import { shallow, mount } from 'enzyme';
import Toggle from '../src/components/Toggle/Toggle';

describe('Toggle', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Toggle value={false} label='Test label' />);

    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('label')).to.have.length(1);

    expect(wrapper.hasClass('toggle-red')).to.be.false;
    expect(wrapper.hasClass('toggle-component')).to.be.true;
    expect(wrapper.childAt(1).hasClass('toggle-wrapper')).to.be.true;
    expect(wrapper.childAt(1).childAt(0).hasClass('outer')).to.be.true;
    expect(wrapper.childAt(1).childAt(1).hasClass('inner')).to.be.true;
    expect(wrapper.childAt(1).childAt(0).hasClass('on')).to.be.false;
    expect(wrapper.childAt(1).childAt(1).hasClass('on')).to.be.false;
  });

  it('should be disabled', () => {
    wrapper = shallow(<Toggle value={false} label='Test label' disabled={true} />);
    expect(wrapper.hasClass('toggle-component')).to.be.true;
    expect(wrapper.hasClass('toggle-disabled')).to.be.true;
  });

  it('should be true', () => {
    wrapper = shallow(<Toggle value={true} label='Test label' />);

    expect(wrapper.childAt(1).childAt(0).hasClass('on')).to.be.true;
    expect(wrapper.childAt(1).childAt(1).hasClass('on')).to.be.true;
  });

  it('should have an extra class', () => {
    wrapper = shallow(<Toggle optClass='toggle-red' />);

    expect(wrapper.hasClass('toggle-red')).to.be.true;
  });

  it('should call changeCallback function', () => {
    const spy = sinon.spy();

    wrapper = mount(<Toggle value={false} changeCallback={spy} />);
    wrapper.childAt(0).simulate('click');

    expect(spy.calledOnce).to.be.true;
  });

  it('should not call changeCallback function when disabled', () => {
    const spy = sinon.spy();

    wrapper = mount(<Toggle value={false} changeCallback={spy} disabled={true} />);
    wrapper.childAt(0).simulate('click');

    expect(spy.calledOnce).to.be.false;
  });

  it('should update checked value via callback', () => {
    let value = false;
    const callback = function(event) {
      value = event.target.value;
    };
    wrapper = mount(<Toggle value={false} changeCallback={callback} />);

    wrapper.childAt(0).simulate('click', {target: { value: true }});
    expect(value).to.equal(true);
  });

  it('should not result in an error if the change callback is not defined', () => {
    let value = false;
    wrapper = mount(<Toggle value={false} />);

    wrapper.childAt(0).simulate('click', {target: { value: true }});
    expect(value).to.equal(false);
  });

  it('displays a modified state upon changing props', function () {
    var TestParent = React.createFactory(React.createClass({
      getInitialState() {
        return {value: false};
      },
      render() {
        return <Toggle ref='toggle' value={this.state.value} />
      }
    }));

    var parent = TestUtils.renderIntoDocument(TestParent());
    expect(parent.refs.toggle.props.value).to.be.false;

    parent.setState({
      value: true
    });

    expect(parent.refs.toggle.props.value).to.be.true;
  });
});
