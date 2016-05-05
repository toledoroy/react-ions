import React from 'react'
import classNames from 'classnames';
import style from 'private/css/sidebar'
import Header from './Header'
import Nav from 'react-conventions/lib/Nav'
import NavData from 'private/config/NavData'
import SidebarToggle from './SidebarToggle'

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      collapsed: true
    };
  }

  toggle() {
    var collapsed = !this.state.collapsed;
    this.setState({ collapsed: collapsed });
  }

  render() {
    let sidebarClass = this.state.collapsed ? style.sidebar : classNames(style.sidebar, style.visible);

    return (
      <div className={sidebarClass}>
        <SidebarToggle toggle={this.toggle.bind(this)} collapsed={this.state.collapsed} />
        <Header />
        <Nav data={NavData} />
      </div>
    )
  }
}

export default Sidebar
