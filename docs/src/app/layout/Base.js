import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Main from './Main'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

const Base = (props) => {
  return (
    <div className={style['container-fluid']}>
      <div className={style.row}>
        <Sidebar />
        <div className={style['content-wrap']}>
          <Breadcrumb routes={props.routes} />
          <Main children={props.children} />
        </div>
      </div>
    </div>
  )
}

export default Base
