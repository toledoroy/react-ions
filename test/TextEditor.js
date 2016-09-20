import React from 'react'
import { shallow, mount } from 'enzyme'
import TextEditor from '../src/components/TextEditor/TextEditor'

describe('TextEditor', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<TextEditor />)

    expect(wrapper.hasClass('editor-component')).to.equal(true)
    expect(wrapper.children()).to.have.length(2)
    expect(wrapper.state().value).to.equal('')
  })

  it('should update state when props change', () => {
    wrapper = mount(<TextEditor />)

    expect(wrapper.state().value).to.equal('')

    wrapper.setProps({ value: '<p>Test</p>' })

    expect(wrapper.state().value).to.equal('<p>Test</p>')

    wrapper.setProps({ value: '<p>Testing!</p>', disabled: false })

    expect(wrapper.state().value).to.equal('<p>Testing!</p>')
  })

  it('should trigger the callback when the value changes', () => {
    const changeCallback = sinon.spy()
    wrapper = shallow(<TextEditor changeCallback={changeCallback} name='textEditor' />)

    wrapper.instance().handleChange('<p>Test!</p>')

    const event = {
      target: {
        name: 'textEditor',
        value: '<p>Test!</p>'
      }
    }

    expect(changeCallback.calledWithExactly(event)).to.be.true
  })

  it('should set value on load', () => {
    wrapper = mount(<TextEditor value='<p>Test!</p>' />)

    expect(wrapper.state().value).to.equal('<p>Test!</p>')
  })

  it('should be disabled on load', () => {
    wrapper = shallow(<TextEditor disabled />)

    expect(wrapper.hasClass('editor-disabled')).to.equal(true)
  })
})
