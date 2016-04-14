import React from 'react'
import { Link } from 'react-router'
import style from '../../www/css/base.scss'

class NavLink extends React.Component {
  render() {
    return <Link {...this.props} activeClassName={style.active} />
  }
}

export default NavLink;
