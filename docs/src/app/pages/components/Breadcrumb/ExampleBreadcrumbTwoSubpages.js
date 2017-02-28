import React from 'react'
import Breadcrumb from 'react-ions/lib/Breadcrumb'

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
    title: 'Second Subpage'
  },
  {
    path: 'subpage',
    title: 'Third Subpage'
  }
];

const ExampleBreadcrumbTwoSubpages = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbTwoSubpages
