import React from 'react'
import Avatar from '../Avatar'
import renderer from 'react-test-renderer'

const data = {
  src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
  alt: 'Cat',
  size: '100'
}

it('should shallow render an image', () => {
  const tree = renderer
    .create(<Avatar
      src={data.src}
      alt={data.alt}
      size={data.size}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should shallow render a fallback avatar', () => {
  const tree = renderer
    .create(<Avatar letters='cf' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should take an optClass', () => {
  const tree = renderer
    .create(<Avatar src={data.src} optClass='test' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})