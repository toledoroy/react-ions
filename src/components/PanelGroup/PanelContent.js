import React from 'react'
import optclass from '../internal/OptClass'
import style from './style.scss'

class PanelContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const panelContentClasses = optclass(style, 'panel-content', this.props.optClass)

    return (
      <div className={panelContentClasses}>
        {this.props.children}
      </div>
    )
  }
}

PanelContent.propTypes = {
  /**
   * Optional CSS class(es) to be used for local styles (string or array of strings)
   */
  optClass: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ])
}

export default PanelContent
