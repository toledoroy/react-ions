import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../src/components/Input/Input';

describe('Input', () => {
  let wrapper;

  it('should shallow render itself', () => {
    wrapper = shallow(<Input label='Default input' name='input' value='Initial value.' />);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.hasClass('input-component')).to.equal(true);
  });

  it('should be disabled', () => {
    wrapper = mount(<Input label='Disabled input' value='' disabled />);
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
    expect(wrapper.childAt(0).text()).to.equal('test');
    wrapper.childAt(0).simulate('change', afterChange);
    expect(wrapper.childAt(0).props().value).to.be.equal('New value');
  });

});
