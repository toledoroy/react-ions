import closest from '../src/components/internal/Closest'

describe('Closest', () => {
  it('should return null if no element is passed', () => {
    expect(closest(null, 'test')).to.be.null
  })
})
