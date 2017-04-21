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

  it('should shallow render an image', () => {
    wrapper = shallow(<Avatar src={data[0].src} />)

    expect(wrapper.props().className).to.equal('avatar-wrapper')
    expect(wrapper.find('img')).to.have.length(1)
    expect(wrapper.state().loaded).to.be.false
  })

  it('should shallow render a fallback avatar', () => {
    wrapper = shallow(<Avatar letters='cf' />)

    expect(wrapper.find('img')).to.have.length(0)
    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find('span').first().text()).to.equal('cf')
    expect(wrapper.state().loaded).to.be.true
  })

  it('should shallow render a fallback avatar with no more than two letters', () => {
    wrapper = shallow(<Avatar letters='cfffff' />)

    expect(wrapper.find('span').first().text()).to.equal('cf')
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

  it('should set the loading state to true', () => {
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

  it('should return a style object for the wrapper', () => {
    wrapper = shallow(<Avatar size='100' letterBackgroundColor='#ffffff' />)

    inst = wrapper.instance()
    const style = inst.getWrapperStyle()

    expect(style.width).to.equal('100px')
    expect(style.height).to.equal('100px')
    expect(style.backgroundColor).to.equal('#ffffff')
  })

 it('should return a style object for the text', () => {
    wrapper = shallow(<Avatar size='100' />)

    inst = wrapper.instance()
    const style = inst.getTextStyle()

    expect(style.fontSize).to.equal('60px')
  })

 it('should only update under certain circumstances', () => {
    wrapper = shallow(<Avatar size='100' src='test' letters='aa' />)

    inst = wrapper.instance()
    let nextProps = {
      size: '100',
      src: 'test',
      letters: 'aa'
    }
    let nextState = {
      loaded: false
    }

    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    nextProps.size = '90'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    nextProps.size = '100'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    nextProps.letters = 'ab'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    nextProps.letters = 'aa'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    nextProps.src = 'test2'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    nextProps.src = 'test'
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    nextState.loaded = true
    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
 })

 it('should return a proper background color based on the first character of the letter', () => {
    wrapper = shallow(<Avatar letters='ab' />)

    inst = wrapper.instance()
    expect(inst.getBackgroundColor()).to.equal('#F93943')

    wrapper.setProps({ letters: undefined })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93943')

    wrapper.setProps({ letters: 'k' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93943')

    wrapper.setProps({ letters: 'u' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93943')

    wrapper.setProps({ letters: 'b' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#796DE8')

    wrapper.setProps({ letters: 'l' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#796DE8')

    wrapper.setProps({ letters: 'v' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#796DE8')

    wrapper.setProps({ letters: 'c' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#6E3FAF')

    wrapper.setProps({ letters: 'm' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#6E3FAF')

    wrapper.setProps({ letters: 'w' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#6E3FAF')

    wrapper.setProps({ letters: 'd' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#28D397')

    wrapper.setProps({ letters: 'n' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#28D397')

    wrapper.setProps({ letters: 'x' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#28D397')

    wrapper.setProps({ letters: 'e' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#ED7C5A')

    wrapper.setProps({ letters: 'o' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#ED7C5A')

    wrapper.setProps({ letters: 'y' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#ED7C5A')

    wrapper.setProps({ letters: 'f' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93983')

    wrapper.setProps({ letters: 'p' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93983')

    wrapper.setProps({ letters: 'z' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F93983')

    wrapper.setProps({ letters: 'g' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F9B339')

    wrapper.setProps({ letters: 'q' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#F9B339')

    wrapper.setProps({ letters: 'h' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#6BE2F9')

    wrapper.setProps({ letters: 'r' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#6BE2F9')

    wrapper.setProps({ letters: 'i' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#AAE667')

    wrapper.setProps({ letters: 's' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#AAE667')

    wrapper.setProps({ letters: 'j' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#ED7BE9')

    wrapper.setProps({ letters: 't' })
    wrapper.update()
    expect(inst.getBackgroundColor()).to.equal('#ED7BE9')
 })
})
