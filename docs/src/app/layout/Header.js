import React from 'react'
import NavLink from 'modules/NavLink'
import style from 'css/header'
import logo from 'images/ambassador-logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={style.header}>
        <NavLink to="/">
          <img src={logo} className={style.logo} alt="Ambassador React Conventions" />
        </NavLink>
      </header>
    )
  }
}

export default Header
