import React from 'react'
import ActivityFeed from 'react-conventions/lib/ActivityFeed'

const data = [
  {
    title: 'James Rodriguez submitted a score of 9',
    text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
    timestamp: '2016-05-06T18:19:08.936',
    badge: {
      text: '9',
      theme: 'success'
    }
  }, {
    title: 'Ted Cruz submitted a score of 7',
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
    title: 'Donald Trump submitted a score of 3',
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
    title: 'Hillary Clinton opened an email NPS survey',
    timestamp: '2016-04-15T18:19:08.936',
    badge: {
      icon: 'icon-mail-inbox-1',
      theme: 'fog'
    }
  }
];

const ExampleActivityFeed = () => (
  <ActivityFeed data={data} />
)

export default ExampleActivityFeed
