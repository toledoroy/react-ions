import React from 'react'
import { shallow, mount } from 'enzyme'
import ColorPicker from '../src/components/ColorPicker/ColorPicker'
import { SketchPicker } from 'react-color'


describe('ColorPicker', () => {
  const COLOR = '#3c97d3'
  const NEW_COLOR = '#e54c3b'
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
    wrapper = shallow(<ColorPicker color={COLOR} />)
    expect(wrapper.hasClass('colorpicker-component')).to.equal(true)

    inputField = wrapper.find('Input')
    expect(inputField).to.have.length(1)

    previewColorDiv = wrapper.childAt(1)
    expect(previewColorDiv).to.have.length(1)
    expect(previewColorDiv.hasClass('color-preview')).to.equal(true)
  })

  it('should have empty default color', () => {
    wrapper = mount(<ColorPicker />)
    expect(wrapper.props().color).to.equal('')
  })

  it('should update the state when color property changes', () => {
    wrapper = mount(<ColorPicker color={COLOR} />)

    inputField = wrapper.find('Input')
    expect(inputField.props().value).to.equal(COLOR)

    wrapper.setProps({ color: NEW_COLOR })
    wrapper.update()

    expect(inputField.props().value).to.equal(NEW_COLOR)
  })

  it('should update the state when input value changes', () => {
    wrapper = mount(<ColorPicker color={COLOR} />)

    inputField = wrapper.find('Input')
  })

  it('should run the changeCallback on change', () => {
    let parentColor = ''
    const callback = function(color) {
      parentColor = color
    }
    wrapper = mount(<ColorPicker color={COLOR} changeCallback={callback} />)
    wrapper.find('input').simulate('change')
    expect(parentColor).to.equal(COLOR)
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<ColorPicker color={COLOR} />)
    wrapper.find('input').simulate('change')

    expect(spy.called).to.be.false
    spy.restore()
  })

  it('should show/hide SketchPicker when Input field is clicked', () => {
    wrapper = mount(<ColorPicker color={COLOR} />)
    inputField = wrapper.find('Input')
    inputField.find('input').simulate('click')
    expect(wrapper.find(SketchPicker)).to.have.length(1)
    inputField.find('input').simulate('click')
    expect(wrapper.find(SketchPicker)).to.have.length(0)
  })

  it('should update the state when new color is selected in the picker', () => {
    wrapper = mount(<ColorPicker />)
    inputField = wrapper.find('Input')
    inputField.find('input').simulate('click')
    expect(wrapper.state('color')).to.equal('')
    const picker = wrapper.find('div.sketch-container')
    picker.childAt(0).childAt(0).childAt(0).simulate('click')
    //expect(wrapper.state('color')).to.not.equal('')
  })

})