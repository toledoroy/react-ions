import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import MultiSelect from '../src/components/MultiSelect/MultiSelect'
import SelectField from '../src/components/SelectField/SelectField'
import Typeahead from '../src/components/Typeahead/Typeahead'

describe('MultiSelect', () => {
  let wrapper

  const options = [
    {value: '0', display: 'test 1'},
    {value: '1', display: 'test 2'},
    {value: '2', display: 'test 3'},
    {value: '3', display: 'test 4'}
  ]

  it('should render itself with a SelectField', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display'><SelectField options={options} valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(SelectField)).to.have.length(1)
  })

  it('should contain a SelectField and have values selected', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><SelectField options={options} valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')
    expect(wrapper.state().selected[0].value).to.equal('0')
    expect(wrapper.state().selected[0].display).to.equal('test 1')
    expect(wrapper.state().selected[1].value).to.equal('2')
    expect(wrapper.state().selected[1].display).to.equal('test 3')

    expect(wrapper.find(SelectField).props().options).to.have.length(2)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('1')
    expect(wrapper.find(SelectField).props().options[0].display).to.equal('test 2')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('3')
    expect(wrapper.find(SelectField).props().options[1].display).to.equal('test 4')
  })

  it('should contain a SelectField and have a placeholder', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' placeholder="This is a placeholder"><SelectField options={options} valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(SelectField).props().placeholder).to.equal('This is a placeholder')
  })

  it('should contain a SelectField and update the state when the value property changes', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><SelectField options={options} valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    expect(wrapper.find(SelectField).props().options).to.have.length(2)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('1')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('3')

    wrapper.setProps({ value: ['1'] })
    wrapper.update()

    expect(wrapper.state().value).to.have.length(1)
    expect(wrapper.state().value[0]).to.equal('1')

    expect(wrapper.find(SelectField).props().options).to.have.length(3)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('0')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('2')
    expect(wrapper.find(SelectField).props().options[2].value).to.equal('3')
  })




  it('should render itself with a Typeahead', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display'><Typeahead options={options} valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(Typeahead)).to.have.length(1)
  })
})
