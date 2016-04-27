import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router'
import style from 'private/css/sidebar-toggle'
import logo from 'private/images/ambassador-logo.svg'

class SidebarToggle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let sidebarToggleClass = this.props.collapsed ? style['sidebar-toggle'] : classNames(style['sidebar-toggle'], style['sidebar-visible']);
    return (
      <button className={sidebarToggleClass} onClick={this.props.toggle}>
        <div className={style['burger-piece']}></div>
        <div className={style['burger-piece']}></div>
        <div className={style['burger-piece']}></div>
      </button>
    )
  }
}

export default SidebarToggle;
