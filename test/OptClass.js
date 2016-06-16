import React from 'react'
import optclass from '../src/components/internal/OptClass'

describe('OptClass', () => {
  it('should return a single class', () => {
    let style = {
      'test-class': 'test-class-45554'
    }
    let testClasses = optclass(style, 'test-class')
    expect(testClasses).to.be.equal('test-class-45554')
  })

  it('should return multiple classes', () => {
    let style = {
      'test-class': 'test-class-45554',
      'test-class-2': 'test-class-hdh8'
    }
    let testClasses = optclass(style, ['test-class', 'test-class-2'])
    expect(testClasses).to.be.equal('test-class-45554 test-class-hdh8')
  })

  it('should return an array of pure classes', () => {
    let style = {}
    let testClasses = optclass(style, ['test-class', 'test-class-2'])
    expect(testClasses).to.be.equal('test-class test-class-2')
  })

  it('should handle an undefined arg', () => {
    let style = {}
    let testClasses = optclass(style, ['test-class', undefined])
    expect(testClasses).to.be.equal('test-class')
  })
})
