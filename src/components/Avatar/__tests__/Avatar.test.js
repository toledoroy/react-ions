import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../Avatar'
import renderer from 'react-test-renderer'

const data = {
  src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
  alt: 'Cat',
  size: '100',
  letterBackgroundColor: '#8b0000',
  letters: 'cf',
  fadeIn: true,
  optClass: 'test'
}

describe('Image-based Avatar', () => {
  it('should shallow render with image-related props', () => {
    const avatar = shallow(<Avatar
      src={data.src}
      alt={data.alt}
      size={data.size}
      fadeIn={data.fadeIn}
      optClass={data.optClass}
    />)
    expect(avatar).toMatchSnapshot()
  })
})

describe('Letter-based avatar', () => {
  it('should shallow render with letter-related props', () => {
    const avatar = shallow(<Avatar
      letterBackgroundColor={data.letterBackgroundColor}
      letters={data.letters}
      size={data.size}
      fadeIn={data.fadeIn}
      optClass={data.optClass}
    />)
    expect(avatar).toMatchSnapshot()
  })
})
