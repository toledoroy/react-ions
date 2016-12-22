import React from 'react'
import prefix from '../src/components/internal/Prefix'

describe('Prefix', () => {
  const rawStyle = {
    'badge': 'badge-2XoK3',
    'heavy': 'heavy-2QNc2'
  }

  const rawStyle2 = {
    'badge': 'badge',
    'heavy': 'heavy'
  }

  const expectedStyle2 = {
    'badge': 'mbsy-badge',
    'heavy': 'mbsy-heavy'
  }

  it('when provided an object of key/value pairs, it should return the same object', () => {
    let style = prefix(rawStyle)
    expect(style).to.deep.equal(rawStyle)
  })

  it('when provided an object of key/value pairs, it should return an object with mbsy- prefix', () => {
    let style = prefix(rawStyle2)
    expect(style).to.deep.equal(expectedStyle2)
  })
})
