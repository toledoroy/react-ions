import React from 'react'
import { shallow } from 'enzyme'
import InputList from '../src/components/InputList/InputList'
import Input from '../src/components/Input/Input'
import Icon from '../src/components/Icon/Icon'
import TagList from '../src/components/internal/TagList'

describe('InputList', () => {
  let wrapper, input, inst, value

  beforeEach(() => {
    value = [
      'Test 1',
      'Test 2'
    ]
  })

  const options = [
    { display: 'Test 1', value: 'Test 1' },
    { display: 'Test 2', value: 'Test 2' }
  ]

  it('should shallow render itself', () => {
    const spy = sinon.spy()
    wrapper = shallow(<InputList optClass='test' value={[]} changeCallback={spy} placeholder='Type something and hit enter' />)

    expect(wrapper.props().className).to.equal('input-list-wrapper test')
    expect(wrapper.childAt(0).props().placeholder).to.equal('Type something and hit enter')
    expect(wrapper.find(Input)).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(1)
    expect(wrapper.find(TagList)).to.have.length(1)
  })

  it('should build state from props', () => {
    const spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().value).to.equal(value)
  })

  it('should generate an options list', () => {
    const spy = sinon.spy()
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().options).to.deep.equal(options)
  })

  it('should handleChange on keyUp', () => {
    const spy = sinon.spy()
    const keyUpValue = {
      charCode: 14,
      type: 'keypress',
      target: {
        value: 'Key Upped'
      }
    }
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.childAt(0).simulate('keyUp', keyUpValue)
    expect(wrapper.state().currentValue).to.equal(keyUpValue.target.value)
  })

  it('should handleChange on keyPress', () => {
    const spy = sinon.spy()
    const keyPressValue = {
      charCode: 14,
      type: 'keypress',
      target: {
        value: 'Key Pressed'
      }
    }
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.childAt(0).simulate('keyPress', keyPressValue)
    expect(wrapper.state().value).to.equal(value)
  })

  it('should handleChange onClick', () => {
    const spy = sinon.spy()
    const clickValue = {
      target: {
        value: 'Clicked'
      }
    }
    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.childAt(1).simulate('click', clickValue)
  })
})
