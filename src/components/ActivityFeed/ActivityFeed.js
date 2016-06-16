import React from 'react'
import ActivityFeedItem from './ActivityFeedItem'
import Badge from '../Badge'
import style from './style.scss'
import classNames from 'classnames/bind'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The activity feed data.
     */
    data: React.PropTypes.array.isRequired,
    /**
     * An optional CSS class to pass along to the feed component.
     */
    optClass: React.PropTypes.string
  }

  state = {
    data: this.props.data
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ data: nextProps.data })
  }

  render() {
    const cx = classNames.bind(style)
    const feedClasses = cx(style['activity-feed'], this.props.optClass)
    const badgeClasses = cx(style.indicator)

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
