import React from 'react'
import style from './style.scss'

class PanelGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * The panel(s) to be open by default
     */
    activePanels: React.PropTypes.array,
    /**
     * Whether the panelGroup should allow only one panel to be open at a time
     */
    accordion: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  getPanels = () => {
    const panels = [];
    React.Children.forEach(this.props.children, (panel) => {
      if (React.isValidElement(panel)) {
        panels.push(panel);
      }
    });
    return panels;
  }

  isActive = (index) => {
    return this.props.activePanels.includes(index);
  }

  render() {
    const panels = this.getPanels().map((panel, index) => {
      return React.cloneElement(panel, {
        key: index,
        active: this.isActive(index),
        tabIndex: index
      });
    });

    return (
      <div className={style['panel-group']}>
        {panels}
      </div>
    );
  }
}

export default PanelGroup
