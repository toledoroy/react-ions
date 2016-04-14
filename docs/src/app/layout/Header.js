import React from 'react'
import style from '../../www/css/header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1 className={style.text}>{this.props.page}</h1>
        <img src="images/ambassador-logo.svg" alt="Ambassador React Conventions" />
      </header>
    )
  }
}

export default Header
