import React from 'react'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

const Header = (props) => {
  return (
    <Breadcrumb routes={props.routes} />
  )
}

export default Header
