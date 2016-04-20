import React from 'react'
import style from '../../www/css/sidebar'
import Header from './Header'
import Nav from './Nav'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.sidebar}>
        <Header />
        <Nav />
      </div>
    )
  }
}

export default Sidebar;
