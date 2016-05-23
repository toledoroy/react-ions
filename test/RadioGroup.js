import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RadioGroup from '../src/components/Radio/RadioGroup';

describe('RadioGroup', () => {
  let wrapper;
  let options = [
    {
      value: 'option_1',
      label: 'Option 1'
    },{
      value: 'option_2',
      label: 'Option 2'
    }
  ];

  it('should shallow render itself', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label'/>);

    expect(wrapper.hasClass('radio-group')).to.equal(true);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.find('Radio')).to.have.length(2);

    expect(wrapper.childAt(1).props().value).to.be.equal('option_1');
    expect(wrapper.childAt(1).props().label).to.be.equal('Option 1');
    expect(wrapper.childAt(1).props().name).to.be.equal('test-group');
    expect(wrapper.childAt(1).props().checked).to.be.equal(false);
    expect(wrapper.childAt(1).props().labelPosition).to.be.equal('right');
    expect(wrapper.childAt(1).props().optClass).to.be.undefined;
    expect(wrapper.childAt(1).props().disabled).to.be.equal(false);

    expect(wrapper.childAt(2).props().value).to.be.equal('option_2');
    expect(wrapper.childAt(2).props().label).to.be.equal('Option 2');
    expect(wrapper.childAt(2).props().name).to.be.equal('test-group');
    expect(wrapper.childAt(2).props().checked).to.be.equal(false);
    expect(wrapper.childAt(2).props().labelPosition).to.be.equal('right');
    expect(wrapper.childAt(2).props().optClass).to.be.undefined;
    expect(wrapper.childAt(2).props().disabled).to.be.equal(false);
  });

  it('should have disabled radio buttons', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' disabled/>);

    expect(wrapper.childAt(1).props().disabled).to.be.equal(true);
    expect(wrapper.childAt(2).props().disabled).to.be.equal(true);
  });

  it('should be required', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' required={true}/>);

    expect(wrapper.childAt(0).hasClass('asterisk')).to.be.true;
    expect(wrapper.childAt(0).html()).to.be.equal('<span class="asterisk">*</span>');
  });

  it('should not have a label', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options}/>);

    expect(wrapper.find('label')).to.have.length(0);
  });

  it('should have an option checked', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value="option_1"/>);

    expect(wrapper.childAt(1).props().checked).to.be.equal(true);
    expect(wrapper.childAt(2).props().checked).to.be.equal(false);
  });

  it('should have labels on the left side', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' labelPosition='left'/>);

    expect(wrapper.childAt(1).props().labelPosition).to.be.equal('left');
    expect(wrapper.childAt(2).props().labelPosition).to.be.equal('left');
  });

  it('should call changeCallback function', () => {
    const spy = sinon.spy();

    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' changeCallback={spy}/>);
    wrapper.childAt(1).find('input').simulate('change');

    expect(spy.calledOnce).to.be.true;
  });

  it('should update checked value via callback', () => {
    let checked = false;
    const callback = function(event, value) {
      checked = value;
    };
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' changeCallback={callback}/>);

    wrapper.childAt(1).find('input').simulate('change');
    expect(checked).to.be.equal('option_1');

    wrapper.childAt(2).find('input').simulate('change');
    expect(checked).to.be.equal('option_2');
  });

  it('should update the state when the value property changes', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value="option_1"/>);

    expect(wrapper.childAt(1).props().checked).to.be.true;
    expect(wrapper.childAt(2).props().checked).to.be.false;

    wrapper.setProps({ value: "option_2" });
    wrapper.update();

    expect(wrapper.childAt(1).props().checked).to.be.false;
    expect(wrapper.childAt(2).props().checked).to.be.true;
  });

  it('should not update the state when the value property changes to undefined', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value="option_1"/>);

    expect(wrapper.childAt(1).props().checked).to.be.true;
    expect(wrapper.childAt(2).props().checked).to.be.false;

    wrapper.setProps({ value: undefined });
    wrapper.update();

    expect(wrapper.childAt(1).props().checked).to.be.true;
    expect(wrapper.childAt(2).props().checked).to.be.false;
  });

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error');
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' />);

    wrapper.childAt(1).find('input').simulate('change');
    expect(spy.calledOnce).to.be.false;

    wrapper.childAt(2).find('input').simulate('change');
    expect(spy.calledOnce).to.be.false;

    spy.restore();
  });

  it('should update the state when a radio button is clicked', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value="option_1"/>);

    expect(wrapper.childAt(1).props().checked).to.be.true;
    expect(wrapper.childAt(2).props().checked).to.be.false;

    wrapper.childAt(2).find('input').simulate('change');

    expect(wrapper.childAt(1).props().checked).to.be.false;
    expect(wrapper.childAt(2).props().checked).to.be.true;
  });
});
