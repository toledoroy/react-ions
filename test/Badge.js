import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Badge from '../src/components/Badge';
import Icon from '../src/components/Icon';

describe('Badge', () => {
  let wrapper;

  it('displays a button', () => {
    wrapper = shallow(<Badge icon='icon-link-1' text='Word' theme='success' />);
    expect(wrapper.props().className).to.equal('badge success padded');
    expect(wrapper.childAt(0).props().name).to.equal('icon-link-1');
    expect(wrapper.find('span').text()).to.equal('Word');
  });
});
