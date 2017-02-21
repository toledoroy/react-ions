import React from 'react'
import Breadcrumb from 'react-ions/lib/Breadcrumb'

const ExampleRouteTitleComponent = () => (
  <span>Tertiary</span>
)

const routes = [
  {
    path: 'page',
    title: 'Page'
  },
  {
    path: 'subpage',
    title: 'Subpage'
  },
  {
    path: 'tertiary',
    components: { title: <ExampleRouteTitleComponent /> }
  }
];

const ExampleBreadcrumbDefault = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbDefault
