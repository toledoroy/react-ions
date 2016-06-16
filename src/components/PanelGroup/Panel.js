import React from 'react'
import optclass from '../internal/OptClass'
import style from './style.scss'

class Panel extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * Whether the panel is active. Set by the panelGroup component.
     */
    active: React.PropTypes.bool,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  getHeader = () => {
    return this.props.children[0]
  }

  handlePanelClick = () => {
    if (this.props.onPanelClick) {
      this.props.onPanelClick(this)
    }
  }

  render() {
    const panelActiveClass = (this.props.active) ? style['panel-active'] : null
    const panelClasses = optclass(style, ['panel', panelActiveClass], this.props.optClass)

    const header = React.cloneElement(this.getHeader(), {
      active: this.props.active,
      onPanelClick: this.handlePanelClick
    })

    return (
      <div className={panelClasses}>
        {header}
        {this.props.children[1]}
      </div>
    )
  }
}

export default Panel
