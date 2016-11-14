import React from 'react'
import { shallow } from 'enzyme'
import ActivityFeed from '../src/components/ActivityFeed/ActivityFeed'
import ActivityFeedItem from '../src/components/ActivityFeed/ActivityFeedItem'
import Infinite from 'react-infinite'

describe('ActivityFeed', () => {

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
          callback: () => {
            alert('reply')
          }
        }
      ],
      badge: {
        text: '7',
        theme: 'warning'
      }
    }
  ]

  it('should render an ActivityFeed wrapper with list items', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)
    const itemWrapper = wrapper.childAt(0).childAt(0).childAt(1)
    const itemWrapperAction = wrapper.childAt(0).childAt(1).childAt(1)

    expect(wrapper.props().className).to.equal('activity-feed')
    expect(wrapper.find('ul')).to.have.length(1)
    expect(wrapper.find(Infinite)).to.have.length(1)
    expect(wrapper.find(ActivityFeedItem)).to.have.length(2)
  })

  it('should add an activity to the list', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)

    expect(wrapper.find(ActivityFeedItem)).to.have.length(2)

    let activities = data
    activities.unshift({
      name: 'This test activity',
      title: 'is pretty awesome.',
      profileUrl: '/components/badge',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '42',
        theme: 'success'
      }
    })
    wrapper.setProps({data: activities})
    wrapper.update()

    expect(wrapper.find(ActivityFeedItem)).to.have.length(3)
  })

  it('should have an extra class', () => {
    const wrapper = shallow(<ActivityFeed data={data} optClass="test-class" />)

    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should update state when handleSetHeight is called', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)
    wrapper.instance().handleSetHeight(0, 123)

    expect(wrapper.state('heights')[0]).to.equal(123)
  })

  it('should return current height string when getHeight is called', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)
    wrapper.instance().handleSetHeight(0, 123)

    expect(wrapper.instance().getHeight(0)).to.equal('123-px')
  })

  it('should return items and heights when buildElements is called', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)
    const buildElementsResponse = wrapper.instance().buildElements(0, data)

    expect(buildElementsResponse.items.length).to.equal(3)
    expect(buildElementsResponse.items[0].type).to.equal(ActivityFeedItem)
    expect(buildElementsResponse.items[1].type).to.equal(ActivityFeedItem)
    expect(buildElementsResponse.items[2].type).to.equal(ActivityFeedItem)
    expect(buildElementsResponse.heights.length).to.equal(3)
    expect(buildElementsResponse.heights[0]).to.equal(200)
    expect(buildElementsResponse.heights[1]).to.equal(200)
    expect(buildElementsResponse.heights[2]).to.equal(200)
  })

  it('should set state when component mounts', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)

    expect(wrapper.state('items').length).to.equal(3)
    expect(wrapper.state('items')[0].type).to.equal(ActivityFeedItem)
    expect(wrapper.state('items')[1].type).to.equal(ActivityFeedItem)
    expect(wrapper.state('items')[2].type).to.equal(ActivityFeedItem)
    expect(wrapper.state('heights').length).to.equal(3)
    expect(wrapper.state('heights')[0]).to.equal(200)
    expect(wrapper.state('heights')[1]).to.equal(200)
    expect(wrapper.state('heights')[2]).to.equal(200)
    expect(wrapper.state('offset')).to.equal(window.innerHeight)
  })

  it('should update state when new props are received', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)
    data.unshift({
      name: 'New Activity',
      title: 'is pretty awesome.',
      profileUrl: '/components/badge',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '42',
        theme: 'success'
      }
    })
    wrapper.setProps({ data })

    expect(wrapper.state('items').length).to.equal(4)
    expect(wrapper.state('heights').length).to.equal(4)
    expect(wrapper.state('heights')[0]).to.equal(200)
    expect(wrapper.state('data')).to.deep.equal(data)
    expect(wrapper.state('data')[0].name).to.equal('New Activity')
    expect(wrapper.state('offset')).to.equal(window.innerHeight)
  })

  it('should not fetch more items if props.onInfiniteLoad is not specified when handleInfiniteLoad is called', () => {
    const wrapper = shallow(<ActivityFeed data={data} />)

    expect(wrapper.instance().handleInfiniteLoad()).to.be.undefined
  })

  it('should not fetch more items if props.totalCount has been reached when handleInfiniteLoad is called', () => {
    const wrapper = shallow(<ActivityFeed totalCount={3} data={data} />)

    expect(wrapper.instance().handleInfiniteLoad()).to.be.undefined
  })

  it('should not try to fetch more items if already loading more items when handleInfiniteLoad is called', () => {
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    wrapper.setState({ isInfiniteLoading: true })

    expect(wrapper.instance().handleInfiniteLoad()).to.be.undefined
  })

  it('should call props.onInfiniteLoad when handleInfiniteLoad is called', () => {
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    wrapper.instance().handleInfiniteLoad()

    expect(onInfiniteLoad.calledOnce).to.be.true
  })

  it('should update state when onInfiniteLoad is resolved when handleInfiniteLoad is called', done => {
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    wrapper.instance().handleInfiniteLoad().then(() => {
      expect(wrapper.state('isInfiniteLoading')).to.be.false
      done()
    })
  })

  it('should update state when onInfiniteLoad is rejected when handleInfiniteLoad is called', done => {
    const onInfiniteLoad = sinon.stub().returns(Promise.reject())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    wrapper.instance().handleInfiniteLoad().then(() => {
      expect(wrapper.state('isInfiniteLoading')).to.be.false
      done()
    })
  })

  it('should use the element as the scroll container', () => {
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} useWindowAsScrollContainer={false} containerHeight={200} />)

    expect(wrapper.hasClass('activity-feed')).to.be.true
    expect(wrapper.hasClass('element-scrollable')).to.be.true
    expect(wrapper.find(Infinite).props().useWindowAsScrollContainer).to.be.false
    expect(wrapper.find(Infinite).props().containerHeight).to.equal(200)
  })

  it('should update offset if the infinite list is below or on the top of the screen', () => {
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    const updateOffsetSpy = sinon.spy(wrapper.instance(), 'updateOffset')

    // Mock the getBoundingClientRect method
    wrapper.instance()._table = {
      getBoundingClientRect: () => {
        return {
          top: 0
        }
      }
    }
    wrapper.instance().scrollUpdate()

    expect(updateOffsetSpy.calledOnce).to.be.true

    wrapper.instance()._table = {
      getBoundingClientRect: () => {
        return {
          top: 1000
        }
      }
    }
    wrapper.instance().scrollUpdate()

    expect(updateOffsetSpy.calledTwice).to.be.true

    wrapper.instance()._table = {
      getBoundingClientRect: () => {
        return {
          top: -100
        }
      }
    }
    wrapper.instance().scrollUpdate()

    expect(updateOffsetSpy.calledThrice).to.be.false
  })

  it('should add event listeners when mounted', () => {
    const addEventListenerSpy = sinon.spy(window, 'addEventListener')
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    const updateOffsetStub = sinon.stub(wrapper.instance(), 'updateOffset')

    wrapper.instance().componentDidMount()

    expect(addEventListenerSpy.calledWithExactly('resize', wrapper.instance().offsetThrottle)).to.be.true
    expect(addEventListenerSpy.calledWithExactly('scroll', wrapper.instance().scrollThrottle)).to.be.true
    expect(updateOffsetStub.called).to.be.true

    wrapper.instance().componentWillUnmount()
    updateOffsetStub.restore()
    addEventListenerSpy.restore()
  })

  it('should remove event listeners when unmounted', () => {
    const removeEventListenerSpy = sinon.spy(window, 'removeEventListener')
    const onInfiniteLoad = sinon.stub().returns(Promise.resolve())
    const wrapper = shallow(<ActivityFeed data={data} onInfiniteLoad={onInfiniteLoad} />)
    const resizeThrottleCancelSpy = sinon.spy(wrapper.instance().offsetThrottle, 'cancel')
    const scrollThrottleCancelSpy = sinon.spy(wrapper.instance().scrollThrottle, 'cancel')

    wrapper.instance().componentWillUnmount()

    expect(resizeThrottleCancelSpy.called).to.be.true
    expect(scrollThrottleCancelSpy.called).to.be.true
    expect(removeEventListenerSpy.calledWithExactly('resize', wrapper.instance().offsetThrottle)).to.be.true
    expect(removeEventListenerSpy.calledWithExactly('scroll', wrapper.instance().scrollThrottle)).to.be.true

    removeEventListenerSpy.restore()
  })

  it('should display as compact view', () => {
    const wrapper = shallow(<ActivityFeed data={data} compactView={true} />)
    expect(wrapper.hasClass('activity-feed compact-view')).to.be.true
  })
})
