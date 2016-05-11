import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import style from './style.scss'

const PanelHeader = (props) => {
  const cx = classNames.bind(style);
  var toggleIconRotate = cx(style['toggle-icon'], style['rotate']);

  return (
    <div className={style['panel-header']}>
      {!props.children ?
        <div>
          <div className={style['title-group']}>
            {props.contextIcon ? <Icon name={props.contextIcon} height='14' width='14' /> : null}
            {props.title ? <h4>{props.title}</h4> : null}
          </div>
          <div className={toggleIconRotate}>
            <Icon name='icon-delete-1' height='12' width='12' />
          </div>
        </div>
        :
        props.children
      }
    </div>
  )
}

PanelHeader.propTypes = {
  /**
   * A callback function (from PanelGroup) to be called when the panel is clicked.
   */
  clickCallback: React.PropTypes.func
}

export default PanelHeader
