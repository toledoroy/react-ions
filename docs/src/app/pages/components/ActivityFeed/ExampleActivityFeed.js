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

  genActivities = (numToAdd, incrementor) => {
    let items = []
    for (var i = 0; i < numToAdd; i++) {
      items.push({
        name: 'New activity ' + (i + 4),
        profileUrl: '/components/button',
        title: 'just happened.',
        text: 'This is just to test whether the component updates correctly.',
        timestamp: (new Date()).toISOString(),
        badge: {
          text: (incrementor + 1).toString(),
          theme: styles[Math.floor(Math.random() * 4)]
        }
      })
      incrementor++
    }
    return items
  }

  getInitialActivities = () => {
    let items = [
      {
        name: 'External Link',
        profileUrl: `${config.APP_URL}/v3/c/manage/ambassadors/`,
        profileUrlTarget: '_blank',
        title: 'is pretty awesome.',
        text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
        timestamp: '2016-05-06T18:19:08.936',
        badge: {
          text: '9',
          theme: 'success'
        }
      }, {
        name: 'The Nav Component',
        title: 'is really great, actually.',
        text: 'Bacon ipsum dolor amet venison bresaola kevin chuck. Pig turkey alcatra beef ribs salami pork.',
        timestamp: '2016-05-05T18:19:08.936',
        actions: [
          {
            type: 'reply',
            icon: 'icon-back',
            callback: () => {
              alert('reply')
            }
          }
        ],
        badge: {
          text: '7',
          theme: 'warning'
        }
      }, {
        name: 'bob+pizza+lover+45@getambassador.com',
        profileUrl: '/foundations/iconography',
        profileUrlTarget: '_blank',
        title: 'was given a pizza coupon and is really happy',
        text: 'Turducken chuck shoulder, landjaeger brisket shank tri-tip capicola kielbasa jerky alcatra drumstick pork belly filet mignon. ',
        timestamp: '2016-06-15T18:19:08.936',
        actions: [
          {
            type: 'reply',
            icon: 'icon-back',
            callback: () => {
              alert('reply')
            }
          }, {
            type: 'flag',
            icon: 'icon-flag-1-1',
            callback: () => {
              alert('flag')
            }
          }
        ],
        badge: {
          text: '3',
          theme: 'danger'
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

    return [...items, ...this.genActivities(16, 5)]
  }

  state = {
    count: 20,
    activities: this.getInitialActivities()
  }

  handleInfiniteLoad = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          count: this.state.count+100,
          activities: [...this.state.activities, ...this.genActivities(100, this.state.count)]
        }, () => resolve())
      }, 1000)
    })
  }

  render() {
    return(
      <div>
        <ActivityFeed
          data={this.state.activities}
          onInfiniteLoad={this.handleInfiniteLoad} />
      </div>
    )
  }
}

export default ExampleActivityFeed
