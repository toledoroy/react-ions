import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * Whether the panel is active. Set by the panelGroup component.
     */
    active: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  getHeader = () => {
    return this.props.children[0];
  }

  handlePanelClick = () => {
    if (this.props.onPanelClick) {
      this.props.onPanelClick(this);
    }
  }

  render() {
    const cx = classNames.bind(style);
    const panelActiveClass = (this.props.active) ? style['panel-active'] : null;
    const panelClasses = cx(style.panel, this.props.optClass, panelActiveClass);

    const header = React.cloneElement(this.getHeader(), {
      active: this.props.active,
      onPanelClick: this.handlePanelClick
    });

    return (
      <div className={panelClasses}>
        {header}
        {this.props.children[1]}
      </div>
    )
  }
}

export default Panel
