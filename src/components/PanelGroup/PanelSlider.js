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
    ])
  }

  static defaultProps = {
    activePanel: 0,
    name: 'PanelSlider',
    isTransitioning: false,
    activePanelHeight: null
  }

  state = {
    panels: []
  }

  componentWillMount = () => {
    this.activatePanel(this.props.activePanel)
  }

  componentDidMount = () => {
    this._panelSlider.addEventListener('transitionstart', () => {
      this.setState({
        isTransitioning: true
      })
      console.log('transitionstart')
    })

    this._panelSlider.addEventListener('transitionend', () => {
      console.log('transitionend')
      this.setState({
        isTransitioning: false
      })
    })
  }

  componentWillUnmount = () => {
    this._panelSlider.removeEventListener('transitionstart')
    this._panelSlider.removeEventListener('transitionend')
  }

  // No sCU on this component because
  // nested child components need to be
  // able to update as needed

  componentWillReceiveProps = (nextProps) => {
    this.activatePanel(nextProps.activePanel)
  }

  getStyle = (index) => {
    let translateValue

    if (index === 0) {
      translateValue = 0
    } else {
      translateValue = `-${index}00`
    }

    let panelHeight = this._panelSlider ? this._panelSlider.querySelector('[class*="panel-active-"] [class*="panel-content-"]').getBoundingClientRect().height : null

    return {
      'transform': `translateX(${translateValue}%)`,
      'maxHeight': panelHeight ? `${panelHeight}px` : null
    }
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

  activatePanel = (activePanel) => {
    var panels = this.getPanels()
    var initialPanels = []

    panels.forEach((panel, index) => {
      const active = activePanel === index
      initialPanels = [...initialPanels, { active }]
    })

    this.setState({panels: initialPanels})
  }

  render() {
    const panelSliderClasses = optclass(style, 'panel-slider', this.props.optClass)
    const panelWrapClasses = optclass(style, 'panel-wrap')

    const panels = this.getPanels().map((panel, index) => {
      return React.cloneElement(panel, {
        key: index,
        panelIndex: index,
        active: this.state.panels[index].active,
        name: this.props.name
      })
    })

    return (
      <div className={panelSliderClasses} ref={(c) => this._panelSlider = c}>
        <div className={style['wrapper']}>
          <div className={style['inner']}>
            <div className={panelWrapClasses} style={this.getStyle(this.props.activePanel)}>
              {panels}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PanelSlider
