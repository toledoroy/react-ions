import React from 'react'
import style from './style.scss'

const Panel = (props) => {
  return (
    <div className={style.panel}>
      {props.children}
    </div>
  )
}

export default Panel
