import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Link } from 'react-router'
import Button from '../src/components/Button/Button'
import ButtonAnchor from '../src/components/Button/ButtonAnchor'

describe('Button', () => {
  let wrapper

  it('displays a button', () => {
    wrapper = shallow(<Button disabled optClass='danger' size='lg'>Test</Button>)
    expect(wrapper.props().type).to.equal('button')
    expect(wrapper.props().className).to.equal('btn danger lg')
    expect(wrapper.props().disabled).to.equal(true)
    expect(wrapper.text()).to.equal('Test')
  })

  it('displays a disabled button with a loader', () => {
    wrapper = shallow(<Button loading={true}>Test</Button>)
    expect(wrapper.children().length).to.be.equal(2)
    expect(wrapper.childAt(0).html()).to.be.equal('<div class="loader"></div>')
    expect(wrapper.childAt(1).html()).to.be.equal('<em>Test</em>')
    expect(wrapper.is('[disabled]')).to.be.equal(true)

    wrapper.setProps({loading: false})

    expect(wrapper.children().length).to.be.equal(1)
    expect(wrapper.childAt(0).html()).to.be.equal('<em>Test</em>')
  })

  it('displays a button anchor', () => {
    wrapper = shallow(<ButtonAnchor path='http://www.google.com' target='_blank'>External</ButtonAnchor>)
    expect(wrapper.props().path).to.equal('http://www.google.com')
    expect(wrapper.props().target).to.equal('_blank')
    expect(wrapper.text()).to.equal('External')
    expect(wrapper.type()).to.equal('a')

    wrapper = shallow(<ButtonAnchor path='/components/progress-bar' internal={true}>Internal</ButtonAnchor>)
    expect(wrapper.props().path).to.equal('/components/progress-bar')
    expect(wrapper.props().internal).to.equal(true)
    expect(wrapper.type()).to.equal(Link)
  })

  it('hides text when collapse prop is passed', () => {
    wrapper = shallow(<Button collapse={true}>Test</Button>)
    expect(wrapper.props().collapse).to.equal(true)
    expect(wrapper.props().className).to.equal('btn collapse')
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Button optClass="test-class" />)
    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should have extra classes', () => {
    const optClasses = {
      'test-class': 'test-class-45554',
      'test-class-2': 'test-class-hdh8',
      'test-class-3': 'test-class-um6a'
    }
    wrapper = shallow(<Button optClass={optClasses} />)
    expect(wrapper.hasClass('test-class')).to.be.true
    expect(wrapper.hasClass('test-class-2')).to.be.true
    expect(wrapper.hasClass('test-class-3')).to.be.true
  })
})
