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
    if (this.props.name === 'PanelGroup') {
      return React.cloneElement(this.props.children[0], {
        active: this.props.active,
        onPanelClick: this.handlePanelClick
      })
    }
  }

  handlePanelClick = () => {
    if (this.props.onPanelClick) {
      this.props.onPanelClick(this)
    }
  }

  render() {
    const panelActiveClass = (this.props.active) ? style['panel-active'] : null
    const panelClasses = optclass(style, ['panel', panelActiveClass], this.props.optClass)

    const header = this.getHeader()

    return (
      <div className={panelClasses}>
        {this.getHeader()
          ? <span>
              {header}
              {this.props.children[1]}
            </span>
          : <span>
              {this.props.children}
            </span>
          }
      </div>
    )
  }
}

export default Panel
