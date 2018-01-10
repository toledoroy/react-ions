import React from 'react'
import Spinner from '../src/components/Spinner/Spinner'

describe('Spinner', () => {
  let wrapper

  it('displays a dots spinner', () => {
    wrapper = shallow(<Spinner type='spinner-dots' />)
    expect(wrapper.hasClass('spinner-wrap')).to.equal(true)
    expect(wrapper.childAt(0).hasClass('spinner-dots')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('dot1')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(1).hasClass('dot2')).to.equal(true)
  })

  it('displays a bounce spinner', () => {
    wrapper = shallow(<Spinner type='spinner-bounce' />)
    expect(wrapper.childAt(0).hasClass('spinner-bounce')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('bounce1')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(1).hasClass('bounce2')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(2).hasClass('bounce3')).to.equal(true)
  })

  it('has a loading state', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading absolute')
  })

  it('can be set to position: fixed', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' position='fixed' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading fixed')
  })

  it('can be set to position: inline', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' position='inline' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading inline')
  })

  it('can take an optClass', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' optClass='testing' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading absolute testing')
  })

  it('should have a custom color', () => {
    wrapper = mount(<Spinner loading={true} type='spinner-bounce' color='#3C97D3' />)
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).props('style').style.backgroundColor).to.equal('#3C97D3')
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(1).props('style').style.backgroundColor).to.equal('#3C97D3')
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(2).props('style').style.backgroundColor).to.equal('#3C97D3')
  })

  it('should be hidden', () => {
    wrapper = shallow(<Spinner loading={false} type='spinner-bounce' />)
    expect(wrapper.hasClass('is-hidden')).to.be.true
  })

  it('should be hidden and loading state false, even if no loading prop passed in', () => {
    wrapper = shallow(<Spinner type='spinner-bounce' />)
    expect(wrapper.state().loading).to.be.false
    expect(wrapper.hasClass('is-hidden')).to.be.true
  })

  it('should not be hidden', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' />)
    expect(wrapper.hasClass('is-hidden')).to.be.false
  })

  it('should set state when passed props', () => {
    wrapper = shallow(<Spinner loading={false} type='spinner-bounce' />)
    wrapper.setProps({loading: true})
    wrapper.update()
    expect(wrapper.hasClass('is-hidden')).to.be.false
  })

  it('should set state after a delay', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' delay={500} />)
    expect(wrapper.hasClass('loading')).to.be.false
  })

  it('should update component if state changes', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' />)
    const nextState = Object.assign({loading: false})

    expect(wrapper.instance().shouldComponentUpdate(null, nextState)).to.be.true

    wrapper.update()

    const anotherNextState = Object.assign({loading: true})
    expect(wrapper.instance().shouldComponentUpdate(null, anotherNextState)).to.be.false
  })

})
