import React from 'react'
import { Link } from 'react-router'
import style from 'css/header'
import logo from 'images/ambassador-logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <Link to="/">
          <img src={logo} className={style.logo} alt="Ambassador React Conventions" />
        </Link>
      </header>
    )
  }
}

export default Header
