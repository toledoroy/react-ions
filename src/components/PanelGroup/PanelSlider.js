import React from 'react'
import optclass from '../internal/OptClass'
import style from './style.scss'

class PanelSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The currently active panel
     */
    activePanel: React.PropTypes.number,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    /**
     * A callback that gets triggered when a panel is activated
     */
    onPanelActive: React.PropTypes.func
  }

  static defaultProps = {
    activePanel: 0
  }

  state = {
    panels: []
  }

  componentWillMount = () => {
    this.setInitialState()
  }

  activatePanel = (activePanel) => {
    var panels = this.getPanels()
    var initialPanels = []

    panels.forEach((panel, index) => {
      if (activePanel === index) {
        initialPanels = [...initialPanels, {active: true}]
      } else {
        initialPanels = [...initialPanels, {active: false}]
      }
    })

    this.setState({panels: initialPanels})
  }

  setInitialState = () => {
    this.activatePanel(this.props.activePanel)
  }

  componentWillReceiveProps = (nextProps) => {
    this.activatePanel(nextProps.activePanel)
  }

  collapsePanels = () => {
    var panels = this.getPanels()
    var collapsedPanels = []

    panels.forEach((panel, index) => {
      collapsedPanels = [...collapsedPanels, {active: false}]
    })

    return collapsedPanels
  }

  getPanels = () => {
    const panels = []
    React.Children.forEach(this.props.children, (panel) => {
      if (React.isValidElement(panel)) {
        panels.push(panel)
      }
    })
    return panels
  }

  handlePanelActive = () => {
    console.log('handlePanelActive')
  }

  render() {
    // const panelGroupClasses = optclass(style, 'panel-group', this.props.optClass)

    const panels = this.getPanels().map((panel, index) => {
      return React.cloneElement(panel, {
        key: index,
        panelIndex: index,
        active: this.state.panels[index].active,
        onPanelActive: this.handlePanelActive
      })
    })

    return (
      <div>
        {panels}
      </div>
    )
  }
}

export default PanelSlider
