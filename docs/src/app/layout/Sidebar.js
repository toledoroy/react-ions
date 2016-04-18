import React from 'react'
import Header from './Header'
import Nav from './Nav'
import style from 'css/sidebar'

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
