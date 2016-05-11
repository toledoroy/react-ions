import React from 'react'
import style from './style.scss'

class PanelGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * The panel to be open by default
     */
    defaultActiveKey: React.PropTypes.number,
    /**
     * Whether the panelGroup should allow only one panel to be open at a time
     */
    accordion: React.PropTypes.bool,
    /**
     * Child Panels to be iterated over
     */
    children: React.PropTypes.node,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  static defaultProps = {
    accordion: false
  }

  state = {
    defaultActiveKey: this.props.defaultActiveKey,
  }

  handleClick = (event) => {
    this.setState({active: true}, function() {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(event);
      }
    });
  }

  render() {
    return (
      <div className={style['panel-group']}>
        {this.props.children}
      </div>
    );
  }
}

export default PanelGroup
