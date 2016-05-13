import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import SelectField from '../src/components/SelectField/SelectField'
import Icon from '../src/components/Icon/Icon'

describe('SelectField', () => {
  let wrapper;
  const options = [
    {value: 0, display: 'test 1', someOtherProp: true},
    {value: 1, display: 'test 2', someOtherProp: false}
  ];

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
    expect(wrapper.find('ul').children()).to.have.length(2);
    expect(wrapper.find('ul').childAt(1).text()).to.equal(options[1].display);
    expect(wrapper.find('ul').childAt(1).text()).to.equal(options[1].display);
    expect(wrapper.hasClass('active')).to.equal(false);
  });

  it('should be disabled', () => {
    const disabled = true;
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' disabled={disabled} />);

    expect(wrapper.hasClass('selectfield-component')).to.equal(true);
    expect(wrapper.hasClass('selectfield-disabled')).to.equal(true);
    expect(wrapper.hasClass('active')).to.equal(false);
  });

  it('should have an extra class', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' optClass='selectfield-error' />);

    expect(wrapper.hasClass('selectfield-component')).to.equal(true);
    expect(wrapper.hasClass('selectfield-error')).to.equal(true);
  });

  it('should have a placeholder', () => {
    const placeholder = 'Placeholder text...';
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' placeholder={placeholder} />);

    expect(wrapper.childAt(1).text().indexOf(placeholder)).to.equal(0);
  });

  it('should have an option selected by default', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' defaultOption={1} />);

    expect(wrapper.childAt(1).text().indexOf(options[1].display)).to.equal(0);
  });

  it('should toggle the select field isOpen state', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />);

    wrapper.childAt(1).simulate('click');

    expect(wrapper.hasClass('active')).to.equal(true);
  });

  it('should change the option', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />);

    expect(wrapper.childAt(1).text().indexOf(options[0].display)).to.equal(0);

    // open <ul>
    wrapper.childAt(1).simulate('click');
    //expect(wrapper.hasClass('active')).to.equal(true);

    // click <li>
    wrapper.childAt(2).childAt(1).simulate('click');
    //expect(wrapper.hasClass('active')).to.equal(false);
    expect(wrapper.childAt(1).text().indexOf(options[1].display)).to.equal(0);
  });

  it('should call changeCallback function', () => {
    const spy = sinon.spy();

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' changeCallback={spy} />);

    // open <ul>
    wrapper.childAt(1).simulate('click');
    // click <li>
    wrapper.childAt(2).childAt(0).simulate('click');

    expect(spy.calledOnce).to.be.true;
  });

  it('should close the list if open when document is clicked', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<SelectField options={options} valueProp='value' displayProp='display' />, div);
    const containerDiv = ReactDOM.findDOMNode(div);

    // Trigger a click on the dropdown value
    eventFire(document.body.getElementsByClassName('selectfield-value')[0], 'click');

    expect(document.body.getElementsByClassName('active')).to.have.length(1);

    // Trigger a click on the body element
    eventFire(document.body, 'click');

    expect(document.body.getElementsByClassName('active')).to.have.length(0);
  });

  it('should not react to document click if list is not open', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<SelectField options={options} valueProp='value' displayProp='display' />, div);
    const containerDiv = ReactDOM.findDOMNode(div);

    expect(document.body.getElementsByClassName('active')).to.have.length(0);

    // Trigger a click on the body element
    eventFire(document.body, 'click');

    expect(document.body.getElementsByClassName('active')).to.have.length(0);
  });
});
