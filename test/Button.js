import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../src/components/Button/Button';

describe('Button', () => {
  let wrapper;

  it('displays a button', () => {
    wrapper = shallow(<Button disabled optClass='danger' size='lg'>Test</Button>);
    expect(wrapper.props().type).to.equal('button');
    expect(wrapper.props().className).to.equal('btn danger lg');
    expect(wrapper.props().disabled).to.equal(true);
    expect(wrapper.text()).to.equal('Test');
  });
});
