import React from 'react'
import style from 'css/base'
import logo from 'images/ambassador-logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <img src={logo} className={style.logo} alt="Ambassador React Conventions" />
      </header>
    )
  }
}

export default Header
