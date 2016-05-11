import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const PanelContent = (props) => {
  const cx = classNames.bind(style);
  var contentClasses = cx(style['panel-content'], props.optClass);
  var contentHidden = cx(contentClasses, style['hidden']);

  return (
    <div className={contentHidden}>
      {props.children}
    </div>
  )
}

PanelContent.propTypes = {
  /**
   * An optional CSS class to be used to local style
   */
  optClass: React.PropTypes.string
}

export default PanelContent
