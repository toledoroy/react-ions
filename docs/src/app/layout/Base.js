import React from 'react'
import { IndexLink, Link } from 'react-router'
import style from '../../www/css/base.scss'
import Header from './Header'
import Nav from './Nav'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.row}>
        <nav className={style.nav}>
          <Nav />
        </nav>
        <div className={style.content}>
          <Header page={this.props.params.content} />
          <section role='main'>
            {this.props.children}
          </section>
        </div>
      </div>
    )
  }
}

export default Base;
