import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

class PanelContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cx = classNames.bind(style);
    var contentClasses = cx(style['panel-content'], this.props.optClass);
    return (
      <div className={contentClasses}>
        {this.props.children}
      </div>
    )
  }
}

PanelContent.propTypes = {
  /**
   * An optional CSS class to be used to style the content area
   */
  optClass: React.PropTypes.string
}

export default PanelContent
