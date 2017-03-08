import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb'
import Icon from '../src/components/Icon/Icon'

describe('Breadcrumb', () => {
  let wrapper
  let routes = [
    {
      path: '/',
      title: undefined
    }
  ]

  it('should shall render with no children', () => {
    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.find('h2')).to.have.length(0)
    expect(wrapper.find('span')).to.have.length(0)
    expect(wrapper.find(Icon)).to.have.length(0)
    expect(wrapper.childAt(0).hasClass('overflow-gradient')).to.be.true
  })

  it('should shallow render itself with only a primary tag', () => {
    routes.push({
      path: 'foundations',
      title: 'Foundations'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)

    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.childAt(1).childAt(0).hasClass('breadcrumb')).to.equal(true)
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true)
    expect(wrapper.find('span')).to.have.length(0)
  })

  it('should shallow render itself with a primary tag, secondary tag, and an arrow icon', () => {
    routes.push({
      path: 'colors',
      title: 'Colors'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.find('em')).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(1)
    expect(wrapper.contains(<span className='secondary'>Colors</span>)).to.equal(true)
  })

  it('should shallow render itself with a primary tag, two secondary tags, and two arrow icons', () => {
    routes.push({
      path: 'test',
      title: 'Test'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.find('em')).to.have.length(2)
    expect(wrapper.find(Icon)).to.have.length(2)
  })

  it('should return a gradient style', () => {
    wrapper = shallow(<Breadcrumb routes={routes} gradientColor='red' />)
    expect(wrapper.instance().getGradientStyles()).to.deep.equal({background: 'linear-gradient(90deg, transparent, red)'})
  })

  it('should return a container style', () => {
    wrapper = shallow(<Breadcrumb routes={routes} padding={25} />)
    expect(wrapper.instance().getContainerStyles()).to.deep.equal({marginLeft: 25, paddingRight: 25})
  })
})
