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
  },
  {
    path: 'subpage',
    title: 'Another Subpage'
  }
];

const ExampleBreadcrumbTwoSubpages = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbTwoSubpages
