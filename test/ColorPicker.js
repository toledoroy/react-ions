import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import ColorPicker from '../src/components/ColorPicker/ColorPicker';

describe('ColorPicker', () => {
  const COLOR = '#3c97d3';
  const NEW_COLOR = '#e54c3b';
  let wrapper, inputField, previewColorDiv;

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  it('should shallow render itself', () => {
    wrapper = shallow(<ColorPicker color={COLOR} />);
    expect(wrapper.hasClass('colorpicker-component')).to.equal(true);

    inputField = wrapper.find('Input');
    expect(inputField).to.have.length(1);

    previewColorDiv = wrapper.childAt(1);
    expect(previewColorDiv).to.have.length(1);
    expect(previewColorDiv.hasClass('color-preview')).to.equal(true);
  });

  it('should have empty default color', () => {
    wrapper = mount(<ColorPicker />);
    expect(wrapper.props().color).to.equal('');
  });

  it('should update the state when color property changes', () => {
    wrapper = mount(<ColorPicker color={COLOR} />);

    inputField = wrapper.find('Input');
    expect(inputField.props().value).to.equal(COLOR);

    wrapper.setProps({ color: NEW_COLOR });
    wrapper.update();

    expect(inputField.props().value).to.equal(NEW_COLOR);
  });

  it('should update the state when input value changes', () => {
    wrapper = mount(<ColorPicker color={COLOR} />);

    inputField = wrapper.find('Input');
  });

  it('should run the changeCallback on change', () => {
    let parentColor = '';
    const callback = function(color) {
      parentColor = color;
    };
    wrapper = mount(<ColorPicker color={COLOR} changeCallback={callback} />);
    wrapper.find('input').simulate('change');
    expect(parentColor).to.equal(COLOR);
  });

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error');
    wrapper = mount(<ColorPicker color={COLOR} />);
    wrapper.find('input').simulate('change');

    expect(spy.called).to.be.false;
    spy.restore();
  })

  it('should show/hide SketchPicker when Input field is clicked', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<ColorPicker />, div);
    const containerDiv = ReactDOM.findDOMNode(div);
    inputField = document.body.getElementsByTagName('input');
    eventFire(inputField[0], 'click');
    expect(document.body.getElementsByClassName('sketch-container')).to.have.length(1);
    eventFire(inputField[0], 'click');
    expect(document.body.getElementsByClassName('sketch-container')).to.have.length(0);
  })

});