import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from '../../www/css/base.scss'
import Header from './Header'
import Nav from './Nav'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <nav className={style['col-xs-3']}>
            <Header page={this.props.params.content} />
            <Nav />
          </nav>
          <div className={style['col-xs-9']}>
            <section role='main'>
              {this.props.children}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Base;
