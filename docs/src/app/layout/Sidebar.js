import React from 'react'
import style from 'private/css/sidebar'
import Header from './Header'
import Nav from './Nav'

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <Header />
      <Nav />
    </div>
  )
}

export default Sidebar;
