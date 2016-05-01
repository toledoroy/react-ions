import React from 'react';
import { shallow, mount } from 'enzyme';
import Textarea from '../src/components/Textarea/Textarea';

describe('Textarea', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Textarea label='Default textarea' name='textarea' value='Initial value.' />);
    expect(wrapper.find('textarea')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.hasClass('textarea-component')).to.equal(true);
  });

  it('should be disabled', () => {
    wrapper = mount(<Textarea label='Disabled textarea' value='' disabled />);
    expect(wrapper.find('textarea').node.hasAttribute('disabled')).to.equal(true);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<Textarea label='Textarea with error' value='' optClass='textarea-error' />);
    expect(wrapper.hasClass('textarea-component')).to.equal(true);
    expect(wrapper.hasClass('textarea-error')).to.equal(true);
  });

  it('should have state set to an initial value', () => {
    wrapper = shallow(<Textarea label='Textarea with initial value' value='' />);
    wrapper.setState({ value: 'testing' });
    expect(wrapper.childAt(1).props().value).to.equal('testing');
  });

  it('should have a callback', () => {
    let value = '';
    const callback = function(event) {
      value = event.target.value;
    };
    wrapper = mount(<Textarea value='test' label='Test label' onChange={callback}></Textarea>);

    wrapper.find('textarea').simulate('change');
    expect(value).to.be.equal('test');
  });

});
