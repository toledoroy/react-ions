import React from 'react'
import Button from '../src/components/Button'
import { Popover } from '../src/components/Popover/Popover'

describe('Popover', () => {
  const content = <Button>Test button</Button>
  const optClass = 'test-class'
  const onRequestClose = sinon.spy()
  const defaultPosition = 'bottom'

  it('should render itself', () => {
    const wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} />)
    expect(wrapper.hasClass('popover')).to.be.true
    expect(wrapper.hasClass(optClass)).to.be.true
    expect(wrapper.state().position).to.equal('bottom')
    expect(wrapper.find(Button)).to.be.length(1)
  })

  it('should not update', () => {
    const wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} />)
    expect(
      wrapper.instance().shouldComponentUpdate({ defaultPosition, content, optClass, showing: false, onRequestClose }, { position: 'bottom' })
    ).to.be.false
    expect(
      wrapper.instance().shouldComponentUpdate({ defaultPosition: 'top', content, optClass, showing: false, onRequestClose }, { position: 'bottom' })
    ).to.be.false
    expect(
      wrapper.instance().shouldComponentUpdate({ defaultPosition, content, optClass: 'other-class', showing: false, onRequestClose }, { position: 'bottom' })
    ).to.be.false
    expect(
      wrapper.instance().shouldComponentUpdate({ defaultPosition, content, optClass, showing: false, onRequestClose: () => {} }, { position: 'bottom' })
    ).to.be.false
  })


  it('should update', () => {
    const wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} />)
    expect(wrapper.instance().shouldComponentUpdate({ content, optClass }, { position: 'top' })).to.be.true
    expect(wrapper.instance().shouldComponentUpdate({ content, optClass, showing: true }, { position: 'bottom' })).to.be.true
    expect(wrapper.instance().shouldComponentUpdate({ content: 'test-content', optClass }, { position: 'bottom' })).to.be.true
  })

  it('should get the popover content', () => {
    let wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} />)
    let popoverContent = wrapper.instance().getPopover()
    expect(popoverContent.props.className).to.contain('popover-inner')
    expect(popoverContent.props.className).to.contain('bottom')
    expect(popoverContent.props.className).to.not.contain('popover-showing')
    expect(popoverContent.props.children.props.className).to.contain('popover-content')
    expect(popoverContent.props.children.props.children.type).to.equal(Button)

    wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} showing={true}/>)
    popoverContent = wrapper.instance().getPopover()
    expect(popoverContent.props.className).to.contain('popover-inner')
    expect(popoverContent.props.className).to.contain('popover-showing')
    expect(popoverContent.props.className).to.contain('bottom')
  })

  it('should call onRequestClose when its showing', () => {
    let wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} />)
    wrapper.instance().handleClickOutside()
    expect(onRequestClose.calledOnce).to.be.false

    wrapper = shallow(<Popover content={content} optClass={optClass} onRequestClose={onRequestClose} showing={true}/>)
    wrapper.instance().handleClickOutside()
    expect(onRequestClose.calledOnce).to.be.true
  })
})
