import React from 'react'
import TestUtils from 'react-dom/test-utils'
import WrappedDropdown, { Dropdown } from '../src/components/Dropdown'
import Immutable from 'immutable'

describe('Dropdown', () => {
  let wrapper, trigger

  it('should display a dropdown', () => {
    wrapper = shallow(<WrappedDropdown trigger='Test'>This is a test.</WrappedDropdown>)

    expect(wrapper.props().trigger).to.equal('Test')
    expect(wrapper.props().isOpened).to.be.false
    expect(wrapper.childAt(0).text()).to.equal('This is a test.')
    expect(wrapper.childAt(1).childAt(0).hasClass('list-wrapper')).to.equal(false)
    expect(wrapper.childAt(1).find('ul').length).to.equal(0)
    expect(wrapper.childAt(1).find('li').length).to.equal(0)
  })

  it('should open when clicked', () => {
    wrapper = mount(<WrappedDropdown trigger='Test'>This is a test.</WrappedDropdown>)
    trigger = wrapper.find('.trigger').at(0)
    expect(trigger.hasClass('trigger')).to.equal(true)
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true)
    trigger.simulate('click')
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true)
    expect(wrapper.find('.dropdown-component').hasClass('is-opened')).to.equal(true)
  })

  it('should be opened by default', () => {
    wrapper = mount(<WrappedDropdown isOpened={true} trigger='Test'>This is a test.</WrappedDropdown>)
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true)
    expect(wrapper.find('.dropdown-component').hasClass('is-opened')).to.equal(true)
   })

  it('should take an optional CSS class', () => {
    wrapper = mount(<WrappedDropdown optClass='test' trigger='Test'>This is a test.</WrappedDropdown>)
    expect(wrapper.find('.dropdown-component').hasClass('dropdown-component')).to.equal(true)
    expect(wrapper.find('.dropdown-component').hasClass('test')).to.equal(true)
  })

  it('displays a modified state upon changing props', function () {
    var TestParent = React.createFactory(React.createClass({
      getInitialState() {
        return {isOpened: false}
      },
      render() {
        return <WrappedDropdown ref='dropdown' trigger='Test' isOpened={this.state.isOpened}>This is a test.</WrappedDropdown>
      }
    }))

    var parent = TestUtils.renderIntoDocument(TestParent())
    expect(parent.refs.dropdown.props.isOpened).to.be.false

    parent.setState({
      isOpened: true
    })

    expect(parent.refs.dropdown.props.isOpened).to.be.true
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()
    wrapper = mount(<WrappedDropdown optClass='test' trigger='Test' changeCallback={spy}>This is a test.</WrappedDropdown>)
    trigger = wrapper.find('.trigger').at(0)

    trigger.simulate('click')

    expect(spy.calledOnce).to.be.true
    expect(spy.calledWith(true)).to.be.true
  })

  it('should display list', () => {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ]

    wrapper = mount(<WrappedDropdown optClass='test' listItems={listItems}>This is a test.</WrappedDropdown>)
    expect(wrapper.find('.list-wrapper')).to.have.length(1)
    expect(wrapper.find('ul')).to.have.length(1)
    expect(wrapper.find('li')).to.have.length(3)
  })

  it('should display a confirmation overlay when an item is clicked', () => {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3', callbackConfirmation: true}
    ]

    wrapper = shallow(<Dropdown optClass='test' listItems={listItems}>This is a test.</Dropdown>)
    wrapper.instance().handleItemClick(listItems[0])

    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null

    wrapper.instance().handleItemClick(listItems[2])

    expect(wrapper.state().confirmationOverlayOpen).to.be.true
    expect(wrapper.state().clickedItem).to.deep.equal(listItems[2])
  })

  it('should close the confirmation overlay when action buttons are clicked', () => {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3', callbackConfirmation: true}
    ]

    wrapper = shallow(<Dropdown optClass='test' listItems={listItems} isOpened={true}>This is a test.</Dropdown>)

    wrapper.instance().handleItemClick(listItems[2])
    wrapper.instance().handleConfirmation(false)

    expect(wrapper.state().isOpened).to.be.true
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null

    wrapper.instance().handleItemClick(listItems[2])
    wrapper.instance().handleConfirmation(true)

    expect(wrapper.state().isOpened).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null
  })

  it('should set state to nextProps receiving a list that differs from current state', () => {
    const listItemsInit = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3', callbackConfirmation: true}
    ]

    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'},
      {name: 'test4'},
      {name: 'test5'}
    ]

    const nextProps = {
      listItems
    }

    wrapper = shallow(<Dropdown listItems={listItemsInit} isOpened={true}>This is a test.</Dropdown>)
    wrapper.instance().componentWillReceiveProps(nextProps)

    expect(wrapper.state().listItems).to.deep.equal(Immutable.fromJS(listItems))
  })
})
