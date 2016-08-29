import React from 'react';
import { shallow, mount } from 'enzyme';
import InlineEdit from '../src/components/InlineEdit/InlineEdit';
import Icon from '../src/components/Icon/Icon';

describe('InlineEdit', () => {
  it('should render a span and buttons', () => {
    const wrapper = shallow(<InlineEdit name='test' value='test value' isEditing={true} />)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(2)
  })

  it('should not render buttons', () => {
    const wrapper = shallow(<InlineEdit name='test' value='test value' />)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(0)
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={spy} value='test' />)
    const trigger = wrapper.childAt(1).childAt(0)

    trigger.simulate('click')

    expect(spy.calledOnce).to.be.true
  })

  it('should prefill blank text', () => {
    const wrapper = mount(<InlineEdit name='test' value='' isEditing={true} />)

    expect(wrapper.childAt(0).text()).to.equal('Click to edit')
  })
})
