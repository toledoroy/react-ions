import React from 'react'
import { shallow, mount } from 'enzyme'
import FormGroup from '../src/components/FormGroup'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Textarea from '../src/components/Textarea'
import Toggle from '../src/components/Toggle'

describe('FormGroup', () => {
  let formGroup, wrapper

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

  it('should update the state when props are passed', () => {
    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    const schema2 = {
      'subject': {
        'value':'This is my answer'
      }
    }

    wrapper = mount(<FormGroup schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)
    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my subject')

    wrapper.setProps({ schema: schema2 })
    wrapper.update()

    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my answer')
  })

  it('should set the state when a form input is changed', () => {
    const changeCallback = sinon.spy()

    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    wrapper = mount(<FormGroup changeCallback={changeCallback} schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)

    wrapper.find('input').simulate('change', {
      target: {
        name: 'subject',
        value: 'This is my answer'
      }
    })

    expect(changeCallback.calledOnce).to.be.true
    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my answer')
  })

  it('should not manipulate provided schema outside to the changeCallback', () => {
    const changeCallback = sinon.spy()

    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    wrapper = mount(<FormGroup changeCallback={changeCallback} schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)

    wrapper.find('input').simulate('change', {
      target: {
        name: 'subject',
        value: 'This is my answer'
      }
    })

    expect(schema.subject.value).to.equal('This is my subject')
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

  it('should call a submit callback', () => {
    const submitCallback = sinon.spy()

    const schema = {
      'subject': {
        'value':'This is my subject'
      }
    }

    wrapper = mount(<FormGroup submitCallback={submitCallback} schema={schema}><Input name='subject' label='Subject line' type='text' /><Button type='submit' /></FormGroup>)
    const button = wrapper.find(Button)

    button.simulate('submit')

    expect(submitCallback.calledOnce).to.be.true
  })

})
