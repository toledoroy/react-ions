import React from 'react'
import { shallow, mount } from 'enzyme'
import TextEditor from '../src/components/TextEditor/TextEditor'

describe('TextEditor', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<TextEditor />)

    expect(wrapper.hasClass('editor-component')).to.be.true
    expect(wrapper.children()).to.have.length(3)
    expect(wrapper.state().value).to.equal('')
  })

  it('should update state when props change', () => {
    wrapper = mount(<TextEditor />)

    expect(wrapper.state().value).to.equal('')

    wrapper.setProps({ value: '<p>Test</p>' })

    expect(wrapper.state().value).to.equal('<p>Test</p>')
  })

  it('should call the enable method on the editor when the disabled prop changes', () => {
    wrapper = mount(<TextEditor />)

    const editorEnableSpy = sinon.spy(wrapper.state().textEditor, 'enable')

    wrapper.setProps({ disabled: true })

    expect(editorEnableSpy.calledWith(false)).to.be.true

    wrapper.setProps({ disabled: false })

    expect(editorEnableSpy.calledWith(true)).to.be.true

    editorEnableSpy.restore()
  })

  it('should trigger the callback when the value changes', (done) => {
    const changeCallback = sinon.spy()
    wrapper = mount(<TextEditor changeCallback={changeCallback} name='textEditor' />)

    wrapper.instance().setContent('<p>Test!</p>')

    const event = {
      target: {
        name: 'textEditor',
        value: '<p>Test!</p>'
      }
    }

    setTimeout(() => {
      expect(changeCallback.calledWithExactly(event)).to.be.true
      done()
    })
  })

  it('should set value on load', () => {
    wrapper = mount(<TextEditor value='<p>Test!</p>' />)

    expect(wrapper.state().value).to.equal('<p>Test!</p>')
  })

  it('should be disabled on load', () => {
    wrapper = mount(<TextEditor disabled />)

    expect(wrapper.find('.editor-disabled')).to.have.length(1)
    expect(wrapper.find('.overlay')).to.have.length(1)
  })
})
