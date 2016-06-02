import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import ColorPicker from '../src/components/ColorPicker/ColorPicker'
import { SketchPicker } from 'react-color'

describe('ColorPicker', () => {
  const oldColor = '#3C97D3'
  const newColor = '#E54C3B'
  let wrapper, inputField, previewColorDiv

  it('should shallow render itself', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)
    expect(wrapper.find('.colorpicker-component')).to.have.length(1)

    inputField = wrapper.find('Input')
    expect(inputField).to.have.length(1)

    previewColorDiv = wrapper.find('.color-preview')
    expect(previewColorDiv).to.have.length(1)
  })

  it('should have empty default color', () => {
    wrapper = mount(<ColorPicker />)
    expect(wrapper.childAt(0).props().value).to.equal('')
  })

  it('should open/close when clicked', () => {
    wrapper = mount(<ColorPicker value={oldColor} />);

    inputField = wrapper.find('input')

    expect(wrapper.find(SketchPicker)).to.have.length(0)
    inputField.simulate('click');
    expect(wrapper.find(SketchPicker)).to.have.length(1)
    inputField.simulate('click');
    expect(wrapper.find(SketchPicker)).to.have.length(0)
  })

  it('should update the state when the value property changes', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    expect(wrapper.childAt(0).props().value).to.equal(oldColor)

    wrapper.setProps({ value: newColor })
    wrapper.update()

    expect(wrapper.childAt(0).props().value).to.equal(newColor)
  })

  it('should update the state when input value changes', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    inputField = wrapper.find('input')
    expect(inputField.node.value).to.equal(oldColor)

    inputField.node.value = newColor
    inputField.simulate('change')

    expect(inputField.node.value).to.equal(newColor)
  })

  it('should update the state when the new color is missing the #', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    inputField = wrapper.find('input')
    expect(inputField.node.value).to.equal(oldColor)

    inputField.node.value = 'E54C3B'
    inputField.simulate('change')

    expect(inputField.node.value).to.equal(newColor)
  })

  it('should run the changeCallback on change', () => {
    let parentColor = ''
    const callback = function(color) {
      parentColor = color
    }
    wrapper = mount(<ColorPicker value={oldColor} changeCallback={callback} />)
    wrapper.find('input').simulate('change')
    expect(parentColor).to.equal(oldColor)
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<ColorPicker value={oldColor} />)
    wrapper.find('input').simulate('change')

    expect(spy.called).to.be.false
    spy.restore()
  })

  it('should update the state when new color is selected in the picker', () => {
    wrapper = mount(<ColorPicker />)

    inputField = wrapper.find('input')
    inputField.simulate('click')

    expect(inputField.node.value).to.equal('')

    const picker = wrapper.find('div.sketch-container')
    picker.childAt(0).childAt(0).childAt(0).childAt(0).simulate('touchstart', {pageX: 0, pageY: 0})

    expect(inputField.node.value).to.not.equal('')
  })

  it('should run the changeCallback when new color is selected in the picker', () => {
    let parentColor = ''
    const callback = function(color) {
      parentColor = color
    }
    wrapper = mount(<ColorPicker changeCallback={callback} />)
    wrapper.find('input').simulate('click')

    expect(parentColor).to.equal('')

    const picker = wrapper.find('div.sketch-container')
    picker.childAt(0).childAt(0).childAt(0).childAt(0).simulate('touchstart', {pageX: 0, pageY: 0})

    expect(parentColor).to.not.equal('')
  })
})
