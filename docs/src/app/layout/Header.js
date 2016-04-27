import React from 'react'
import { Link } from 'react-router'
import style from 'private/css/header'
import logo from 'private/images/ambassador-logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={style.header}>
        <Link to="/" className={style['logo-wrap']}>
          <img src={logo} className={style.logo} alt="Ambassador React Conventions" />
        </Link>
      </header>
    )
  }
}

export default Header;
