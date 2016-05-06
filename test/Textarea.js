import React from 'react';
import { shallow, mount } from 'enzyme';
import Textarea from '../src/components/Textarea/Textarea';

describe('Textarea', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Textarea label='Default textarea' placeholder='Placeholder text' value='Initial value.' />);
    expect(wrapper.find('textarea')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.hasClass('textarea-component')).to.equal(true);
    expect(wrapper.childAt(1).props().placeholder).to.equal('Placeholder text');
    expect(wrapper.childAt(1).props().value).to.equal('Initial value.');
  });

  it('should be disabled', () => {
    wrapper = mount(<Textarea label='Disabled textarea' value='' disabled='disabled' />);
    expect(wrapper.find('textarea').node.hasAttribute('disabled')).to.equal(true);
  });

  it('should have an disabled class', () => {
    wrapper = shallow(<Textarea disabled />);
    expect(wrapper.hasClass('textarea-disabled')).to.equal(true);
  });

  it('should not have a label', () => {
    wrapper = shallow(<Textarea value='' />);
    expect(wrapper.find('label')).to.have.length(0);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<Textarea label='Textarea with error' value='' optClass='textarea-error' />);
    expect(wrapper.hasClass('textarea-component')).to.equal(true);
    expect(wrapper.hasClass('textarea-error')).to.equal(true);
  });

  it('should update the value onChange', () => {
    const afterChange = {target: {value: 'New value'}};
    wrapper = mount(<Textarea value='test' />);
    expect(wrapper.childAt(0).props().value).to.equal('test');
    wrapper.childAt(0).simulate('change', afterChange);
    expect(wrapper.childAt(0).props().value).to.be.equal('New value');
  });

  it('should call the onChange function', () => {
    var spy = sinon.spy();
    wrapper = mount(<Textarea value='test' onChange={spy} />);
    expect(typeof wrapper.childAt(0).props().onChange).to.equal('function');
    wrapper.childAt(0).simulate('change');
    expect(spy.calledOnce).to.be.true;
  });

  it('should run onBlur callback on blur', () => {
    var spy = sinon.spy();
    wrapper = mount(<Textarea value='test' onBlur={spy} />);
    expect(typeof wrapper.childAt(0).props().onBlur).to.equal('function');
    wrapper.childAt(0).simulate('blur');
    expect(spy.calledOnce).to.be.true;
  });

  it('should run onFocus callback on focus', () => {
    var spy = sinon.spy();
    wrapper = mount(<Textarea value='test' onFocus={spy} />);
    expect(typeof wrapper.childAt(0).props().onFocus).to.equal('function');
    wrapper.childAt(0).simulate('focus');
    expect(spy.calledOnce).to.be.true;
  });
});
