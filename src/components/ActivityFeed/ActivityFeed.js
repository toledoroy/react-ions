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
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    totalCount: React.PropTypes.number
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.throttle)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.throttle)
  }

  getSize = () => {
    if(window.innerWidth > 767) {
      return 108
    } else if (window.innerWidth > 501) {
      return 114
    }
  }

  handleResize = () => {
    this.setState({ itemHeight: this.getSize() })
  }

  buildElements = (start, end) => {
    const badgeClasses = optclass(style, 'indicator')

    let elements = []
    for (var i = start; i < end; i++) {
      if(this.props.data[i]) {
        const item = this.props.data[i]
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
    }
    return elements
  }

  state = {
    items: this.buildElements(0, 20),
    itemHeight: this.getSize(),
    isInfiniteLoading: false
  }

  handleInfiniteLoad = () => {
    if (this.state.items.length < this.props.totalCount) {
      this.setState({ isInfiniteLoading: true })
      setTimeout(() => {
        const elemLength = this.state.items.length
        const newElements = this.buildElements(elemLength, elemLength + 100)
        this.setState({
          isInfiniteLoading: false,
          items: this.state.items.concat(newElements)
        })
      }, 1500)
    } else {
      this.setState({ isInfiniteLoading: false })
    }
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
