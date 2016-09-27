import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import RenderToLayer from '../internal/RenderToLayer'

/**
 * The Tooltip component.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: false
  }

  static defaultProps = {
    tooltipPlacement: 'top'
  }

  static propTypes = {
    /**
     * The content to display inside the `Tooltip`. Could be number, string, element or an array containing these types.
     */
    content: React.PropTypes.node,
    /**
     * Optional styles to add to the tooltip.
     */
    optClass: React.PropTypes.string,
    /**
     * The placement of the tooltip.
     */
    tooltipPlacement: React.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    /**
     * Whether to insert the tooltip element after the trigger element or append it to the document body.
     */
    appendToBody: React.PropTypes.bool,
    /**
     * Whether to show the tooltip element by default.
     */
    show: React.PropTypes.bool
  }

  componentDidMount = () => {
    if (this.props.show) {
      setTimeout(() => {
        this.props.show ? this.showTooltip() : null
      }, 1000)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ showing: nextProps.show })
  }

  showTooltip = () => {
    this.tooltipPlacement()
    this.setState({ showing: true })
  }

  hideTooltip = () => {
    if (!this.props.show) {
      this.setState({ showing: false })
    }
  }

  tooltipPlacement = () => {
    var triggerRect = this._triggerElement.getBoundingClientRect()
    this._tooltipPlacement = {}
    this._tooltipPlacement.translate = triggerRect.width / 2

    switch (this.props.tooltipPlacement) {
      case 'bottom':
        this._tooltipPlacement.left = triggerRect.left + (triggerRect.right - triggerRect.left) / 2
        this._tooltipPlacement.top = triggerRect.bottom
        break
      case 'right':
        this._tooltipPlacement.left = triggerRect.right
        this._tooltipPlacement.top = triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2
        break
      case 'left':
        this._tooltipPlacement.left = triggerRect.left
        this._tooltipPlacement.top = triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2
        break
      default:
        this._tooltipPlacement.left = triggerRect.left + (triggerRect.right - triggerRect.left) / 2
        this._tooltipPlacement.top = triggerRect.top
    }
  }

  getTranslate = () => {
    return this._tooltipPlacement.translate + 'px'
  }

  getStyles = () => {
    var style = {}

    if (this.state.showing && !this.props.show || this.state.showing && this.props.show && this.props.tooltipPlacement !== 'top') {
      style.top = this._tooltipPlacement.top + window.pageYOffset
      style.left = this._tooltipPlacement.left + window.pageXOffset
      style.opacity = 0.9
    } else if (this.state.showing && this.props.show && this.props.tooltipPlacement === 'top') {
      style.top = 'inherit'
      style.left = 'inherit'
      style.opacity = 0.9
      style.transform = `translate(calc(-50% - ${this.getTranslate()}), calc(-100% - 6px))`
    }

    return style
  }

  renderTooltip = () => {
    const cx = classNames.bind(style)
    const tooltipShowingClass = this.state.showing ? style['tooltip-showing'] : ''
    const tooltipClass = cx(style['tooltip-component'], this.props.optClass, tooltipShowingClass, style[this.props.tooltipPlacement])
    const styles = this.getStyles()

    return (
      <span className={tooltipClass} style={styles}>
        {this.props.content}
      </span>
    )
  }

  render = () => {
    const {content, optClass, tooltipPlacement, appendToBody, show, ...other} = this.props

    return (
      <span onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip} ref={(c) => this._triggerElement = c} {...other}>
        {this.props.children}
        {this.props.appendToBody ? <RenderToLayer render={this.renderTooltip} open={true} /> : this.renderTooltip()}
      </span>
    )
  }
}

export default Tooltip
