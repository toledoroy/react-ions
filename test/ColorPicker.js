import React from 'react'
import { shallow, mount } from 'enzyme'
import ColorPicker from '../src/components/ColorPicker/ColorPicker'
import { SketchPicker } from 'react-color'


describe('ColorPicker', () => {
  const oldColor = '#3c97d3'
  const newColor = '#e54c3b'
  let wrapper, inputField, previewColorDiv

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype)
    } else {
      var evObj = document.createEvent('Events')
      evObj.initEvent(etype, true, false)
      el.dispatchEvent(evObj)
    }
  }

  it('should shallow render itself', () => {
    wrapper = shallow(<ColorPicker value={oldColor} />)
    expect(wrapper.hasClass('colorpicker-component')).to.equal(true)

    inputField = wrapper.find('Input')
    expect(inputField).to.have.length(1)

    previewColorDiv = wrapper.childAt(1)
    expect(previewColorDiv).to.have.length(1)
    expect(previewColorDiv.hasClass('color-preview')).to.equal(true)
  })

  it('should have empty default color', () => {
    wrapper = mount(<ColorPicker />)
    expect(wrapper.props().value).to.equal('')
  })

  it('should update the state when value property changes', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    expect(wrapper.state().color).to.equal(oldColor)

    wrapper.setProps({ value: newColor })
    wrapper.update()

    expect(wrapper.state().color).to.equal(newColor)
  })

  it('should update the state when input value changes', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    expect(wrapper.state().color).to.equal(oldColor)

    wrapper.find('input').node.value = newColor
    wrapper.find('input').simulate('change')

    expect(wrapper.state().color).to.equal(newColor)
  })

  it('should update the state when the new color is missing the #', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)

    expect(wrapper.state().color).to.equal(oldColor)

    wrapper.find('input').node.value = 'e54c3b'
    wrapper.find('input').simulate('change')

    expect(wrapper.state().color).to.equal(newColor)
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

  it('should show/hide SketchPicker when Input field is clicked', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)
    inputField = wrapper.find('Input')
    inputField.find('input').simulate('click')
    expect(wrapper.find(SketchPicker)).to.have.length(1)
    inputField.find('input').simulate('click')
    expect(wrapper.find(SketchPicker)).to.have.length(0)
  })

  it('should update the state when new color is selected in the picker', () => {
    wrapper = mount(<ColorPicker />)
    wrapper.find('input').simulate('click')

    expect(wrapper.state('color')).to.equal('')

    const picker = wrapper.find('div.sketch-container')
    picker.childAt(0).childAt(0).childAt(0).childAt(0).simulate('touchstart', {pageX: 0, pageY: 0})

    expect(wrapper.state('color')).to.not.equal('')
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
