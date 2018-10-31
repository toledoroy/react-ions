import React from 'react'
import { shallow } from 'enzyme'
import Spinner from '../Spinner'

describe('Spinner: Dots', () => {
  it('displays a dots spinner', () => {
    const spinner = shallow(<Spinner type='spinner-dots' />)
    expect(spinner).toMatchSnapshot()
  })
})

describe('Spinner: Bounce', () => {
  it('displays a bounce spinner', () => {
    const spinner = shallow(<Spinner type='spinner-bounce' />)
    expect(spinner).toMatchSnapshot()
  })
})

describe('Spinner: Loading state', () => {
  it('has a loading state', () => {
    const spinner = shallow(<Spinner loading={true} type='spinner-bounce' />)
    expect(spinner).toMatchSnapshot()
  })
})  

describe('Spinner: position: fixed', () => {
  it('has a loading state', () => {
    const spinner = shallow(<Spinner loading={true} type='spinner-bounce' position='fixed' />)
    expect(spinner).toMatchSnapshot()
  })
})

describe('Spinner: position: inline', () => {
  const spinner = shallow(<Spinner loading={true} type='spinner-bounce' position='inline' />)
  expect(spinner).toMatchSnapshot()
})

describe('Spinner: optClass', () => {
  const spinner = shallow(<Spinner loading={true} type='spinner-bounce' optClass='testing' />)
  expect(spinner).toMatchSnapshot()
})

describe('Spinner: custom color', () => {
  const spinner = shallow(<Spinner loading={true} type='spinner-bounce' color='#3C97D3' />)
  expect(spinner).toMatchSnapshot()
})

describe('Spinner: hidden', () => {
  const spinner = shallow(<Spinner loading={false} type='spinner-bounce' />)
  expect(spinner).toMatchSnapshot()
})

describe('Spinner: after delay', () => {
  const spinner = shallow(<Spinner loading={true} type='spinner-bounce' delay={500} />)
  expect(spinner).toMatchSnapshot()    
})

