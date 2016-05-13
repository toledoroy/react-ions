import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectField from '../src/components/SelectField/SelectField';
import Icon from '../src/components/Icon/Icon';

describe('SelectField', () => {
  let wrapper;
  const options = [
    {value: 0, display: 'test 1', someOtherProp: true},
    {value: 1, display: 'test 2', someOtherProp: false}
  ];

  it('should shallow render itself', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />);

    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('li')).to.have.length(2);
    expect(wrapper.find(Icon)).to.have.length(1);

    expect(wrapper.hasClass('selectfield-component')).to.equal(true);
    expect(wrapper.childAt(0).props().name).to.equal('selectfield-value');
    expect(wrapper.childAt(0).props().type).to.equal('hidden');
    expect(wrapper.childAt(0).props().value).to.equal('');
    expect(wrapper.childAt(1).text().indexOf(options[0].display)).to.equal(0);
    expect(wrapper.find(Icon).props().name).to.equal('icon-caret');
    expect(wrapper.find('ul').childAt(0).text()).to.equal(options[0].display);
    expect(wrapper.find('ul').childAt(1).text()).to.equal(options[1].display);
  });

  it('should be disabled', () => {
    const disabled = true;
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' disabled={disabled} />);

    expect(wrapper.hasClass('selectfield-component')).to.equal(true);
    expect(wrapper.hasClass('selectfield-disabled')).to.equal(true);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' optClass='selectfield-error' />);

    expect(wrapper.hasClass('selectfield-component')).to.equal(true);
    expect(wrapper.hasClass('selectfield-error')).to.equal(true);
  });

  it('should have a placeholder', () => {
    const placeholder = 'Placeholder text...'
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' placeholder={placeholder} />);

    expect(wrapper.childAt(1).text().indexOf(placeholder)).to.equal(0);
  });

  it('should have an option selected by default', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' defaultOption={1} />);

    expect(wrapper.childAt(1).text().indexOf(options[1].display)).to.equal(0);
  });

  // it('should call changeCallback function', () => {
  //   const spy = sinon.spy();

  //   wrapper = mount(<Checkbox value="test" label="Test label" changeCallback={spy}/>);
  //   wrapper.childAt(0).simulate('change');

  //   expect(spy.calledOnce).to.be.true;
  // });

  // it('should update checked value via callback', () => {
  //   let checked = false;
  //   const callback = function(event) {
  //     checked = event.target.checked;
  //   };
  //   wrapper = mount(<Checkbox value="test" label="Test label" changeCallback={callback}/>);

  //   wrapper.childAt(0).simulate('change', {target: { checked: true }});
  //   expect(checked).to.equal(true);
  // });
});
