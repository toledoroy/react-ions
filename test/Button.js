import React from 'react'
import { Link } from 'react-router'
import Button from '../src/components/Button/Button'
import ButtonAnchor from '../src/components/Button/ButtonAnchor'

describe('Button', () => {
  let wrapper

  it('displays a button', () => {
    wrapper = shallow(<Button disabled optClass='danger' size='lg'>Test</Button>)
    expect(wrapper.props().type).to.equal('button')
    expect(wrapper.props().className).to.equal('btn lg danger')
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
    expect(wrapper.props().href).to.equal('http://www.google.com')
    expect(wrapper.props().target).to.equal('_blank')
    expect(wrapper.text()).to.equal('External')
    expect(wrapper.type()).to.equal('a')

    wrapper = shallow(<ButtonAnchor path='/components/progress-bar' internal={true}>Internal</ButtonAnchor>)
    expect(wrapper.props().to).to.equal('/components/progress-bar')
    expect(wrapper.type()).to.equal(Link)
  })

  it('hides text when collapse prop is passed', () => {
    wrapper = shallow(<Button collapse={true}>Test</Button>)
    expect(wrapper.props().className).to.contain('btn collapse')
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Button optClass="test-class" />)
    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should have extra classes', () => {
    const optClasses = ['test-class', 'test-class-2', 'test-class-3']

    wrapper = shallow(<Button size='lg' optClass={optClasses} />)
    expect(wrapper.hasClass('btn')).to.be.true
    expect(wrapper.hasClass('lg')).to.be.true
    expect(wrapper.hasClass('test-class')).to.be.true
    expect(wrapper.hasClass('test-class-2')).to.be.true
    expect(wrapper.hasClass('test-class-3')).to.be.true
  })

  it('hides text when collapse prop is passed', () => {
    wrapper = shallow(<Button collapse={true}>Test</Button>)
    expect(wrapper.props().className).to.contain('btn collapse')
  })

  describe('shouldComponentUpdate', () => {
    const props = {
      size: 'large',
      disabled: false,
      loading: false,
      collapse: false,
      optClass: 'test-class',
      onClick: () => {},
      prompt: 'Test prompt'
    }

    wrapper = mount(<ButtonConfirmation {...props}>Delete</ButtonConfirmation>)
    const state = wrapper.state()
    const shouldComponentUpdate = wrapper.instance().shouldComponentUpdate

    it('does not update when props and state have not changed', () => {
      expect(shouldComponentUpdate(props, state)).to.be.false
    })

    it('updates when loading is changed', () => {
      expect(shouldComponentUpdate({ ...props, loading: true }, state)).to.be.true
    })
    it('updates when prompt is changed', () => {
      expect(shouldComponentUpdate({ ...props, prompt: 'New prompt' }, state)).to.be.true
    })

    it('updates when confirmationOverlayOpen is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, confirmationOverlayOpen: true })).to.be.true
    })
    it('updates when triggerWidth is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, triggerWidth: 10 })).to.be.true
    })
    it('updates when overlayWidth is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, overlayWidth: 50 })).to.be.true
    })
    it('updates when wide is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, wide: true })).to.be.true
    })
  })
})
