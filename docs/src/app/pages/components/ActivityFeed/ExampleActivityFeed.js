import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const styles = ['success', 'info', 'danger', 'warning']
const actions = ['activity', 'share', 'commission', 'event']

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
        name: 'New ' + actions[Math.floor(Math.random() * 4)] + ' ' + incrementor,
        profileUrl: '/components/button',
        title: 'just happened.',
        text: 'This is just to test whether the component updates correctly.',
        timestamp: (new Date()).toISOString(),
        badge: {
          text: incrementor.toString(),
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
            callback: (type) => {
              alert(type)
            },
            callbackConfirmation: true
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
            callback: (type) => {
              alert(type)
            },
            callbackConfirmation: true
          }, {
            type: 'flag',
            icon: 'icon-flag-1-1',
            callback: (type) => {
              alert(type)
            },
            callbackConfirmation: false
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
    count: 21,
    activities: this.getInitialActivities(),
    useWindowAsScrollContainer: true
  }

  handleCallback = () => {
    alert('callback called')
  }

  changeActivities = () => {
    this.setState({
      count: 21,
      activities: this.genActivities(21, 1)
    })
  }

  toggleContainer = () => {
    const useWindowAsScrollContainer = !this.state.useWindowAsScrollContainer
    this.setState({
      useWindowAsScrollContainer: useWindowAsScrollContainer
    })
  }

  handleInfiniteLoad = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.state.count > 400) {
          reject()
        } else {
          this.setState({
            count: this.state.count+100,
            activities: [...this.state.activities, ...this.genActivities(100, this.state.count)]
          }, () => resolve())
        }
      }, 1500)
    })
  }

  render() {
    return(
      <div>
        <p>
          <Button onClick={this.changeActivities}>Set random activities</Button>
          <Button onClick={this.toggleContainer}>{ this.state.useWindowAsScrollContainer ? 'Use element as scroll container' : 'Use window as scroll container'}</Button>
        </p>
        <div className={style['test-div']} />
        <ActivityFeed
          data={this.state.activities}
          totalCount={420}
          useWindowAsScrollContainer={this.state.useWindowAsScrollContainer}
          containerHeight={400}
          onInfiniteLoad={this.handleInfiniteLoad} />
      </div>
    )
  }
}

export default ExampleActivityFeed
