import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar />
          <div className={style['content-wrap']}>
            <div className={style.breadcrumbs}>
              <Breadcrumb routes={this.props.routes} />
            </div>
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
