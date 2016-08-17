import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../src/components/Avatar'

describe('Avatar', () => {
  let wrapper, inst

  const data = [
    {
      src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
      alt: 'Cat',
      size: '100'
    },
    {
      src: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
      alt: 'Lamb',
      size: '100'
    },
    {
      src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
      alt: 'Cat',
      size: '200'
    }
  ]

  it('should shallow render', () => {
    wrapper = shallow(<Avatar src={data[0].src} />)
    expect(wrapper.props().className).to.equal('avatar-wrapper')
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should render an image with props', () => {
    wrapper = shallow(<Avatar src={data[0].src} alt={data[0].alt} size={data[0].size} />)
    expect(wrapper.childAt(0).props().src).to.equal(data[0].src)
    expect(wrapper.childAt(0).props().alt).to.equal(data[0].alt)
    expect(wrapper.childAt(0).props().height).to.equal(data[0].size)
  })

  it('should render when it receives props', () => {
    wrapper = shallow(<Avatar src={data[0].src} alt={data[0].alt} size={data[0].size} />)
    wrapper.setProps(data[1])
    wrapper.update()

    expect(wrapper.childAt(0).props().src).to.equal(data[1].src)
    expect(wrapper.childAt(0).props().alt).to.equal(data[1].alt)
    expect(wrapper.childAt(0).props().height).to.equal(data[1].size)
  })

  it('should set the loading state the true', () => {
    wrapper = shallow(<Avatar src={data[0].src} alt={data[0].alt} size={data[0].size} />)
    wrapper.setState({loaded: false})
    inst = wrapper.instance()
    inst.handleLoad()
    expect(wrapper.state().loaded).to.equal(true)
  })

  it('should take an optClass', () => {
    wrapper = shallow(<Avatar src={data[0].src} optClass='test' />)
    expect(wrapper.props().className).to.equal('avatar-wrapper test')
  })
})
