import React from 'react'
import { shallow, mount } from 'enzyme'
import InlineEdit from '../src/components/InlineEdit/InlineEdit'
import Icon from '../src/components/Icon/Icon'

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
    expect(wrapper.find('.copy-icon')).to.have.length(0)
  })

  it('should not render buttons', () => {
    const wrapper = shallow(<InlineEdit name='test' value='test value' />)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(0)
  })

  it('should trigger the callback function', () => {
    const spy = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={spy} value='testValue' />)
    const trigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    wrapper.find('.inline-text-overflow-wrapper').at(0).childAt(0).node.innerHTML = 'test value'
    trigger.simulate('click')

    expect(spy.calledWithExactly({ target: { name: 'test', value: 'test value' }})).to.be.true
  })

  it('should not trigger the callback if the edit was canceled', () => {
    const changeCallback = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} value='test value' changeCallback={changeCallback} />)
    const trigger = wrapper.find('.inline-button-wrapper').at(0).childAt(1)

    trigger.simulate('click')

    expect(changeCallback.called).to.be.false
  })

  it('should not trigger the callback if the value hasn\'t changed', () => {
    const changeCallback = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} value='test value' changeCallback={changeCallback} />)
    const trigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    trigger.simulate('click')

    expect(changeCallback.called).to.be.false
  })

  it('should show the placeholder when the value is empty', () => {
    const wrapper = mount(<InlineEdit name='test' value='' />)

    expect(wrapper.childAt(0).childAt(0).text()).to.equal('Click to edit')

    wrapper.setProps({ isEditing: true })

    expect(wrapper.childAt(0).childAt(0).text()).to.equal('')
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

  it('should have a copy to clipboard icon', (done) => {
    const wrapper = mount(<InlineEdit name='test' value='test value' copyToClipboard />)

    expect(wrapper.find('.copy-icon')).to.have.length(1)
    expect(wrapper.find('.copy-icon').at(0).find('Icon')).to.have.length(1)

    wrapper.instance().handleCopy()

    expect(wrapper.find('.copy-icon').at(0).find('Icon')).to.have.length(0)
    expect(wrapper.find('.copy-icon').at(0).text()).to.equal('copied!')

    setTimeout(() => {
      expect(wrapper.find('.copy-icon').at(0).find('Icon')).to.have.length(1)
      done()
    }, 1900)
  })
})
