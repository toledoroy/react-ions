import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

const PanelHeader = (props) => {
  return (
    <div className={style['panel-header']}>
      {props.title ?
        <h4>
        :
        null
      }
        <Icon name={props.contextIcon} height='14' width='14' />
        {props.title}
      </h4>
    </div>
  )
}

PanelHeader.propTypes = {
}

export default PanelHeader
