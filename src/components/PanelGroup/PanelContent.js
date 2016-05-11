import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const PanelContent = (props) => {
  const cx = classNames.bind(style);
  var contentClasses = cx(style['panel-content'], props.optClass);

  return (
    <div className={contentClasses}>
      {props.children}
    </div>
  )
}

PanelContent.propTypes = {
  /**
   * An optional CSS class to be used to style the content area
   */
  optClass: React.PropTypes.string
}

export default PanelContent
