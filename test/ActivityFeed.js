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

  it('should add an activity to the list', () => {
    const wrapper = shallow(<ActivityFeed data={data} />);

    expect(wrapper.find('ul').children()).to.have.length(2);

    let activities = data;
    activities.unshift({
      name: 'This test activity',
      title: 'is pretty awesome.',
      profileUrl: '/components/badge',
      text: 'Beef ribs shoulder bresaola hamburger brisket filet mignon turkey kevin frankfurter andouille spare ribs shankle chicken swine ham hock. Ham pork belly alcatra venison.',
      timestamp: '2016-05-06T18:19:08.936',
      badge: {
        text: '42',
        theme: 'success'
      }
    });
    wrapper.setProps({data: activities});
    wrapper.update();

    expect(wrapper.find('ul').children()).to.have.length(3);
  });

  it('should have an extra class', () => {
    const wrapper = shallow(<ActivityFeed data={data} optClass="test-class" />);

    expect(wrapper.hasClass('test-class')).to.be.true;
  });

});
