import React from 'react'
import classNames from 'classnames';
import style from 'private/css/sidebar'
import Header from './Header'
import Nav from './Nav'
import SidebarToggle from './SidebarToggle'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

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
        <Nav />
      </div>
    )
  }
}

export default Sidebar
