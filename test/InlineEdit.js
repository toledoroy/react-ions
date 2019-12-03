import React from 'react'
import InlineEdit from '../src/components/InlineEdit/InlineEdit'
import Icon from '../src/components/Icon/Icon'

describe('InlineEdit', () => {

  // TODO: May need to refactor the component for this test to work
  // currently the component compares local state to and private value to determine whether to fire the changeCallback
  // no good way to mock _textValue since node is deprecated
  it.skip('should trigger the callback function', () => {
    const changeCallback = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={changeCallback} value='testValue' />)
    const trigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    wrapper.find('.inline-text-overflow-wrapper').at(0).childAt(0).node.innerHTML = 'test value'
    trigger.simulate('click')

    expect(changeCallback.calledWithExactly({ target: { name: 'test', value: 'test value' }})).to.be.true
  })

  it('should show the placeholder when the value is empty', () => {
    const wrapper = mount(<InlineEdit name='test' value='' />)

    expect(wrapper.find('.placeholder')).to.have.length(1)
    expect(wrapper.childAt(0).childAt(0).text()).to.equal('Click to edit')

    wrapper.setProps({ isEditing: true })

    expect(wrapper.childAt(0).childAt(0).text()).to.equal('')
  })

  it('should show the placeholder when the value is null', () => {
    const value = null
    const wrapper = mount(<InlineEdit name='test' value={value} />)

    expect(wrapper.find('.placeholder')).to.have.length(1)
    expect(wrapper.childAt(0).childAt(0).text()).to.equal('Click to edit')

    wrapper.setProps({ isEditing: true })

    expect(wrapper.childAt(0).childAt(0).text()).to.equal('')
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
    expect(wrapper.state().isEditing).to.be.true
    expect(wrapper.find('.error-text')).to.have.length(1)
    expect(wrapper.find('.error-text').at(0).text()).to.equal('This is an error')
  })

  it.skip('should revert back to the previously saved value if there is an error and the change is canceled', () => {
    const changeCallback = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={changeCallback} value='testValue' />)

    wrapper.find('.inline-text-wrapper').at(0).node.innerHTML = 'test value'

    let saveTrigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    saveTrigger.simulate('click')

    expect(wrapper.state().value).to.equal('test value')

    wrapper.setProps({ error: 'This is an error' })

    expect(wrapper.state().error).to.equal('This is an error')
    expect(wrapper.state().isEditing).to.be.true

    saveTrigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)
    saveTrigger.simulate('click')

    expect(wrapper.state().error).to.equal('This is an error')
    expect(wrapper.state().isEditing).to.be.true

    const cancelTrigger = wrapper.find('.inline-button-wrapper').at(0).childAt(1)

    cancelTrigger.simulate('click')

    expect(wrapper.state().error).to.equal('')
    expect(wrapper.state().isEditing).to.be.false
    expect(wrapper.state().value).to.equal('testValue')
  })

  it.skip('should trigger the callback function if there was an error and the change was canceled', () => {
    const changeCallback = sinon.spy()
    const wrapper = mount(<InlineEdit name='test' isEditing={true} changeCallback={changeCallback} value='testValue' />)

    wrapper.find('.inline-text-wrapper').at(0).node.innerHTML = 'test value'

    let saveTrigger = wrapper.find('.inline-button-wrapper').at(0).childAt(0)

    saveTrigger.simulate('click')

    expect(changeCallback.calledWithExactly({ target: { name: 'test', value: 'test value' }})).to.be.true

    wrapper.setProps({ error: 'This is an error' })

    expect(wrapper.state().error).to.equal('This is an error')
    expect(wrapper.state().isEditing).to.be.true

    const cancelTrigger = wrapper.find('.inline-button-wrapper').at(0).childAt(1)

    cancelTrigger.simulate('click')

    expect(changeCallback.calledWithExactly({ target: { name: 'test', value: 'testValue', canceled: true }})).to.be.true
  })

  it('should have a copy to clipboard icon', done => {
    const wrapper = mount(<InlineEdit name='test' value='test value' copyToClipboard />)

    expect(wrapper.find('.copy-icon Icon')).to.have.length(1)
    expect(wrapper.find('.copy-icon').hasClass('copied')).to.be.false

    wrapper.instance().handleCopy()
    wrapper.update()

    expect(wrapper.find('.copy-icon Icon')).to.have.length(0)
    expect(wrapper.find('.copy-icon').hasClass('copied'), 'has class "copied"').to.be.true
    expect(wrapper.find('.copy-icon').at(0).text()).to.equal('copied!')

    setTimeout(() => {
      wrapper.update()
      expect(wrapper.find('.copy-icon Icon'), 'has an icon after copying').to.have.length(1)
      expect(wrapper.find('.copy-icon').hasClass('copied'), 'doesn\'t have class "copied"').to.be.false
      done()
    }, 1900)
  })

  it('should have a tooltip', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' tooltipText='test tooltip' tooltipPlacement='top' tooltipClass='test-class' />)

    expect(wrapper.find('Tooltip')).to.have.length(1)
    expect(wrapper.find('Tooltip').props().content).to.equal('test tooltip')
    expect(wrapper.find('Tooltip').props().tooltipPlacement).to.equal('top')
    expect(wrapper.find('Tooltip').props().optClass).to.equal('test-class')
  })

  it('should attach key listeners', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' />)
    const addEventListenerSpy = sinon.spy(wrapper.instance()._textValue, 'addEventListener')

    wrapper.instance().attachKeyListeners()

    expect(addEventListenerSpy.calledWithExactly('keypress', wrapper.instance().handleKeyPress)).to.be.true
    expect(addEventListenerSpy.calledWithExactly('keyup', wrapper.instance().handleKeyUp)).to.be.true
  })

  it('should handle keyPress events', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' />)
    const saveStub = sinon.stub(wrapper.instance(), 'handleSave')

    let event = { keyCode: 13, preventDefault: sinon.spy() }

    wrapper.instance().handleKeyPress(event)

    expect(event.preventDefault.called).to.be.true
    expect(saveStub.calledOnce).to.be.true

    event = { which: 13, preventDefault: sinon.spy() }
    wrapper.instance().handleKeyPress(event)

    expect(event.preventDefault.called).to.be.true
    expect(saveStub.calledTwice).to.be.true

    event = { keyCode: 40, preventDefault: sinon.spy() }
    wrapper.instance().handleKeyPress(event)

    expect(event.preventDefault.called).to.be.false
    expect(saveStub.calledThrice).to.be.false
  })

  it('should handle keyUp events', () => {
    const wrapper = mount(<InlineEdit name='test' value='test value' />)
    const cancelStub = sinon.stub(wrapper.instance(), 'handleCancel')

    let event = { keyCode: 27, preventDefault: sinon.spy() }

    wrapper.instance().handleKeyUp(event)

    expect(event.preventDefault.called).to.be.true
    expect(cancelStub.calledOnce).to.be.true

    event = { which: 27, preventDefault: sinon.spy() }
    wrapper.instance().handleKeyUp(event)

    expect(event.preventDefault.called).to.be.true
    expect(cancelStub.calledTwice).to.be.true

    event = { keyCode: 40, preventDefault: sinon.spy() }
    wrapper.instance().handleKeyUp(event)

    expect(event.preventDefault.called).to.be.false
    expect(cancelStub.calledThrice).to.be.false
  })

})
