import React from 'react';
import { shallow, mount } from 'enzyme';
import Radio from '../src/components/Radio/Radio';

describe('Radio', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Radio value="test" label="Test label"></Radio>);

    expect(wrapper.find('div')).to.have.length(3);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);

    expect(wrapper.hasClass('radio-component')).to.equal(true);
    expect(wrapper.childAt(1).childAt(0).hasClass('radio-input')).to.equal(true);
    expect(wrapper.childAt(1).childAt(1).hasClass('label-right')).to.equal(true);
  });

  it('should not have a label', () => {
    wrapper = shallow(<Radio value="test"></Radio>);

    expect(wrapper.find('label')).to.have.length(0);
  });

  it('should be disabled', () => {
    wrapper = shallow(<Radio value="test" label="Test label" disabled></Radio>);
    expect(wrapper.hasClass('radio-component')).to.equal(true);
    expect(wrapper.hasClass('radio-disabled')).to.equal(true);

    wrapper = mount(<Radio value="test" label="Test label" disabled></Radio>);
    expect(wrapper.find('input').node.hasAttribute('disabled')).to.equal(true);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<Radio value="test" label="Test label" optClass="radio-error"></Radio>);

    expect(wrapper.hasClass('radio-component')).to.equal(true);
    expect(wrapper.hasClass('radio-error')).to.equal(true);
  });

  it('should have the label on the left side', () => {
    wrapper = shallow(<Radio value="test" label="Test label" labelPosition="left"></Radio>);

    expect(wrapper.hasClass('radio-component'));
    expect(wrapper.childAt(1).childAt(0).hasClass('label-left')).to.equal(true);
    expect(wrapper.childAt(1).childAt(1).hasClass('radio-input')).to.equal(true);
  });

  it('should have a callback', () => {
    let checked = false;
    const callback = function(event, value) {
      checked = value;
    };
    wrapper = mount(<Radio value="test" label="Test label" changeCallback={callback}></Radio>);

    wrapper.find('input').simulate('change');
    expect(checked).to.be.equal('test');
  });
});
