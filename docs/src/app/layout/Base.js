import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from '../../www/css/base'
import Sidebar from './Sidebar'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar />
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
