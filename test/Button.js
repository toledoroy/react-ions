import React from 'react'
import { shallow, mount, render } from 'enzyme'
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
    const optClasses = ['test-class', 'test-class-2', 'test-class-3']
    wrapper = shallow(<Button size='lg' optClass={optClasses} />)
    expect(wrapper.hasClass('btn')).to.be.true
    expect(wrapper.hasClass('lg')).to.be.true
    expect(wrapper.hasClass('test-class')).to.be.true
    expect(wrapper.hasClass('test-class-2')).to.be.true
    expect(wrapper.hasClass('test-class-3')).to.be.true
  })

  it('displays confirmation button without prompt', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)

    expect(wrapper.props().className).to.equal('confirmation-wrapper')
    expect(wrapper.children().length).to.be.equal(2)
    expect(wrapper.props().children[0].props.prompt).to.equal('Are you sure?')
    expect(wrapper.props().children[0].props.children).to.equal('Delete')
  })

  it('displays confirmation button with prompt', () => {
    wrapper = shallow(<ButtonConfirmation prompt={'Are you a robot?'}>Robot?</ButtonConfirmation>)

    expect(wrapper.props().children[0].props.prompt).to.equal('Are you a robot?')
    expect(wrapper.props().children[0].props.children).to.equal('Robot?')
  })

  it('handles opening and closing on the confirmation button', () => {
    wrapper = shallow(<ButtonConfirmation hasBeenOpened={true}>Delete</ButtonConfirmation>)

    let inst = wrapper.instance()

    inst.handleOpen()
    expect(wrapper.state().confirmationOverlayOpen).to.be.true

    inst.handleOpen()
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
  })

  it('handles confirmation on the confirmation button', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOpen: true})
    let inst = wrapper.instance()

    inst.handleConfirmation()
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
  })

  it('get styles on the confirmation button when position not passed', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({
      overlayWidth: 20,
      triggerWidth: 10
    })
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({left: '-5px'})
  })

  it('get styles on the confirmation button when position right', () => {
    wrapper = shallow(<ButtonConfirmation position={'right'}>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOffset: 40})
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({right: '40px'})
  })

  it('get styles on the confirmation button when position left', () => {
    wrapper = shallow(<ButtonConfirmation position={'left'}>Delete</ButtonConfirmation>)
    wrapper.setState({confirmationOverlayOffset: 40})
    let inst = wrapper.instance()

    expect(inst.getStyles()).to.deep.equal({left: '40px'})
  })

  it('get caret styles on the confirmation button when position not passed and is not wide', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({ wide: false })
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: '66px'})
  })

  it('get caret styles on the confirmation button when position not passed and is wide', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)
    wrapper.setState({ wide: true })
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: '96px'})
  })

  it('get caret styles on the confirmation button when position right', () => {
    wrapper = shallow(<ButtonConfirmation position={'right'}>Delete</ButtonConfirmation>)
    wrapper.setState({triggerWidth: 40})
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({right: 'calc(27.5px)'})
  })

  it('get caret styles on the confirmation button when position left', () => {
    wrapper = shallow(<ButtonConfirmation position={'left'}>Delete</ButtonConfirmation>)
    wrapper.setState({triggerWidth: 40})
    let inst = wrapper.instance()

    expect(inst.getCaretStyles()).to.deep.equal({left: 'calc(15px)'})
  })

  it('handles collapse with confirmation button', () => {
    wrapper = shallow(<ButtonConfirmation collapse={true}>Delete</ButtonConfirmation>)

    expect(wrapper.props().children[0].props.collapse).to.be.true
  })

  it('handles setup on the confirmation button', () => {
    wrapper = shallow(<ButtonConfirmation>Delete</ButtonConfirmation>)
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
    wrapper = shallow(<ButtonConfirmation prompt={'This is a test.'}>Delete</ButtonConfirmation>)

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

  it('hides text when collapse prop is passed', () => {
    wrapper = shallow(<Button collapse={true}>Test</Button>)
    expect(wrapper.props().collapse).to.equal(true)
    expect(wrapper.props().className).to.equal('btn collapse')
  })
})
