import React from 'react'
import optclass from '../internal/OptClass'
import ActivityFeedItem from './ActivityFeedItem'
import Badge from '../Badge'
import style from './style.scss'

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
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  state = {
    data: this.props.data
  }

  componentWillReceiveProps = () => {
    this.setState({ data: this.props.data })
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
