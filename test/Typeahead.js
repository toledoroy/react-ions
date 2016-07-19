import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Loader from 'react-loader'
import Input from '../src/components/Input/Input'
import { Typeahead } from '../src/components/Typeahead/Typeahead'

describe('Typeahead', () => {
  let wrapper, typeahead, inst

  const options = [
    {value: 'AT', display: 'Austria'},
    {value: 'BM', display: 'Bermuda'},
    {value: 10, display: 'Number'}
  ]

  it('should shallow render itself', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' />)
    expect(!!wrapper.find('.typeahead-component')).to.equal(true)
    expect(wrapper.find(Loader)).to.have.length(0)
  })

  it('should have placeholder text', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' placeholder='test' />)
    expect(wrapper.childAt(0).props().placeholder).to.equal('test')
  })

  it('should be disabled', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' disabled={true} />)
    expect(wrapper.childAt(0).props().disabled).to.be.true
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' optClass='test-class' />)
    expect(!!wrapper.find('.test-class')).to.equal(true)
  })

  it('should display a list when the user types a letter', () => {
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' />)
    wrapper.find('input').simulate('change', {target: {value: 'a'}})
    expect(!!wrapper.find('.typeahead-list')).to.equal(true)
    expect(wrapper.childAt(1).find('li')).to.have.length(2)
  })

  it('should display a loader', () => {
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' loading={true} />)
    expect(wrapper.childAt(1).type()).to.equal(Loader)
  })

  it('should take a search callback', () => {
    const promiseOptions = [
      {value: 'US', display: 'United States'}
    ]
    const searchStub = sinon.stub().returns(Promise.resolve(promiseOptions))
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' searchCallback={searchStub} />)
    wrapper.find('input').simulate('change', {target: {value: 'b'}})
    expect(searchStub.calledWithExactly('b')).to.be.true
  })

  it('should update when props are set', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' value={10} optClass='test-class' />)
    expect(wrapper.childAt(0).props().value).to.equal('Number')
  })

})
