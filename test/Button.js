import React from 'react'
import { Link } from 'react-router'
import Button from '../src/components/Button/Button'
import ButtonAnchor from '../src/components/Button/ButtonAnchor'
import ButtonConfirmation from '../src/components/Button/ButtonConfirmation'

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
})

describe('ButtonConfirmation', () => {
  let wrapper

  it('displays confirmation button without prompt', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)

    expect(wrapper.childAt(0).prop('className')).to.equal('confirmation-wrapper')
    expect(wrapper.childAt(0).children()).to.have.length(2)
  })

  it.skip('displays confirmation button with prompt', () => {
    // Do we really need to test copy here?
    wrapper = mount(<ButtonConfirmation prompt={'Are you a robot?'}>Robot?</ButtonConfirmation>)

    expect(wrapper.childAt(0).props().children.prompt).to.equal('Are you a robot?')
    expect(wrapper.childAt(0).props().children.children).to.equal('Robot?')
  })

  it('handles opening and closing on the confirmation button', () => {
    wrapper = mount(<ButtonConfirmation hasBeenOpened={true}>Delete</ButtonConfirmation>)

    let inst = wrapper.instance()

    inst.handleOpen()
    expect(wrapper.state().confirmationOverlayOpen).to.be.true

    inst.handleOpen()
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
  })

  it('handles confirmation on the confirmation button', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOpen: true})
    let inst = wrapper.instance()

    inst.handleConfirmation()
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
  })

  it('get styles on the confirmation button when position not passed', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({
      overlayWidth: 20,
      triggerWidth: 10
    })
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({left: '-5px'})
  })

  it('get styles on the confirmation button when position right', () => {
    wrapper = mount(<ButtonConfirmation position={'right'}>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOffset: 40})
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({right: '40px'})
  })

  it('get styles on the confirmation button when position left', () => {
    wrapper = mount(<ButtonConfirmation position={'left'}>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOffset: 40})
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({left: '40px'})
  })

  it('get caret styles on the confirmation button when position not passed and is not wide', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({ wide: false })
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: '75px'})
  })

  it('get caret styles on the confirmation button when position not passed and is wide', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({ wide: true })
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: '95px'})
  })

  it('get caret styles on the confirmation button when position right', () => {
    wrapper = mount(<ButtonConfirmation position={'right'}>Delete</ButtonConfirmation>)
    wrapper.setState({triggerWidth: 40})
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({right: 'calc(27.5px)'})
  })

  it('get caret styles on the confirmation button when position left', () => {
    wrapper = mount(<ButtonConfirmation position={'left'}>Delete</ButtonConfirmation>)
    wrapper.setState({triggerWidth: 40})
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: 'calc(15px)'})
  })

  it('handles collapse with confirmation button', () => {
    wrapper = mount(<ButtonConfirmation collapse={true}>Delete</ButtonConfirmation>)

    expect(wrapper.childAt(0).childAt(0).prop('collapse')).to.be.true
  })

  it('handles setup on the confirmation button', () => {
    wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.instance()._trigger = {
      children: [{
        getBoundingClientRect: () => {
          return {
            width: 40
          }
        }
      }],
      querySelector: () => {
        return {
          getBoundingClientRect: () => {
            return {
              width: 40
            }
          }
        }
      }
    }

    let inst = wrapper.instance()

    inst.handleSetup()
    expect(wrapper.state().triggerWidth).to.equal(40)
    expect(wrapper.state().overlayWidth).to.equal(40)
  })

  it('handles wide on the confirmation button', () => {
    wrapper = mount(<ButtonConfirmation prompt={'This is a test.'}>Delete</ButtonConfirmation>)

    let inst = wrapper.instance()

    inst.handleWide()
    expect(wrapper.state().wide).to.be.false

    wrapper.setProps({ prompt: 'This is a test that will make it wide' })
    wrapper.update()

    // mocking handleSetup because it was already tested and requires a decent setup
    inst.handleSetup = sinon.spy()

    inst.handleWide()
    expect(wrapper.state().wide).to.be.true
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
