import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'
import style from './style.scss'

const styles = ['success', 'info', 'danger', 'warning']
const actions = ['activity', 'share', 'commission', 'event']
const data = [
  {
    title: 'Submitted a positive score',
    timestamp: '2016-05-06T18:19:08.936',
    badge: {
      text: '9',
      theme: 'success'
    },
    type: 'survey'
  }, {
    name: 'Earned a commission of $10.00',
    timestamp: '2016-06-15T18:19:08.936',
    badge: {
      icon: 'icon-hand-coin-1',
      theme: 'fog'
    },
    type: 'commission'
  }
]

class ExampleActivityFeedRenderer extends React.Component {
  constructor(props) {
    super(props)
  }

  renderer = (index) => {
    let node

    const item = data[index]
    switch (item.type) {
      case 'commission':
        node = <div className={style['item-wrapper']}>
                {item.timestamp}
               </div>
        break
      case 'survey':
        node = <div className={style['item-wrapper']}>
                {item.timestamp}
               </div>
        break
      default:
        node = ''
        break
    }

    return node
  }

  render() {
    return(
      <div>
        <div className={style['test-div']} />
        <ActivityFeed
          data={data}
          totalCount={4}
          renderer={this.renderer} />
      </div>
    )
  }
}

export default ExampleActivityFeedRenderer
