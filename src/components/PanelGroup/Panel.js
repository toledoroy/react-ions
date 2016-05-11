import React from 'react'
import style from './style.scss'

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * The event key
     */
    eventKey: React.PropTypes.any,
    /**
     * Whether the panelGroup should allow only one panel to be open at a time
     */
    accordion: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  render() {
    return (
      <div className={style.panel}>
        {this.props.children}
      </div>
    )
  }
}

export default Panel
