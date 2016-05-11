import React from 'react'
import style from './style.scss'

class PanelGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.props.initialSelectedIndex && this.props.initialSelectedIndex < this.props.children.length ? this.props.initialSelectedIndex : 0
    }
  }

  static defaultProps = {
    initialSelectedIndex: 0
  }

  static propTypes = {
    /**
     * The panel to be open by default
     */
     initialSelectedIndex: React.PropTypes.number,
    /**
     * Whether the panelGroup should allow only one panel to be open at a time
     */
    accordion: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  componentWillMount = () => {
    this.getPanels().map((panels, index) => {
      if (panels.props.active) {
        this.setState({selectedIndex: index});
      }
    });
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
    return this.state.selectedIndex === index;
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
