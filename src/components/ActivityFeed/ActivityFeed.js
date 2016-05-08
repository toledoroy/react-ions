import React from 'react'
import ActivityFeedItem from './ActivityFeedItem'
import Badge from '../Badge'
import style from './style.scss'
import classNames from 'classnames/bind'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.limit) {
      this.setState({
        data: this.props.data.slice(0, this.props.limit)
      })
    } else {
      this.setState({
        data: this.props.data
      })
    }
  }

  render() {
    const cx = classNames.bind(style);
    const feedClasses = cx(style['activity-feed'], this.props.optClass);

    let items = this.state.data.map((item, index) =>
      <li key={index}>
        <Badge
          icon={item.badge.icon}
          text={item.badge.text}
          theme={item.badge.theme}
          optClass={style.indicator}
        />
        <ActivityFeedItem
          name={item.name}
          profileUrl={item.profileUrl}
          title={item.title}
          actions={item.actions}
          text={item.text}
          time={item.timestamp}
        />
      </li>
    );

    return (
      <div className={feedClasses}>
        <ul>
         {items}
        </ul>
      </div>
    );
  }
}

ActivityFeed.propTypes = {
  /**
   * The activity feed data.
   */
  data: React.PropTypes.array.isRequired,
  /**
   * Limits the number of items in the list.
   */
  limit: React.PropTypes.number,
  /**
   * An optional CSS class to pass along to the feed component.
   */
  optClass: React.PropTypes.string
}

export default ActivityFeed
