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
    const disabled = true;
    wrapper = mount(<Textarea label='Disabled textarea' value='' disabled={disabled} />);
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

  it('should run the changeCallback on change', () => {
    const spy = sinon.spy();
    wrapper = mount(<Textarea value='test' changeCallback={spy} />);
    expect(typeof wrapper.childAt(0).props().changeCallback).to.equal('function');
    wrapper.childAt(0).simulate('change');
    expect(spy.calledOnce).to.be.true;
  });

  it('should run the blurCallback on blur', () => {
    const spy = sinon.spy();
    wrapper = mount(<Textarea value='test' blurCallback={spy} />);
    expect(typeof wrapper.childAt(0).props().blurCallback).to.equal('function');
    wrapper.childAt(0).simulate('blur');
    expect(spy.calledOnce).to.be.true;
  });

  it('should not result in an error when blurCallback is not defined', () => {
    const spy = sinon.spy(console, 'error');
    wrapper = mount(<Textarea value='test' />);
    wrapper.childAt(0).simulate('blur');

    expect(spy.calledOnce).to.be.false;
    spy.restore();
  });

  it('should run the blurCallback on blur and update the value', () => {
    let value = 'not called';
    const callback = function() {
      value = 'called';
    }
    wrapper = mount(<Textarea value='test' blurCallback={callback} />);

    expect(value).to.equal('not called');
    wrapper.childAt(0).simulate('blur');
    expect(value).to.equal('called');
  });

  it('should not result in an error when focusCallback is not defined', () => {
    const spy = sinon.spy(console, 'error');
    wrapper = mount(<Textarea value='test' />);
    wrapper.childAt(0).simulate('focus');

    expect(spy.calledOnce).to.be.false;
    spy.restore();
  });

  it('should run the focusCallback on focus', () => {
    const spy = sinon.spy();
    wrapper = mount(<Textarea value='test' focusCallback={spy} />);
    expect(typeof wrapper.childAt(0).props().focusCallback).to.equal('function');
    wrapper.childAt(0).simulate('focus');
    expect(spy.calledOnce).to.be.true;
  });

  it('should update the state when the value property changes', () => {
    wrapper = mount(<Textarea value='test' value="Test text" />);
    expect(wrapper.childAt(0).props().value).to.equal('Test text');

    wrapper.setProps({ value: "Test change" });
    wrapper.update();

    expect(wrapper.childAt(0).props().value).to.equal('Test change');
  });
});
