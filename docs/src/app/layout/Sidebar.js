import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Header from './Header'
import Nav from 'react-conventions/lib/Nav'
import NavData from 'private/config/NavData'
import SidebarToggle from './SidebarToggle'
import logo from 'private/images/ambassador-logo.svg'
import style from 'private/css/sidebar'

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  toggle = () => {
    if (this.props.onSidebarClick) {
      this.props.onSidebarClick(this)
    }
  }

  render() {
    let sidebarClass = this.props.collapsed ? style.sidebar : classNames(style.sidebar, style.visible)

    return (
      <div className={sidebarClass}>
        <SidebarToggle toggle={this.toggle.bind(this)} collapsed={this.props.collapsed} />
        <header>
          <Link to='/' className={style['logo-wrap']}>
            <img src={logo} className={style.logo} alt='Ambassador React:ions' />
          </Link>
        </header>
        <Nav data={NavData} />
      </div>
    )
  }
}

export default Sidebar
