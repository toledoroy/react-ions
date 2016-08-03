import React from 'react'
import optclass from '../internal/OptClass'
import ActivityFeedItem from './ActivityFeedItem'
import Infinite from 'react-infinite';
import throttle from 'lodash/throttle'
import Badge from '../Badge'
import style from './style.scss'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.throttle = throttle(this.handleResize, 200)
  }

  static propTypes = {
    /**
     * The activity feed data.
     */
    data: React.PropTypes.array.isRequired,
    /**
     * Callback to fetch more activity feed items.
     * Should return a promise that resolves once the data has been fetched.
     * Should also update this.state.data with the additional items.
     */
    onInfiniteLoad: React.PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings).
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  getSize = () => {
    if(window.innerWidth > 767) {
      return 108
    } else if (window.innerWidth > 501) {
      return 114
    }
  }

  buildElements = (start, data) => {
    const badgeClasses = optclass(style, 'indicator')

    let elements = []
    for (var i = start; i < data.length; i++) {
      const item = data[i]
      elements.push(<li key={i}>
        <Badge
          icon={item.badge.icon}
          text={item.badge.text}
          theme={item.badge.theme}
          optClass={badgeClasses}
        />
        <ActivityFeedItem
          name={item.name}
          profileUrl={item.profileUrl}
          profileUrlTarget={item.profileUrlTarget}
          title={item.title}
          actions={item.actions}
          text={item.text}
          time={item.timestamp}
        />
      </li>)
    }
    return elements
  }


  state = {
    data: this.props.data,
    items: this.buildElements(0, this.props.data),
    fetchMoreEnabled: true,
    itemHeight: this.getSize()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.throttle)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.throttle)
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      data: nextProps.data,
      items: [...this.state.items, ...this.buildElements(this.state.items.length, nextProps.data)],
      fetchMoreEnabled: nextProps.data.length > this.state.data.length
    })
  }

  handleResize = () => {
    this.setState({ itemHeight: this.getSize() })
  }

  handleInfiniteLoad = () => {
    // If we've already fetched as many items as there are available
    // or no function has been provided to fetch more
    // then there is no need to fetch.
    if (!this.state.fetchMoreEnabled || typeof this.props.onInfiniteLoad !== 'function') {
      this.setState({ isInfiniteLoading: false })
      return
    }

    // Show loader while fetching
    this.setState({ isInfiniteLoading: true })
    this.props.onInfiniteLoad().then(() => {
      this.setState({ isInfiniteLoading: false })
    })
  }

  render() {
    const feedClasses = optclass(style, 'activity-feed', this.props.optClass)
    const elementInfiniteLoad = (<div className="infinite-list-item">Loading...</div>)

    return (
      <div className={feedClasses}>
        <ul>
          <Infinite
            elementHeight={this.state.itemHeight}
            useWindowAsScrollContainer={true}
            infiniteLoadBeginEdgeOffset={1000}
            onInfiniteLoad={this.handleInfiniteLoad}
            loadingSpinnerDelegate={elementInfiniteLoad}
            isInfiniteLoading={this.state.isInfiniteLoading}>
              {this.state.items}
          </Infinite>
        </ul>
      </div>
    )
  }
}

export default ActivityFeed
