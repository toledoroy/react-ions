import React from 'react'
import { shallow, mount } from 'enzyme'
import { SortableItemPreview } from '../src/components/SortableList'

describe('SortableItemPreview', () => {
  let wrapper

  const items = [
    {
      index: 0,
      text: 'Email',
      value: 'email'
    },
    {
      index: 1,
      text: 'Push Notification',
      value: 'push_notification',
    },
    {
      index: 2,
      text: 'Web',
      value: 'web'
    },
    {
      index: 3,
      text: 'SMS',
      value: 'sms'
    }
  ]

  it('should shallow render itself', () => {
    wrapper = shallow(<SortableItemPreview item={items[0]} count={1} />)

    expect(wrapper.hasClass('sortable-item')).to.equal(true)
    expect(wrapper.find('Icon')).to.have.length(1)
    expect(wrapper.find('Badge')).to.have.length(1)
  })

  it('should reduce badge opacity on every following item', () => {
    wrapper = mount(<SortableItemPreview item={items[0]} count={4} />)

    expect(wrapper.childAt(0).node.style.opacity).to.be.equal('1')
    expect(wrapper.childAt(0).text()).to.be.equal('1')

    wrapper = mount(<SortableItemPreview item={items[1]} count={4} />)

    expect(wrapper.childAt(0).node.style.opacity).to.be.equal('0.8')
    expect(wrapper.childAt(0).text()).to.be.equal('2')

    wrapper = mount(<SortableItemPreview item={items[2]} count={4} />)

    expect(wrapper.childAt(0).node.style.opacity).to.be.equal('0.6')
    expect(wrapper.childAt(0).text()).to.be.equal('3')

    wrapper = mount(<SortableItemPreview item={items[3]} count={4} />)

    expect(wrapper.childAt(0).node.style.opacity).to.be.equal('0.4')
    expect(wrapper.childAt(0).text()).to.be.equal('4')
  })

})
