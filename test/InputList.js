import React from 'react'
import { shallow } from 'enzyme'
import InputList from '../src/components/InputList/InputList'
import Input from '../src/components/Input/Input'
import Icon from '../src/components/Icon/Icon'
import TagList from '../src/components/internal/TagList'

describe('InputList', () => {
  let wrapper, input, spy, inst

  const value = [
    'Test 1',
    'Test 2'
  ]

  const options = [
    { display: 'Test 1', value: 'Test 1' },
    { display: 'Test 2', value: 'Test 2' }
  ]

  const handleChangeReturn = {
    charCode: 14,
    target: {
      value: 'i'
    }
  }

  const handleChangeClick = {
    type: 'click',
    charCode: 13,
    target: {
      value: 'x'
    }
  }

  it('should shallow render itself', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList optClass='test' value={[]} changeCallback={spy} placeholder='Type something and hit enter' />)

    expect(wrapper.props().className).to.equal('input-list-wrapper test')
    expect(wrapper.childAt(0).props().placeholder).to.equal('Type something and hit enter')
    expect(wrapper.find(Input)).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(1)
    expect(wrapper.find(TagList)).to.have.length(1)
  })

  it('should build state from props', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().value).to.equal(value)
  })

  it('should generate an options list', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().options).to.deep.equal(options)
  })

  it('should call handleKeyUp and return if not pressing enter or click', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)

    wrapper.childAt(0).simulate('keyUp', handleChangeReturn)
    expect(wrapper.state().currentValue).to.equal(handleChangeReturn.target.value)
  })

  it('should call handleChange and continue if pressing enter or click', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)

    wrapper.childAt(0).simulate('keyUp', handleChangeClick)
    expect(wrapper.state().value).to.deep.equal(['Test 1', 'Test 2', 'x'])
  })

  it('should (return) when a non-return or click key is pressed', () => {
    spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)

    wrapper.childAt(0).simulate('keyPress', handleChangeClick)
    expect(wrapper.state().value).to.deep.equal(['Test 1', 'Test 2', 'x'])
  })
})
