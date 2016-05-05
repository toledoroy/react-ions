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
        name: 'Sub Item 1',
        route: '/sub-item/1'
      }, {
        name: 'Sub Item 2',
        route: '/sub-item/2'
      }, {
        name: 'External Link',
        external: true,
        route: 'https://google.com'
      }
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
