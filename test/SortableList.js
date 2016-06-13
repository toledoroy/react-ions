import React from 'react'
import { shallow, mount } from 'enzyme'
import TestBackend from 'react-dnd-test-backend'
import { DragDropContext } from 'react-dnd'
import TestUtils from 'react-addons-test-utils'
import { SortableList, SortableItem } from '../src/components/SortableList'

let Component = React.Component

describe('SortableList', () => {
  let wrapper
  const items = [
    {
      value: 'email',
      text: 'Email',
      active: false
    }, {
      value: 'push_notification',
      text: 'Push Notification',
      active: true
    }, {
      value: 'web',
      text: 'Web',
      active: false
    }, {
      value: 'sms',
      text: 'SMS',
      active: false
    }
  ]

  /**
   * Wraps a component into a DragDropContext that uses the TestBackend.
   */
  function wrapInTestContext(DecoratedComponent) {
    return DragDropContext(TestBackend)(
      class TestContextContainer extends Component {
        render() {
          return <DecoratedComponent {...this.props} />
        }
      }
    )
  }

  it('should render itself', () => {
    wrapper = mount(<SortableList items={items} />)

    expect(wrapper.find('SortableList')).to.have.length(1)
    expect(wrapper.find('SortableItem')).to.have.length(4)

    expect(wrapper.childAt(0).childAt(0).props().value).to.be.equal('email')
    expect(wrapper.childAt(0).childAt(0).props().text).to.be.equal('Email')
    expect(wrapper.childAt(0).childAt(1).props().value).to.be.equal('push_notification')
    expect(wrapper.childAt(0).childAt(1).props().text).to.be.equal('Push Notification')
    expect(wrapper.childAt(0).childAt(2).props().value).to.be.equal('web')
    expect(wrapper.childAt(0).childAt(2).props().text).to.be.equal('Web')
    expect(wrapper.childAt(0).childAt(3).props().value).to.be.equal('sms')
    expect(wrapper.childAt(0).childAt(3).props().text).to.be.equal('SMS')
  })

  it('should update state when an item is toggled', () => {
    wrapper = mount(<SortableList items={items} />)

    expect(wrapper.childAt(0).childAt(0).props().active).to.be.false
    expect(wrapper.childAt(0).childAt(1).props().active).to.be.true
    expect(wrapper.childAt(0).childAt(2).props().active).to.be.false
    expect(wrapper.childAt(0).childAt(3).props().active).to.be.false

    wrapper.childAt(0).childAt(0).childAt(2).childAt(0).simulate('click')

    expect(wrapper.childAt(0).childAt(0).props().active).to.be.true
    expect(wrapper.childAt(0).childAt(1).props().active).to.be.true
    expect(wrapper.childAt(0).childAt(2).props().active).to.be.false
    expect(wrapper.childAt(0).childAt(3).props().active).to.be.false

    wrapper.childAt(0).childAt(0).childAt(2).childAt(0).simulate('click')

    expect(wrapper.childAt(0).childAt(0).props().active).to.be.false
    expect(wrapper.childAt(0).childAt(1).props().active).to.be.true
    expect(wrapper.childAt(0).childAt(2).props().active).to.be.false
    expect(wrapper.childAt(0).childAt(3).props().active).to.be.false
  })

  it('should trigger a callback when an item is toggled', () => {
    let sortableItems = items
    const changeCallback = function(event) {
      sortableItems = event.target.value
    }
    wrapper = mount(<SortableList items={items} changeCallback={changeCallback} />)

    expect(sortableItems[0].active).to.be.false
    expect(sortableItems[1].active).to.be.true
    expect(sortableItems[2].active).to.be.false
    expect(sortableItems[3].active).to.be.false

    wrapper.childAt(0).childAt(0).childAt(2).childAt(0).simulate('click')

    expect(sortableItems[0].active).to.be.true
    expect(sortableItems[1].active).to.be.true
    expect(sortableItems[2].active).to.be.false
    expect(sortableItems[3].active).to.be.false

    wrapper.childAt(0).childAt(0).childAt(2).childAt(0).simulate('click')

    expect(sortableItems[0].active).to.be.false
    expect(sortableItems[1].active).to.be.true
    expect(sortableItems[2].active).to.be.false
    expect(sortableItems[3].active).to.be.false
  })

  it('should update the state when props change', () => {
    wrapper = mount(<SortableList items={items} />)

    expect(wrapper.find('SortableItem')).to.have.length(4)

    wrapper.setProps({ items: [{ value: 'email', text: 'Email', active: false }, { value: 'push_notification', text: 'Push Notification', active: true }, { value: 'web', text: 'Web', active: false }] })
    wrapper.update()

    expect(wrapper.find('SortableItem')).to.have.length(3)
  })

  it('should remove event listener when the component is unmounted', () => {
    const spy = sinon.spy(window, 'removeEventListener')
    wrapper = mount(<SortableList items={items} />)

    wrapper.unmount()

    expect(spy.called).to.be.true
  })

  it('should reorder items when dragging', () => {
    let sortableItems = items
    const changeCallback = (event) => {
      sortableItems = event.target.value
    }

    expect(sortableItems[0].value).to.equal('email')
    expect(sortableItems[1].value).to.equal('push_notification')
    expect(sortableItems[2].value).to.equal('web')
    expect(sortableItems[3].value).to.equal('sms')

    const SortableListContext = wrapInTestContext(SortableList)
    const root = TestUtils.renderIntoDocument(<SortableList items={items} changeCallback={changeCallback} />)

    // Obtain a reference to the backend
    const backend = root.getManager().getBackend()
    const registry = root.getManager().getRegistry()

    // Find the drag source ID and use it to simulate the dragging operation
    const allItems = TestUtils.scryRenderedComponentsWithType(root, SortableItem)
    const source = allItems[0]
    const target = allItems[1]
    const sourceId = source.getDecoratedComponentInstance().getHandlerId()
    const targetId = target.getHandlerId()

    backend.actions.beginDrag([sourceId])
    backend.actions.hover([targetId])
    backend.actions.drop()
    backend.actions.endDrag()

    expect(sortableItems[0].value).to.equal('push_notification')
    expect(sortableItems[1].value).to.equal('email')
    expect(sortableItems[2].value).to.equal('web')
    expect(sortableItems[3].value).to.equal('sms')
  })
})
