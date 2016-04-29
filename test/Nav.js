import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../src/components/Nav/Nav';

describe('Nav', () => {

  const data = [
    {
      name: 'Item 1',
      route: '/',
      nav: [
        {
          name: 'Sub Item 1',
          route: '/components/nav'
        }, {
          name: 'Sub Item 2',
          route: '/'
        }, {
          name: 'External Link',
          external: true,
          route: 'https://cdn.getambassador.com/index.html?mbsy_editor=true'
        }
      ]
    }, {
      name: 'Item 2',
      route: '/'
    }, {
      name: 'Item 3',
      route: '/'
    }
  ];

  it('should render three <li> items', () => {
    wrapper = shallow(<Nav data={data} />);
    console.log(wrapper.html());

    expect(wrapper.find('li')).to.have.length(3);
    // expect(wrapper.first().hasClass('container')).to.equal(true);
    //
    // expect(wrapper.childAt(1).hasClass('outer')).to.equal(true);
    // expect(wrapper.childAt(1).childAt(0).hasClass('inner')).to.equal(true);
    //
    // expect(wrapper.childAt(0).type()).to.equal(ProgressBarLabel);
  });

});
