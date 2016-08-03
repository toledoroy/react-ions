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
    onInfiniteLoad: React.PropTypes.funct,
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

  state = {
    data: this.props.data,
    itemHeight: this.getSize()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.throttle)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.throttle)
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ data: nextProps.data })
  }

  handleResize = () => {
    this.setState({ itemHeight: this.getSize() })
  }

  render() {
    const feedClasses = optclass(style, 'activity-feed', this.props.optClass)
    const badgeClasses = optclass(style, 'indicator')

    let items = this.state.data.map((item, index) =>
      <li key={index}>
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
      </li>
    )

    return (
      <div className={feedClasses}>
        <ul>
         {items}
        </ul>
      </div>
    )
  }
}

export default ActivityFeed
