import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { shallow } from 'enzyme'
import Toggle from '../src/components/Toggle/Toggle'

describe('Toggle', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<Toggle value={false} label='Test label' />)

    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.find('label')).to.have.length(1)

    expect(wrapper.hasClass('toggle-red')).to.be.false
    expect(wrapper.hasClass('toggle-component')).to.be.true
    expect(wrapper.childAt(1).hasClass('toggle-wrapper')).to.be.true
    expect(wrapper.childAt(1).childAt(0).hasClass('outer')).to.be.true
    expect(wrapper.childAt(1).childAt(1).hasClass('inner')).to.be.true
    expect(wrapper.childAt(1).childAt(0).hasClass('on')).to.be.false
    expect(wrapper.childAt(1).childAt(1).hasClass('on')).to.be.false
  })

  it('should be disabled', () => {
    wrapper = shallow(<Toggle value={false} label='Test label' disabled={true} />)
    expect(wrapper.hasClass('toggle-component')).to.be.true
    expect(wrapper.hasClass('toggle-disabled')).to.be.true
  })

  it('should be true', () => {
    wrapper = shallow(<Toggle value={true} label='Test label' />)

    expect(wrapper.childAt(1).childAt(0).hasClass('on')).to.be.true
    expect(wrapper.childAt(1).childAt(1).hasClass('on')).to.be.true
  })

  it('should have an extra class for optClass', () => {
    wrapper = shallow(<Toggle optClass='toggle-red' />)

    expect(wrapper.hasClass('toggle-red')).to.be.true
  })

  it('should have an extra class for text', () => {
    wrapper = shallow(<Toggle hasText={true} />)

    expect(wrapper.hasClass('has-text')).to.be.true
  })

  it('should call changeCallback function', () => {
    const changeCallbackSpy = sinon.spy()

    wrapper = shallow(<Toggle value={false} changeCallback={changeCallbackSpy} name='toggle_name' />)
    wrapper.instance().handleChange()

    expect(changeCallbackSpy.calledOnce).to.be.true
    expect(changeCallbackSpy.calledWithExactly({ target: { name: 'toggle_name', value: true } })).to.be.true
  })

  it('should not call changeCallback function when disabled', () => {
    const changeCallbackSpy = sinon.spy()

    wrapper = shallow(<Toggle value={false} changeCallback={changeCallbackSpy} disabled={true} />)
    wrapper.instance().handleChange()

    expect(wrapper.state().value).to.be.false
    expect(changeCallbackSpy.calledOnce).to.be.false
  })

  it('should update checked value via callback', () => {
    let value = false
    const callback = function(event) {
      value = event.target.value
    }
    wrapper = shallow(<Toggle value={false} changeCallback={callback} />)
    wrapper.instance().handleChange()

    expect(value).to.equal(true)
  })

  it('should not result in an error if the change callback is not defined', () => {
    wrapper = shallow(<Toggle value={false} />)
    expect(wrapper.state().value).to.be.false

    wrapper.instance().handleChange()
    expect(wrapper.state().value).to.be.true
  })

  it('should update when relevant props change', () => {
    wrapper = shallow(<Toggle value={false} />)
    const inst = wrapper.instance()
    const setStateSpy = sinon.spy(inst, 'setState')

    expect(wrapper.state().value).to.be.false

    inst.componentWillReceiveProps({ value: false })
    expect(wrapper.state().value).to.be.false
    expect(setStateSpy.called).to.be.false

    inst.componentWillReceiveProps({ value: true })
    expect(wrapper.state().value).to.be.true
    expect(setStateSpy.calledOnce).to.be.true
  })
})
