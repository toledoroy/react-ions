import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const styles = ['success', 'info', 'danger', 'warning'];

class ExampleActivityFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    activities: [
      {
        name: 'The Badge Component',
        profileUrl: '/components/badge',
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
        name: 'The Iconography Page',
        profileUrl: '/foundations/iconography',
        title: 'doesn\'t need much work.',
        text: 'Turducken chuck shoulder, landjaeger brisket shank tri-tip capicola kielbasa jerky alcatra drumstick pork belly filet mignon. ',
        timestamp: '2016-05-02T18:19:08.936',
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
        timestamp: '2016-04-15T18:19:08.936',
        badge: {
          icon: 'icon-mail-inbox-1',
          theme: 'fog'
        }
      }
    ]
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
    });

    this.setState({ count: this.state.count + 1, activities: activities });
  }

  render() {
    return(
      <div>
        <Button optClass={style.add} onClick={this.addActivity}>Add Activity</Button>
        <ActivityFeed data={this.state.activities} />
      </div>
    )
  }
}

export default ExampleActivityFeed
