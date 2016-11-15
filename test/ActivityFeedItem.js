import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { Link } from 'react-router'
import timeString from '../src/components/internal/TimeString'
import Icon from '../src/components/Icon'
import Tooltip from '../src/components/Tooltip'
import ActivityFeed from '../src/components/ActivityFeed/ActivityFeed'
import ActivityFeedItem from '../src/components/ActivityFeed/ActivityFeedItem'
import * as closestHelper from '../src/components/internal/Closest'

describe('ActivityFeedItem', () => {

  const data = [
    {
      name: 'The Badge Component',
      title: 'is pretty awesome.',
      profileUrl: '/components/badge',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '9',
        theme: 'success'
      }
    }, {
      name: 'The Nav Component',
      title: 'is really great, actually.',
      profileUrl: '/components/nav',
      text: 'Bacon ipsum dolor amet venison bresaola kevin chuck. Pig turkey alcatra beef ribs salami pork.',
      timestamp: '2016-05-05T18:19:08.936',
      actions: [
        {
          type: 'reply',
          icon: 'icon-back',
          callback: (type) => {
            alert(type)
          },
          callbackConfirmation: false
        }, {
          type: 'reply',
          icon: 'icon-arrow-68',
          callback: (type) => {
            alert(type)
          },
          callbackConfirmation: true
        }
      ],
      badge: {
        text: '7',
        theme: 'warning'
      }
    }, {
      name: 'External Link',
      profileUrl: 'https://getambassador.com/v3/c/manage/ambassadors/',
      profileUrlTarget: '_blank',
      title: 'is pretty awesome.',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '9',
        theme: 'success'
      }
    }, {
      name: 'The Nav Component',
      title: 'is really great, actually.',
      profileUrl: '/components/nav',
      text: 'Bacon ipsum dolor amet venison bresaola kevin chuck. Pig turkey alcatra beef ribs salami pork.',
      timestamp: '2016-05-05T18:19:08.936',
      actions: [
        {
          type: 'reply',
          icon: 'icon-back',
          callback: sinon.spy(),
          callbackConfirmation: true,
          tooltip: 'Action Tooltip'
        }
      ],
      badge: {
        text: '7',
        theme: 'warning'
      }
    }
  ]

  it('should render a name', () => {
    const wrapper = shallow(<ActivityFeedItem name={data[0].name} badge={data[0].badge} />)
    const nameWrapper = wrapper.find('.item-detail')
    expect(nameWrapper.childAt(0).props().className).to.equal('item-title')
    expect(nameWrapper.childAt(0).text()).to.equal(data[0].name + ' ')
  })

  it('should render a title', () => {
    const wrapper = shallow(<ActivityFeedItem title={data[0].title} badge={data[0].badge} />)
    const titleWrapper = wrapper.find('.item-detail')
    expect(titleWrapper.childAt(0).text()).to.equal(' ' + data[0].title)
  })

  it('should render a profile url', () => {
    const wrapper = shallow(<ActivityFeedItem name={data[0].name} profileUrl={data[0].profileUrl} badge={data[0].badge} />)
    const titleWrapper = wrapper.find('.item-detail')
    const linkWrapper = titleWrapper.childAt(0).childAt(0)
    expect(linkWrapper.type()).to.equal(Link)
    expect(linkWrapper.props().to).to.equal(data[0].profileUrl)
    expect(linkWrapper.childAt(0).text()).to.equal(data[0].name)
  })

  it('should render text', () => {
    const wrapper = shallow(<ActivityFeedItem text={data[0].text} badge={data[0].badge} />)
    const textWrapper = wrapper.childAt(1)
    expect(textWrapper.text().trim()).to.equal(data[0].text.trim())
  })

  it('should render an action block', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[1].actions} badge={data[1].badge} />)
    const actionWrapper = wrapper.find('.action-items')
    expect(actionWrapper.find(Icon)).to.have.length(2)
    expect(actionWrapper.childAt(0).props().name).to.equal(data[1].actions[0].icon)
    expect(actionWrapper.childAt(1).props().name).to.equal(data[1].actions[1].icon)
  })

  it('should run an onClick callback', () => {
    var spy = sinon.spy()
    var onSetHeight = sinon.spy()
    data[1].actions[0].callback = spy
    const wrapper = shallow(<ActivityFeedItem actions={data[1].actions} badge={data[1].badge} onSetHeight={onSetHeight} />)
    const actionWrapper = wrapper.childAt(1).childAt(1).childAt(0)
    expect(typeof actionWrapper.childAt(0).props().onClick).to.equal('function')
    actionWrapper.childAt(0).simulate('click')
    expect(spy.calledOnce).to.be.true
  })

  it('should link to an external URL when provided', () => {
    const wrapper = shallow(<ActivityFeedItem badge={data[2].badge} profileUrl={data[2].profileUrl} profileUrlTarget={data[2].profileUrlTarget}/>)
    const titleWrapper = wrapper.find('.item-detail')
    const linkWrapper = titleWrapper.childAt(0)
    const link = linkWrapper.childAt(0)

    expect(link.props().href).to.equal('https://getambassador.com/v3/c/manage/ambassadors/')
    expect(link.props().target).to.equal('_blank')
  })

  it('should set state and call props.onSetHeight when updateHeight is called', () => {
    const onSetHeight = sinon.stub()
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = ReactDOM.render(<ActivityFeedItem badge={data[0].badge} name={data[0].name} title={data[0].title} onSetHeight={onSetHeight} />, div)

    expect(onSetHeight.calledOnce).to.be.true

    ReactDOM.unmountComponentAtNode(div)
  })

  it('should handle the action callback', () => {
    const onSetHeight = sinon.stub()

    const localAction = {
      type: 'reply',
      icon: 'icon-back',
      callback: (type) => {
        alert(type)
      },
      callbackConfirmation: false
    }
    const wrapper = shallow(<ActivityFeedItem actions={data[1].actions} badge={data[1].badge} onSetHeight={onSetHeight} />)
    wrapper.instance().handleActionCallback(localAction)
    expect(wrapper.state().hasActiveAction).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null
  })

  it('should set state when mouse over tooltip', () => {
    const onSetHeight = sinon.stub()
    const wrapper = shallow(<ActivityFeedItem actions={data[1].actions} badge={data[1].badge} onSetHeight={onSetHeight} />)

    wrapper.instance().handleMouseOverTooltip()
    expect(wrapper.state().isHoveringTooltip).to.be.true

    wrapper.update()

    wrapper.instance().handleMouseOutTooltip()
    expect(wrapper.state().isHoveringTooltip).to.be.false
  })

  it('should handle confirmation', () => {
    const onSetHeight = sinon.stub()
    const wrapper = shallow(<ActivityFeedItem actions={data[1].actions} badge={data[1].badge} onSetHeight={onSetHeight} />)

    wrapper.instance().handleConfirmation(false)
    expect(wrapper.state().hasActiveAction).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null
  })

  it('should not render if currentState and nextState are the same', () => {
    const wrapper = shallow(<ActivityFeedItem name={data[0].name} badge={data[0].badge} />)
    const currentProps = { name: data[0].name, badge: data[0].badge }
    const nextProps = Object.assign(currentProps)
    const nextState = Object.assign(wrapper.state())

    expect(wrapper.instance().shouldComponentUpdate(nextProps, nextState)).to.be.false
  })

  it('should re-render if state has changed', () => {
    const wrapper = shallow(<ActivityFeedItem name={data[0].name} badge={data[0].badge} />)
    const currentProps = { name: data[0].name, badge: data[0].badge }
    const nextProps = Object.assign(currentProps)
    const nextState = Object.assign(wrapper.state(), {confirmationOverlayOpen: true})

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true
  })

  it('should allow re-render if props have changed', () => {
    const wrapper = shallow(<ActivityFeedItem name={data[0].name} badge={data[0].badge} />)
    const currentProps = { name: data[0].name, badge: data[0].badge }
    const nextProps = Object.assign(currentProps, { name: 'new name' })
    const nextState = Object.assign(wrapper.state())

    expect(wrapper.instance().shouldComponentUpdate(nextProps, nextState)).to.be.true
  })

  it('should show a callback confirmation when an action icon is clicked', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)
    const getActionOverlayOffsetStub = sinon.stub(wrapper.instance(), 'getActionOverlayOffset')
    const handleActionCallbackSpy = sinon.spy(wrapper.instance(), 'handleActionCallback')

    wrapper.instance().handleActionClick(1, data[3].actions[0], 'event')

    expect(getActionOverlayOffsetStub.called).to.be.true
    expect(wrapper.state().hasActiveAction).to.equal(1)
    expect(wrapper.state().confirmationOverlayOpen).to.be.true
    expect(wrapper.state().clickedItem).to.deep.equal(data[3].actions[0])
    expect(handleActionCallbackSpy.called).to.be.false
  })

  it('should close the confirmation when Cancel is clicked', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)
    wrapper.setState({ hasActiveAction: 1, confirmationOverlayOpen: true, clickedItem: data[3].actions[0] })

    wrapper.instance().handleConfirmation(false)

    expect(wrapper.state().hasActiveAction).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.equal(null)
  })

  it('should trigger the callback when Yes is clicked', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)
    const handleActionCallbackStub = sinon.stub(wrapper.instance(), 'handleActionCallback')
    wrapper.setState({ hasActiveAction: 1, confirmationOverlayOpen: true, clickedItem: data[3].actions[0] })

    wrapper.instance().handleConfirmation(true)

    expect(handleActionCallbackStub.called).to.be.true

  })

  it('should set state and trigger the callback', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)
    wrapper.setState({ hasActiveAction: 1, confirmationOverlayOpen: true, clickedItem: data[3].actions[0] })

    wrapper.instance().handleActionCallback(data[3].actions[0])

    expect(wrapper.state().hasActiveAction).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.equal(null)
    expect(data[3].actions[0].callback.called).to.be.true
  })

  it('should get the action overlay left', () => {
    const closestStub = sinon.stub(closestHelper, 'default').returns({ getBoundingClientRect: () => { return { left: 100 } } })
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)

    wrapper.instance().getActionOverlayOffset({ target: { getBoundingClientRect: () => { return { left: 50 } } } })

    expect(wrapper.state().actionOverlayLeft).to.equal('-112.5px')
  })

  it('should show render tooltip on an action icon', () => {
    const wrapper = shallow(<ActivityFeedItem actions={data[3].actions} name={data[3].name} badge={data[3].badge} />)

    const itemActions = wrapper.instance().generateActions()

    expect(itemActions[0].type).to.equal(Tooltip)
    expect(itemActions[0].props.content).to.equal('Action Tooltip')
  })
})
