import React from 'react';
import { shallow, mount } from 'enzyme';
import InlineEdit from '../src/components/InlineEdit/InlineEdit';
import Icon from '../src/components/Icon/Icon';

describe('InlineEdit', () => {
  it('should render a span and buttons', () => {
    const wrapper = shallow(<InlineEdit name='test' value='test value' isEditing={true} />)
    expect(wrapper.hasClass('readonly')).to.be.false
    expect(wrapper.find('.readonly-icon')).to.have.length(0)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find('span').at(0).hasClass('inline-text-wrapper')).to.be.true
    expect(wrapper.find(Icon)).to.have.length(2)
    expect(wrapper.find('.inline-button-wrapper').at(0).childAt(0).hasClass('save-button')).to.be.true
    expect(wrapper.find('.inline-button-wrapper').at(0).childAt(1).hasClass('cancel-button')).to.be.true
  })

  it('should not render buttons', () => {
    const wrapper = shallow(<InlineEdit name='test' value='test value' />)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(0)
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={spy} value='testValue' />)
    const trigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    trigger.simulate('click')

    expect(spy.calledWithExactly('test', 'testValue')).to.be.true
  })

  it('should prefill blank text', () => {
    const wrapper = mount(<InlineEdit name='test' value='' isEditing={true} />)

    expect(wrapper.childAt(0).text()).to.equal('Click to edit')
  })

  it('should be readonly', () => {
    const spy = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' changeCallback={spy} value='test value' readonly />)
    const editTrigger = wrapper.childAt(0)

    expect(wrapper.find('.readonly')).to.have.length(1)
    expect(wrapper.find('.readonly-icon')).to.have.length(1)

    editTrigger.simulate('click')

    expect(spy.called).to.be.false
  })

  it('should have a loader', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' />)

    expect(wrapper.find('Spinner').at(0).props().loading).to.be.false

    wrapper.setProps({ loading: true })

    expect(wrapper.find('Spinner').at(0).props().loading).to.be.true
  })

  it('should have an error', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' />)

    expect(wrapper.state().error).to.equal('')

    wrapper.setProps({ error: 'This is an error' })

    expect(wrapper.find('.error')).to.have.length(1)
    expect(wrapper.state().error).to.equal('This is an error')
    expect(wrapper.find('.error-text')).to.have.length(1)
    expect(wrapper.find('.error-text').at(0).text()).to.equal('This is an error')
  })
})
