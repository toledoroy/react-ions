import React from 'react'
import Icon from 'react-conventions/lib/Icon'
import Nav from 'react-conventions/lib/Nav'
import style from './style'

const data = [
  {
    name: 'Item 1',
    route: '/components/nav',
    icon: 'icon-hammer-2',
    nav: [
      {
        name: 'Internal Link',
        route: '/patterns'
      }, {
        name: 'External Link (New Window)',
        external: true,
        route: 'https://example.com'
      }, {
        name: 'External Link (Same Window)',
        external: true,
        self: true,
        route: 'https://example.com'
      }, {
        name: 'Callback function',
        route: function() {
          alert('callback')
        }
      },
    ]
  }, {
    name: 'Item 2',
    route: '/components/nav'
  }, {
    name: 'Item 3',
    route: '/components/nav'
  }
];

const ExampleNavDefault = () => (
  <Nav data={data} optClass={style.inverted} />
)

export default ExampleNavDefault;
