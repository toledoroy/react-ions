const nav = [
  {
    id: 1,
    name: 'Foundations',
    route: '/foundations',
    nav: [
      {
        id: 2,
        name: 'Colors',
        route: '/foundations/colors'
      }, {
        id: 3,
        name: 'Typography',
        route: '/foundations/typography'
      }, {
        id: 4,
        name: 'Iconography',
        route: '/foundations/iconography'
      }, {
        id: 5,
        name: 'Layout',
        route: '/foundations/layout',
        nav: [
          {
            id: 15,
            name: 'Another layer',
            route: 'http://www.test.com'
          }
        ]
      }
    ]
  }, {
    id: 6,
    name: 'Components',
    route: '/components',
    nav: [
      {
        id: 7,
        name: 'Progress Bar',
        route: '/components/progress-bar'
      }, {
        id: 8,
        name: 'Icons',
        route: '/components/icons'
      }, {
        id: 9,
        name: 'Buttons',
        route: '/components/buttons'
      }
    ]
  }, {
    id: 10,
    name: 'Patterns',
    route: '/patterns'
  }, {
    id: 11,
    name: 'Resources',
    route: '/resources'
  }
]

export default nav
