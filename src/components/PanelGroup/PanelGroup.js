import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

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
     * Note: if accordion is set to true, the activePanels array will respect
     * only the first item.
     */
    accordion: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  state = {
    panels: []
  }

  componentWillMount = () => {
    this.setInitialState();
  }

  activatePanels = (activePanels) => {
    var panels = this.getPanels();
    var initialPanels = [];

    panels.forEach((panel, index) => {
      if (activePanels) {
        initialPanels = [...initialPanels, {active: !!activePanels.includes(index)}];
      } else {
        initialPanels = [...initialPanels, {active: false}];
      }
    });

    this.setState({panels: initialPanels});
  }

  setInitialState = () => {
    this.activatePanels(this.props.activePanels);
  }

  componentWillReceiveProps = (nextProps) => {
    this.activatePanels(nextProps.activePanels);
  }

  collapsePanels = () => {
    var panels = this.getPanels();
    var collapsedPanels = [];

    panels.forEach((panel, index) => {
      collapsedPanels = [...collapsedPanels, {active: false}];
    });

    return collapsedPanels;
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

  handlePanelClick = (panel) => {
    console.log('PANEL!!!');
    let panelIndex = panel.props.panelIndex;
    let state = this.state.panels;

    if (!this.props.accordion) {
      state[panelIndex] = {active: !this.state.panels[panelIndex].active};
      this.setState({panels: state})
    } else {
      var resetState = this.collapsePanels();
      resetState[panelIndex] = {active: !this.state.panels[panelIndex].active};
      this.setState({panels: resetState});
    }
  }

  render() {
    const cx = classNames.bind(style);
    const panelGroupClass = cx(style['panel-group'], this.props.optClass);

    const panels = this.getPanels().map((panel, index) => {
      return React.cloneElement(panel, {
        key: index,
        panelIndex: index,
        active: this.state.panels[index].active,
        onPanelClick: this.handlePanelClick
      });
    });

    return (
      <div className={panelGroupClass}>
        {panels}
      </div>
    );
  }
}

export default PanelGroup
