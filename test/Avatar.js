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

 it.only('should only update under certain circumstances', () => {
    wrapper = shallow(<Avatar size='100' src='test' letters='aa' />)

    inst = wrapper.instance()
    let nextProps = {
      size: '100',
      src: 'test',
      letters: 'aa',
      fadein: true
    }

    let nextState = {
      loaded: false
    }

    expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    // nextProps.size = '90'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    // nextProps.size = '100'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    // nextProps.letters = 'ab'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    // nextProps.letters = 'aa'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    // nextProps.src = 'test2'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    // nextProps.src = 'test'
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.false
    // nextState.loaded = true
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
    // nextProps.fadeIn = false
    // expect(inst.shouldComponentUpdate(nextProps, nextState)).to.be.true
 })

 it('should return a proper background color based on the first character of the letter', () => {
    const colorCases = [
        {character: undefined, color: '#F93943'},
        {character: 'k', color: '#F93943'},
        {character: 'u', color: '#F93943'},
        {character: 'b', color: '#796DE8'},
        {character: 'l', color: '#796DE8'},
        {character: 'v', color: '#796DE8'},
        {character: 'c', color: '#6E3FAF'},
        {character: 'm', color: '#6E3FAF'},
        {character: 'w', color: '#6E3FAF'},
        {character: 'd', color: '#28D397'},
        {character: 'n', color: '#28D397'},
        {character: 'x', color: '#28D397'},
        {character: 'e', color: '#ED7C5A'},
        {character: 'o', color: '#ED7C5A'},
        {character: 'y', color: '#ED7C5A'},
        {character: 'f', color: '#F93983'},
        {character: 'p', color: '#F93983'},
        {character: 'z', color: '#F93983'},
        {character: 'g', color: '#F9B339'},
        {character: 'q', color: '#F9B339'},
        {character: 'h', color: '#6BE2F9'},
        {character: 'r', color: '#6BE2F9'},
        {character: 'i', color: '#AAE667'},
        {character: 's', color: '#AAE667'},
        {character: 'j', color: '#ED7BE9'},
        {character: 't', color: '#ED7BE9'},
        {character: 'K', color: '#F93943'},
        {character: 'U', color: '#F93943'},
        {character: 'B', color: '#796DE8'},
        {character: 'L', color: '#796DE8'},
        {character: 'V', color: '#796DE8'},
        {character: 'C', color: '#6E3FAF'},
        {character: 'M', color: '#6E3FAF'},
        {character: 'W', color: '#6E3FAF'},
        {character: 'D', color: '#28D397'},
        {character: 'N', color: '#28D397'},
        {character: 'X', color: '#28D397'},
        {character: 'E', color: '#ED7C5A'},
        {character: 'O', color: '#ED7C5A'},
        {character: 'Y', color: '#ED7C5A'},
        {character: 'F', color: '#F93983'},
        {character: 'P', color: '#F93983'},
        {character: 'Z', color: '#F93983'},
        {character: 'G', color: '#F9B339'},
        {character: 'Q', color: '#F9B339'},
        {character: 'H', color: '#6BE2F9'},
        {character: 'R', color: '#6BE2F9'},
        {character: 'I', color: '#AAE667'},
        {character: 'S', color: '#AAE667'},
        {character: 'J', color: '#ED7BE9'},
        {character: 'T', color: '#ED7BE9'},
        {character: '0', color: '#F93943'},
        {character: '1', color: '#F93943'},
        {character: '2', color: '#F93943'},
        {character: '3', color: '#F93943'},
        {character: '4', color: '#F93943'},
        {character: '5', color: '#F93943'},
        {character: '6', color: '#F93943'},
        {character: '7', color: '#F93943'},
        {character: '8', color: '#F93943'},
        {character: '9', color: '#F93943'}
    ]

    wrapper = shallow(<Avatar letters='ab' />)

    inst = wrapper.instance()
    expect(inst.getBackgroundColor()).to.equal('#F93943')

    for (let i = colorCases.length - 1; i >= 0; i--) {
        wrapper.setProps({ letters: colorCases[i].character})
        wrapper.update()
        expect(inst.getBackgroundColor()).to.equal(colorCases[i].color)
    }
  })

  it('should return a "loaded" CSS class when fadeIn is set', () => {
    wrapper = shallow(<Avatar fadeIn={false} />)
    expect(wrapper.hasClass('avatar-wrapper loaded')).to.be.true
  })
})
