import React from 'react'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

const routes = [
  {
    path: '/',
    title: undefined
  },
  {
    path: 'components',
    title: 'Breadcrumb'
  },
  {
    path: 'breadcrumb',
    title: 'Breadcrumb'
  }
];

const ExampleBreadcrumbDefault = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbDefault
