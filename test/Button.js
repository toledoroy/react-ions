import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'react-router';
import Button from '../src/components/Button/Button';
import ButtonAnchor from '../src/components/Button/ButtonAnchor';

describe('Button', () => {
  let wrapper;

  it('displays a button', () => {
    wrapper = shallow(<Button disabled optClass='danger' size='lg'>Test</Button>);
    expect(wrapper.props().type).to.equal('button');
    expect(wrapper.props().className).to.equal('btn danger lg');
    expect(wrapper.props().disabled).to.equal(true);
    expect(wrapper.text()).to.equal('Test');
  });

  it('displays a button anchor', () => {
    wrapper = shallow(<ButtonAnchor path='http://www.google.com' target='_blank'>External</ButtonAnchor>);
    expect(wrapper.props().path).to.equal('http://www.google.com');
    expect(wrapper.props().target).to.equal('_blank');
    expect(wrapper.text()).to.equal('External');
    expect(wrapper.type()).to.equal('a');

    wrapper = shallow(<ButtonAnchor path='/components/progress-bar' internal={true}>Internal</ButtonAnchor>);
    expect(wrapper.props().path).to.equal('/components/progress-bar');
    expect(wrapper.props().internal).to.equal(true);
    expect(wrapper.type()).to.equal(Link);
  });
});
