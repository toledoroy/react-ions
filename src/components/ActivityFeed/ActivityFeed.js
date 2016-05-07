import React from 'react'
import ActivityFeedItem from './ActivityFeedItem'
import Badge from '../Badge'
import style from './style.scss'
import classNames from 'classnames/bind'

const ActivityFeed = (props) => {
  const cx = classNames.bind(style);
  const feedClasses = cx(style['activity-feed'], props.optClass);

  let items = props.data.map((item, index) =>
    <li class={style['item-wrapper']} key={index}>
      <Badge
        icon={item.badge.icon}
        text={item.badge.text}
        theme={item.badge.theme}
        optClass={style.indicator}
      />
      <ActivityFeedItem
        name={item.name}
        title={item.title}
        profileUrl={item.profileUrl}
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

ActivityFeed.propTypes = {
  /**
   * The activity feed data.
   */
  data: React.PropTypes.array.isRequired,
  /**
   * An optional CSS class to pass along to the feed component.
   */
  optClass: React.PropTypes.string
}

export default ActivityFeed
