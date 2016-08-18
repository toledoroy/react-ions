import React from 'react';
import { shallow, mount } from 'enzyme';
import Tooltip from '../src/components/Tooltip/Tooltip';

describe('Tooltip', () => {
  let wrapper;

  afterEach(function() {
    var elems = document.body.children;
    if (elems.length > 0) {
      document.body.removeChild(elems[elems.length -1]);
    }
  });

  it('should shallow render itself with default options (top placement)', () => {
    wrapper = shallow(<Tooltip content="Testing the top tooltip">Test text</Tooltip>);

    expect(wrapper.childAt(0).text()).to.be.equal('Test text');
    expect(wrapper.childAt(1).text()).to.be.equal('Testing the top tooltip');
    expect(wrapper.childAt(1).hasClass('tooltip-component')).to.be.true;
    expect(wrapper.childAt(1).hasClass('top')).to.be.true;
  });

  it('should shallow render itself with with bottom placement', () => {
    wrapper = shallow(<Tooltip content="Testing the bottom tooltip" tooltipPlacement="bottom">Test text</Tooltip>);

    expect(wrapper.childAt(1).text()).to.be.equal('Testing the bottom tooltip');
    expect(wrapper.childAt(1).hasClass('bottom')).to.be.true;
  });

  it('should shallow render itself with with left placement', () => {
    wrapper = shallow(<Tooltip content="Testing the left tooltip" tooltipPlacement="left">Test text</Tooltip>);

    expect(wrapper.childAt(1).text()).to.be.equal('Testing the left tooltip');
    expect(wrapper.childAt(1).hasClass('left')).to.be.true;
  });

  it('should shallow render itself with with right placement', () => {
    wrapper = shallow(<Tooltip content="Testing the right tooltip" tooltipPlacement="right">Test text</Tooltip>);

    expect(wrapper.childAt(1).text()).to.be.equal('Testing the right tooltip');
    expect(wrapper.childAt(1).hasClass('right')).to.be.true;
  });

  it('should show above the element on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip">Test text</Tooltip>);

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');
    expect(wrapper.find('.tooltip-component').node.style.left).to.not.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');
  });

  it('should show below the element on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the bottom tooltip" tooltipPlacement="bottom">Test text</Tooltip>);

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');
    expect(wrapper.find('.tooltip-component').node.style.left).to.not.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');
  });

  it('should show left of the element on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the left tooltip" tooltipPlacement="left">Test text</Tooltip>);

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');
    expect(wrapper.find('.tooltip-component').node.style.left).to.not.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');
  });

  it('should show right of the element on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the right tooltip" tooltipPlacement="right">Test text</Tooltip>);

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');
    expect(wrapper.find('.tooltip-component').node.style.left).to.not.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.left).to.be.equal('');
    expect(wrapper.find('.tooltip-component').node.style.top).to.be.equal('');
  });

  it('should append itself to the body with default options (top placement), show on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip" appendToBody={true}>Test text</Tooltip>);

    expect(document.body.getElementsByClassName('tooltip-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('top')).to.have.length(1);
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('0.9');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.not.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');
  });

  it('should append itself to the body with bottom placement, show on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip" tooltipPlacement="bottom" appendToBody={true}>Test text</Tooltip>);

    expect(document.body.getElementsByClassName('tooltip-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('bottom')).to.have.length(1);
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('0.9');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.not.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');
  });

  it('should append itself to the body with left placement, show on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip" tooltipPlacement="left" appendToBody={true}>Test text</Tooltip>);

    expect(document.body.getElementsByClassName('tooltip-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('left')).to.have.length(1);
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('0.9');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.not.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');
  });

  it('should append itself to the body with right placement, show on mouseover and hide on mouseout', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip" tooltipPlacement="right" appendToBody={true}>Test text</Tooltip>);

    expect(document.body.getElementsByClassName('tooltip-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('right')).to.have.length(1);
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');

    wrapper.simulate('mouseover');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('0.9');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.not.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.not.be.equal('');

    wrapper.simulate('mouseout');

    expect(document.body.getElementsByClassName('tooltip-component')[0].style.left).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.top).to.be.equal('');
    expect(document.body.getElementsByClassName('tooltip-component')[0].style.opacity).to.be.equal('');
  });

  it('should show by default', () => {
    wrapper = mount(<Tooltip content="Testing the top tooltip" show={true}>Test text</Tooltip>);

    setTimeout(() => {
      expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');

      wrapper.simulate('mouseover');

      expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');

      wrapper.simulate('mouseout');

      expect(wrapper.find('.tooltip-component').node.style.opacity).to.be.equal('0.9');      
    }, 1000)
  });

});
