const nav = [
  {
    name: 'Foundations',
    route: '/foundations',
    // icon: 'icon-award-3',
    nav: [
      {
        name: 'Colors',
        route: '/foundations/colors'
      }, {
        name: 'Typography',
        route: '/foundations/typography'
      }, {
        name: 'Iconography',
        route: '/foundations/iconography'
      }, {
        name: 'Layout',
        route: '/foundations/layout'
      }, {
        name: 'Editor',
        external: true,
        route: 'https://cdn.getambassador.com/index.html?mbsy_editor=true'
      }
    ]
  }, {
    name: 'Components',
    route: '/components',
    nav: [
      {
        name: 'Progress Bar',
        route: '/components/progress-bar'
      }, {
        name: 'Icons',
        route: '/components/icons'
      }, {
        name: 'Buttons',
        route: '/components/buttons'
      }, {
        name: 'Nav',
        route: '/components/nav'
      }
    ]
  }, {
    name: 'Patterns',
    route: '/patterns'
  }, {
    name: 'Resources',
    route: '/resources'
  }
]

export default nav
