import React from 'react'
import Icon from 'react-conventions/lib/Icon'
import Nav from 'react-conventions/lib/Nav'
import style from './style'

const data = [
  {
    name: 'Item 1',
    route: '/',
    icon: 'icon-hammer-2',
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

const ExampleNavDefault = () => (
  <Nav data={data} optClass={style.inverted} />
)

export default ExampleNavDefault;
