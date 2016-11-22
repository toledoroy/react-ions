import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'
import style from './style.scss'

const styles = ['success', 'info', 'danger', 'warning']
const actions = ['activity', 'share', 'commission', 'event']

class ExampleActivityFeedRenderer extends React.Component {
  constructor(props) {
    super(props)
  }

  getInitialActivities = () => {
    let items = [
      {
        title: 'Earned a commission of $10.00',
        timestamp: '2016-05-06T18:19:08.936',
        badge: {
          text: '9',
          theme: 'success'
        }
      }, {
        name: 'Printed test page.',
        timestamp: '2016-06-15T18:19:08.936',
        badge: {
          icon: 'icon-mail-inbox-1',
          theme: 'fog'
        }
      }
    ]

    return items
  }

  state = {
    activities: this.getInitialActivities()
  }

  render() {
    return(
      <div>
        <div className={style['test-div']} />
        <ActivityFeed
          data={this.state.activities}
          totalCount={4} />
      </div>
    )
  }
}

export default ExampleActivityFeedRenderer
