import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from 'css/base'
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
          <div className={style.sidebar}>
            <Header />
            <Nav />
          </div>
          <div className={style.content}>
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
