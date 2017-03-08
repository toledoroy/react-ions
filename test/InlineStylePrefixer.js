import InlineStylePrefixer from '../src/components/internal/InlineStylePrefixer'

describe('Helpers::InlineStylePrefixer', () => {
  it('should return an auto-prefixed style object', () => {
    const styles = InlineStylePrefixer({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none'
    })

    const expectedStyles = {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'userSelect': 'none'
    }

    console.log('styles', styles)
    console.log('expectedStyles', expectedStyles)

    expect(styles).to.deep.equal(expectedStyles)
  })
})
