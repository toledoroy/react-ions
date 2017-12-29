import React from 'react'
import { shallow } from 'enzyme'
import { Alert } from '../src/components/Alerts'

describe('Alert', () => {
  let wrapper

  it('should display a default alert (success)', () => {
    wrapper = shallow(<Alert>Test alert</Alert>)

    expect(wrapper.hasClass('alert')).to.be.true
    expect(wrapper.hasClass('success')).to.be.true
    expect(wrapper.find('[name="icon-check-2-1"]')).to.have.length(1)
  })

  it('should display a success alert', () => {
    wrapper = shallow(<Alert type="success">Test alert</Alert>)

    expect(wrapper.hasClass('alert')).to.be.true
    expect(wrapper.hasClass('success')).to.be.true
    expect(wrapper.find('[name="icon-check-2-1"]')).to.have.length(1)
  })

  it('should display a warning alert', () => {
    wrapper = shallow(<Alert type="warning">Test alert</Alert>)

    expect(wrapper.hasClass('alert')).to.be.true
    expect(wrapper.hasClass('warning')).to.be.true
    expect(wrapper.find('[name="icon-alert-1"]')).to.have.length(1)
  })

  it('should display an info alert', () => {
    wrapper = shallow(<Alert type="info">Test alert</Alert>)

    expect(wrapper.hasClass('alert')).to.be.true
    expect(wrapper.hasClass('info')).to.be.true
    expect(wrapper.find('[name="icon-information"]')).to.have.length(1)
  })

  it('should display a danger alert', () => {
    wrapper = shallow(<Alert type="danger">Test alert</Alert>)

    expect(wrapper.hasClass('alert')).to.be.true
    expect(wrapper.hasClass('danger')).to.be.true
    expect(wrapper.find('[name="icon-highlight-off"]')).to.have.length(1)
  })

})
