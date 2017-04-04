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
     * Whether to slide the items vertically (default is horizontal)
     */
    vertical: React.PropTypes.bool,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  static defaultProps = {
    activePanel: 0
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.activePanel !== this.props.activePanel) return true

    return false
  }

  getStyle = (index) => {
    let translateValue

    if (index === 0) {
      translateValue = 0
    } else {
      translateValue = `-${index}00`
    }

    if (this.props.vertical) {
      return {
        'transform': `translateY(${translateValue}%)`
      }
    }

    return {
      'transform': `translateX(${translateValue}%)`
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

  render() {
    const verticalClass = this.props.vertical ? style['vertical'] : null
    const panelSliderClasses = optclass(style, 'panel-slider', this.props.optClass)
    const panelWrapClasses = optclass(style, 'panel-wrap', verticalClass)

    const panels = this.getPanels().map((panel, index) => {
      return React.cloneElement(panel, {
        key: index,
        panelIndex: index
      })
    })

    return (
      <div className={panelSliderClasses}>
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
