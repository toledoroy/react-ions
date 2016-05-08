import React from 'react';
import { shallow } from 'enzyme';
import ActivityFeed from '../src/components/ActivityFeed/ActivityFeed';
import ActivityFeedItem from '../src/components/ActivityFeed/ActivityFeedItem';

describe('ActivityFeed', () => {

  const data = [
    {
      name: 'The Badge Component',
      title: 'is pretty awesome.',
      profileUrl: '/components/badge',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '9',
        theme: 'success'
      }
    }, {
      name: 'The Nav Component',
      title: 'is really great, actually.',
      profileUrl: '/components/nav',
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
    }
  ];

  /*<div class="item-wrapper">
    <time>Last Thursday at 2:19 PM</time>
    <div class="title-wrapper">
      <h3><a class="">The Nav Component</a> is really great, actually.</h3>
      <div class="action-wrapper">
        <svg name="icon-back" fill="#3c97d3" height="16" width="16"><use xlink:href="/_karma_webpack_//13909255dfd9387151d92875db15505a.svg#icon-back"></use></svg>
      </div>
    </div>
    <p>Bacon ipsum dolor amet venison bresaola kevin chuck. Pig turkey alcatra beef ribs salami pork.</p>
  </div>*/

  it('should render an ActivityFeed wrapper with list items', () => {
    const wrapper = shallow(<ActivityFeed data={data} />);
    const itemWrapper = wrapper.childAt(0).childAt(0).childAt(1);
    const itemWrapperAction = wrapper.childAt(0).childAt(1).childAt(1);

    expect(wrapper.props().className).to.equal('activity-feed');
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('ul').children()).to.have.length(data.length);
    expect(itemWrapper.type()).to.equal(ActivityFeedItem);
    expect(itemWrapper.props().name).to.equal(data[0].name);
    expect(itemWrapper.props().profileUrl).to.equal(data[0].profileUrl);
    expect(itemWrapper.props().title).to.equal(data[0].title);
    expect(itemWrapper.props().text).to.equal(data[0].text);
    expect(itemWrapper.props().time).to.equal(data[0].timestamp);
    expect(itemWrapperAction.props().actions).to.equal(data[1].actions);
  });

});
