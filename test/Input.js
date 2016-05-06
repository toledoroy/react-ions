import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../src/components/Input/Input';

describe('Input', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Input label='Default input' placeholder='Placeholder text' value='Initial value.' />);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.find('label').text()).to.equal('Default input');
    expect(wrapper.hasClass('input-component')).to.equal(true);
    expect(wrapper.childAt(1).props().placeholder).to.equal('Placeholder text');
    expect(wrapper.childAt(1).props().value).to.equal('Initial value.');
  });

  it('should be disabled', () => {
    const disabled = true;
    wrapper = mount(<Input label='Disabled input' value='' disabled={disabled} />);
    expect(wrapper.find('input').node.hasAttribute('disabled')).to.equal(true);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<Input label='Input with error' value='' optClass='input-error' />);
    expect(wrapper.hasClass('input-component')).to.equal(true);
    expect(wrapper.hasClass('input-error')).to.equal(true);
  });

  it('should have state set to an initial value', () => {
    wrapper = shallow(<Input label='Input with initial value' value='' />);
    wrapper.setState({ value: 'testing' });
    expect(wrapper.childAt(1).props().value).to.equal('testing');
  });

  it('should update the value onChange', () => {
    const afterChange = {target: {value: 'New value'}};
    wrapper = mount(<Input value='test' />);
    expect(wrapper.childAt(0).props().value).to.equal('test');
    wrapper.childAt(0).simulate('change', afterChange);
    expect(wrapper.childAt(0).props().value).to.equal('New value');
  });

  it('should call the onChange function', () => {
    const spy = sinon.spy();
    wrapper = mount(<Input value='test' onChange={spy} />);
    expect(typeof wrapper.childAt(0).props().onChange).to.equal('function');
    wrapper.childAt(0).simulate('change');
    expect(spy.calledOnce).to.be.true;
  });

  it('should run onBlur callback on blur', () => {
    const spy = sinon.spy();
    wrapper = mount(<Input value='test' onBlur={spy} />);
    expect(typeof wrapper.childAt(0).props().onBlur).to.equal('function');
    wrapper.childAt(0).simulate('blur');
    expect(spy.calledOnce).to.be.true;
  });

  it('should run onFocus callback on focus', () => {
    const spy = sinon.spy();
    wrapper = mount(<Input value='test' onFocus={spy} />);
    expect(typeof wrapper.childAt(0).props().onFocus).to.equal('function');
    wrapper.childAt(0).simulate('focus');
    expect(spy.calledOnce).to.be.true;
  });

});
