import React from 'react'
import { shallow } from 'enzyme'
import Chip from '../src/components/Chip'

describe('Chip', () => {
  const shallowRender = (propOverrides) => {
    return shallow(
      <Chip {...propOverrides} />
    )
  }

  it('should render itself', () => {
    const wrapper = shallowRender()
    expect(wrapper.hasClass('chip-wrapper primary')).to.be.true
  })

  it('should render with an optClass', () => {
    const wrapper = shallowRender({optClass: 'test'})
    expect(wrapper.hasClass('chip-wrapper primary test')).to.be.true
  })

  it('should render with a color class', () => {
    const wrapper = shallowRender({color: 'danger'})
    expect(wrapper.hasClass('chip-wrapper danger')).to.be.true
  })

  it('should render with a size class', () => {
    const wrapper = shallowRender({size: 'smaller'})
    expect(wrapper.hasClass('chip-wrapper primary smaller')).to.be.true
  })

  it('should render with an actionable class', () => {
    const wrapper = shallowRender({onClick: () => { }})
    expect(wrapper.hasClass('chip-wrapper primary actionable')).to.be.true
  })
})
