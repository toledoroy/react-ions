import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from '../src/components/Input/Input'

describe('Input', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<Input label='Default input' placeholder='Placeholder text' value='Initial value.' />)
    expect(wrapper.find('input')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.find('label').text()).to.equal('Default input')
    expect(wrapper.hasClass('input-component')).to.equal(true)
    expect(wrapper.childAt(1).props().placeholder).to.equal('Placeholder text')
    expect(wrapper.childAt(1).props().value).to.equal('Initial value.')
  })

  it('should be disabled', () => {
    const disabled = true
    wrapper = mount(<Input label='Disabled input' value='' disabled={disabled} />)
    expect(wrapper.find('input').node.hasAttribute('disabled')).to.equal(true)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Input label='Input with error' value='' optClass='input-error' />)
    expect(wrapper.hasClass('input-component')).to.equal(true)
    expect(wrapper.hasClass('input-error')).to.equal(true)
  })

  it('should have state set to an initial value', () => {
    wrapper = shallow(<Input label='Input with initial value' value='' />)
    wrapper.setState({ value: 'testing' })
    expect(wrapper.childAt(1).props().value).to.equal('testing')
  })

  it('should update the value onChange', () => {
    const afterChange = {target: {value: 'New value'}}
    wrapper = mount(<Input value='test' />)
    expect(wrapper.childAt(0).props().value).to.equal('test')
    wrapper.childAt(0).simulate('change', afterChange)
    expect(wrapper.childAt(0).props().value).to.equal('New value')
  })

  it('should run the changeCallback on change', () => {
    const spy = sinon.spy()
    wrapper = mount(<Input value='test' changeCallback={spy} />)
    expect(typeof wrapper.childAt(0).props().changeCallback).to.equal('function')
    wrapper.childAt(0).simulate('change')
    expect(spy.calledOnce).to.be.true
  })

  it('should run the blurCallback on blur', () => {
    const spy = sinon.spy()
    wrapper = mount(<Input value='test' blurCallback={spy} />)
    expect(typeof wrapper.childAt(0).props().blurCallback).to.equal('function')
    wrapper.childAt(0).simulate('blur')
    expect(spy.calledOnce).to.be.true
  })

  it('should run the focusCallback on focus', () => {
    const spy = sinon.spy()
    wrapper = mount(<Input value='test' focusCallback={spy} />)
    expect(typeof wrapper.childAt(0).props().focusCallback).to.equal('function')
    wrapper.childAt(0).simulate('focus')
    expect(spy.calledOnce).to.be.true
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<Input value='test' />)
    wrapper.childAt(0).simulate('change')

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should not result in an error if blurCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<Input value='test' />)
    wrapper.childAt(0).simulate('blur')

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should not result in an error if focusCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<Input value='test' />)
    wrapper.childAt(0).simulate('focus')

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should update the state when the disabled property changes', () => {
    wrapper = mount(<Input label='Disabled input' value='' disabled={false} />)

    expect(wrapper.find('input').node.hasAttribute('disabled')).to.be.false

    wrapper.setProps({ disabled: true })
    wrapper.update()

    expect(wrapper.find('input').node.hasAttribute('disabled')).to.be.true
  })

  it('should pass value as string to changeCallback', () => {
    const spy = sinon.spy()
    wrapper = mount(<Input value='14.10' changeCallback={spy} />)
    expect(typeof wrapper.childAt(0).props().changeCallback).to.equal('function')
    wrapper.childAt(0).simulate('change', {target: { value: '19.89' }})
    expect(spy.calledOnce).to.be.true
    expect(spy.getCall(0).args[1]).to.equal('19.89')
  })

  it('should pass value as number to changeCallback', () => {
    const spy = sinon.spy()
    wrapper = mount(<Input type='number' value={14.10} changeCallback={spy} />)
    expect(typeof wrapper.childAt(0).props().changeCallback).to.equal('function')
    wrapper.childAt(0).simulate('change', {target: { value: '19.89', valueAsNumber: 19.89 }})
    expect(spy.calledOnce).to.be.true
    expect(spy.getCall(0).args[1]).to.equal(19.89)
  })
})
