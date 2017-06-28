import React from 'react'
import { shallow, mount } from 'enzyme'
import Loader from 'react-loader'
import Input from '../src/components/Input/Input'
import { Typeahead } from '../src/components/Typeahead/Typeahead'

describe('Typeahead', () => {
  let wrapper

  const options = [
    {value: 'AT', display: 'Austria'},
    {value: 'BM', display: 'Bermuda'},
    {value: 10, display: 'Number'}
  ]

  it('should shallow render itself', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' />)
    expect(!!wrapper.find('.typeahead-component')).to.equal(true)
    expect(wrapper.find(Loader)).to.have.length(0)
    expect(wrapper.find(Input)).to.have.length(1)
  })

  it('should have placeholder text', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' placeholder='test' />)
    expect(wrapper.childAt(0).childAt(0).props().placeholder).to.equal('test')
  })

  it('should have a label', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' label='Typeahead Label' />)

    expect(wrapper.childAt(0).type()).to.equal('label')
    expect(wrapper.childAt(0).text()).to.equal('Typeahead Label')
  })

  it('should be disabled', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' disabled={true} />)
    expect(wrapper.childAt(0).childAt(0).props().disabled).to.be.true
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' optClass='test-class' />)
    expect(!!wrapper.find('.test-class')).to.equal(true)
  })

  it('should display a list when the user types a letter', () => {
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' />)
    wrapper.find('input').simulate('change', {target: {value: 'a'}})

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

  it('should have a custom search debounce time', (done) => {
    const promiseOptions = [
      {value: 'US', display: 'United States'}
    ]
    const searchStub = sinon.stub().returns(Promise.resolve(promiseOptions))
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' searchCallback={searchStub} searchDebounceTime={200} />)
    wrapper.find('input').simulate('change', {target: {value: 'b'}})

    expect(searchStub.calledWithExactly('b')).to.be.false

    setTimeout(() => {
      expect(searchStub.calledWithExactly('b')).to.be.true
      done()
    }, 400)
  })

  it('should update when props are set', () => {
    wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' value={10} optClass='test-class' />)
    expect(wrapper.childAt(0).childAt(0).props().value).to.equal('Number')
  })

  it('should not clear search string after selection', () => {
    wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' />)

    let inputField = wrapper.find('input')

    inputField.simulate('change', {target: {value: 'a'}})
    expect(inputField.node.value).to.equal('a')

    wrapper.childAt(1).childAt(0).simulate('click')
    expect(inputField.node.value).to.equal(options[0].display)
  })

  it('should clear search string after selection', () => {
    wrapper = mount(<Typeahead resetAfterSelection={true} options={options} valueProp='value' displayProp='display' />)

    let inputField = wrapper.find('input')

    inputField.simulate('change', {target: {value: 'a'}})
    expect(inputField.node.value).to.equal('a')

    wrapper.childAt(0).childAt(1).childAt(0).simulate('click')
    expect(inputField.node.value).to.equal('')
  })

  it('should clear search when the clear button is clicked', () => {
    wrapper = mount(<Typeahead resetAfterSelection={true} options={options} valueProp='value' displayProp='display' changeCallback={sinon.spy()} />)

    let inputField = wrapper.find('input')

    inputField.simulate('change', {target: {value: 'a'}})
    expect(inputField.node.value).to.equal('a')

    wrapper.childAt(1).childAt(0).simulate('click')
    expect(inputField.node.value).to.equal('')
  })

  it('should clear search string when input value is an empty string', () => {
    const changeCallback = sinon.spy()
    wrapper = mount(<Typeahead name='typeahead' resetAfterSelection={true} options={options} valueProp='value' displayProp='display' changeCallback={changeCallback} />)

    let inputField = wrapper.find('input')

    inputField.simulate('change', {target: {value: 'a'}})
    expect(wrapper.state().searchStr).to.equal('a')

    inputField.simulate('change', {target: {value: ''}})
    expect(wrapper.state().searchStr).to.equal('')
    expect(changeCallback.calledWithExactly({ target: { name: 'typeahead', value: '', option: '' } })).to.be.true
  })

  it('should set state when props are received', () => {
    const changeCallback = sinon.spy()
    wrapper = mount(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' changeCallback={changeCallback} />)

    wrapper.setProps({ value: 'AT' })

    expect(wrapper.state().selected.value).to.equal('AT')
    expect(wrapper.state().selected.display).to.equal('Austria')

    wrapper.setProps({ value: '' })

    expect(wrapper.state().selected).to.equal('')
  })

  it('should allow a custom value', () => {
    const changeCallback = sinon.spy()
    wrapper = mount(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' allowCustomValue={true} changeCallback={changeCallback} />)

    let inputField = wrapper.find('input')
    inputField.simulate('change', {target: {value: 'a random string'}})
    expect(changeCallback.calledWithExactly({ target: { name: 'typeahead', value: 'a random string' } })).to.be.true
  })

  it('should update according to sCU logic', () => {
    const changeCallback = sinon.spy()
    wrapper = mount(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' allowCustomValue={true} changeCallback={changeCallback} />)

    let inputField = wrapper.find('input')
    inputField.simulate('change', {target: {value: 'a random string'}})

    expect(wrapper.instance().shouldComponentUpdate({ value: 'test' })).to.be.true
  })
})
