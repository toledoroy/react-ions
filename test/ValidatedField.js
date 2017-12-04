import React from 'react'
import { shallow } from 'enzyme'
import ValidatedField from '../src/components/FormGroup/ValidatedField'
import Input from '../src/components/Input'

describe('ValidatedField', () => {
  let wrapper

  const ValidatedInput = ValidatedField(Input)

  it('should shallow render itself', () => {
    wrapper = shallow(<ValidatedInput error='Error here.' />)

    expect(wrapper.find(Input)).to.be.length(1)
    expect(wrapper.childAt(0).hasClass('has-error')).to.be.true
    expect(wrapper.childAt(1).hasClass('has-error__message')).to.be.true
  })
})
