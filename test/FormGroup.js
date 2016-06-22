import React from 'react'
import { shallow, mount } from 'enzyme'
import FormGroup from '../src/components/FormGroup'
import Input from '../src/components/Input'
import Textarea from '../src/components/Textarea'
import Toggle from '../src/components/Toggle'

describe('FormGroup', () => {
  let formGroup

  it('should shallow render itself', () => {
    formGroup = shallow(<FormGroup />)
    expect(formGroup.find('form')).to.have.length(1)
    expect(formGroup.hasClass('form-group')).to.equal(true)
    expect(typeof formGroup.props().onSubmit).to.equal('function')
  })

  it('should render with an optional CSS class', () => {
    formGroup = shallow(<FormGroup optClass='test' />)
    expect(formGroup.hasClass('form-group test')).to.equal(true)
  })

  it('should render a fieldset with child nodes', () => {
    const schema = {
      'subject': {
        'value':'This is my subject'
      },
      'message': {
        'value':'This is my message'
      }
    }

    formGroup = shallow(
      <FormGroup schema={schema}>
        <Input name='subject' label='Subject line' type='text' />
        <Textarea name='message' label='Message' />
        <Toggle name='toggle' label='Toggle' />
      </FormGroup>)
    expect(formGroup.childAt(0).type()).to.equal('fieldset')
    expect(formGroup.childAt(0).hasClass('fieldset')).to.equal(true)
    expect(formGroup.childAt(0).children()).to.have.length(3)
  })

  it('should update the state when a change is made', () => {
    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    formGroup = mount(<FormGroup schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)
    let input = formGroup.childAt(0).childAt(0).childAt(1)

    expect(formGroup.state().fields.subject.value).to.equal('This is my subject')
    input.simulate('change', {target: {value: 'a'}})
    // expect(formGroup.state().fields.subject.value).to.equal('This is my subjecta')
  })

  it('should render a fieldset without a form wrapper', () => {
    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    formGroup = shallow(
      <FormGroup schema={schema} nested={true}>
        <Input name='subject' label='Subject line' type='text' />
      </FormGroup>)

      expect(formGroup.type()).to.equal('fieldset')
      expect(formGroup.hasClass('fieldset')).to.equal(true)
  })

})
