import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router'
import ActivityFeed from '../src/components/ActivityFeed/ActivityFeed';
import ActivityFeedItem from '../src/components/ActivityFeed/ActivityFeedItem';

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

// <ActivityFeedItem
//   name={item.name}
//   profileUrl={item.profileUrl}
//   title={item.title}
//   actions={item.actions}
//   text={item.text}
//   time={item.timestamp}
// />

it('should render a name', () => {
  const wrapper = shallow(<ActivityFeedItem name={data[0].name} />);
  const titleWrapper = wrapper.childAt(0);
  expect(titleWrapper.props().className).to.equal('title-wrapper');
  expect(titleWrapper.childAt(0).type()).to.equal('h3');
  expect(titleWrapper.childAt(0).text()).to.equal(data[0].name + ' ');
});

it('should render a title', () => {
  const wrapper = shallow(<ActivityFeedItem title={data[0].title} />);
  const titleWrapper = wrapper.childAt(0);
  expect(titleWrapper.childAt(0).text()).to.equal(' ' + data[0].title);
});

it('should render a profile url', () => {
  const wrapper = shallow(<ActivityFeedItem name={data[0].name} profileUrl={data[0].profileUrl} />);
  const titleWrapper = wrapper.childAt(0);
  const linkWrapper = titleWrapper.childAt(0).childAt(0);
  expect(linkWrapper.type()).to.equal(Link);
  expect(linkWrapper.props().to).to.equal(data[0].profileUrl);
  expect(linkWrapper.childAt(0).text()).to.equal(data[0].name);
});

it.skip('should render a single external node with an icon', () => {
  const wrapper = shallow(<ActivityFeedItem node={nodeWithIcon[0]} />);
  // expect(wrapper.childAt(0).childAt(0).childAt(0).type()).to.equal(Icon);
  // expect(wrapper.childAt(0).childAt(0).childAt(0).props().name).to.equal('icon-check-1-1');
  // expect(wrapper.childAt(0).childAt(0).childAt(0).props().fill).to.equal('currentColor');
});

it.skip('should render a single external node', () => {
  const wrapper = shallow(<ActivityFeedItem node={nodes[1]} />);
  // expect(wrapper.childAt(0).childAt(0).childAt(0).text()).to.equal(nodes[1].name);
  // expect(wrapper.childAt(0).childAt(0).props().href).to.equal(nodes[1].route);
  // expect(wrapper.childAt(0).childAt(0).props().target).to.equal('_blank');
});

it.skip('should render a group of children when parent is external', () => {
  const wrapper = shallow(<ActivityFeedItem node={nodes[0]} children={children} />);
  // expect(wrapper.childAt(0).find('ul').children()).to.have.length(children.length);
});

it.skip('should render a group of children when parent is internal', () => {
  const wrapper = shallow(<ActivityFeedItem node={nodes[1]} children={children} />);
  // expect(wrapper.childAt(0).find('ul').children()).to.have.length(children.length);
  // expect(wrapper.childAt(0).find('ul').props().className).to.equal(null);
});

it.skip('should render a group of children with an icon parent', () => {
  const wrapper = shallow(<ActivityFeedItem node={nodeWithIcon[0]} children={children} />);
  // expect(wrapper.childAt(0).find('ul').props().className).to.equal('indent');
});
