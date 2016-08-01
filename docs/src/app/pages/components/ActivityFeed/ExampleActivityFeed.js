import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const styles = ['success', 'info', 'danger', 'warning']

const config = {
  APP_URL: 'http://getambassador.com'
}

class ExampleActivityFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  getActivities = () => {
    let items = []
    let count = 0
    for (var i = 0; i < 500; i++) {
      items.push({
        name: 'New activity ' + (count + 1),
        profileUrl: '/components/button',
        title: 'just happened.',
        text: 'This is just to test whether the component updates correctly.',
        timestamp: (new Date()).toISOString(),
        badge: {
          text: (count + 1).toString(),
          theme: styles[Math.floor(Math.random() * 4)]
        }
      })
      count++
    }
    return items
  }

  state = {
    count: 0,
    activities: this.getActivities()
  }



  addActivity = () => {
    let activities = this.state.activities;
    activities.unshift({
      name: 'New activity ' + (this.state.count + 1),
      profileUrl: '/components/button',
      title: 'just happened.',
      text: 'This is just to test whether the component updates correctly.',
      timestamp: (new Date()).toISOString(),
      badge: {
        text: (this.state.count + 1).toString(),
        theme: styles[Math.floor(Math.random() * 4)]
      }
    })

    this.setState({ count: this.state.count + 1, activities: activities });
  }

  render() {
    return(
      <div>
        <Button optClass={style.add} onClick={this.addActivity}>Add Activity</Button>
        <ActivityFeed data={this.state.activities} totalCount={300} />
      </div>
    )
  }
}

export default ExampleActivityFeed
