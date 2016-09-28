import React from 'react'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

const routes = [
  {
    path: 'page',
    title: 'Page'
  },
  {
    path: 'subpage',
    title: 'Subpage'
  }
];

const ExampleBreadcrumbOffset = () => (
  <Breadcrumb routes={routes} offset={200} />
)

export default ExampleBreadcrumbOffset
