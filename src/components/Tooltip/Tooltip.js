import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import RenderToLayer from '../internal/RenderToLayer'

/**
 * The Tooltip component.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false
    }
  }

  static defaultProps = {
    tooltipPlacement: 'top'
  }

  static propTypes = {
    /**
     * The content to display inside the `Tooltip`. Could be number, string, element or an array containing these types.
     */
    content: React.PropTypes.node.isRequired,
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
    appendToBody: React.PropTypes.bool
  };

  showTooltip = () => {
    this.setState({ showing: true });
  }

  hideTooltip = () => {
    this.setState({ showing: false });
  }

  componentWillUpdate = () => {
    var triggerRect = this._triggerElement.getBoundingClientRect();
    this._tooltipPlacement = {};

    switch (this.props.tooltipPlacement) {
      case 'bottom':
        this._tooltipPlacement.left = this.props.appendToBody ? triggerRect.left + (triggerRect.right - triggerRect.left) / 2 : '50%';
        this._tooltipPlacement.top = this.props.appendToBody ? triggerRect.bottom : '100%';
        break
      case 'right':
        this._tooltipPlacement.left = this.props.appendToBody ? triggerRect.right : '100%';
        this._tooltipPlacement.top = this.props.appendToBody ? triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2 : '50%';
        break
      case 'left':
        this._tooltipPlacement.left = this.props.appendToBody ? triggerRect.left : '0';
        this._tooltipPlacement.top = this.props.appendToBody ? triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2 : '50%';
        break
      default:
        this._tooltipPlacement.left = this.props.appendToBody ? triggerRect.left + (triggerRect.right - triggerRect.left) / 2 : '50%';
        this._tooltipPlacement.top = this.props.appendToBody ? triggerRect.top : '0';
    }

    this._triggerElement.style.removeProperty('position');

    if (!this.props.appendToBody) {
      this._triggerElement.style.position = 'relative';
    }
  }

  getStyles = () => {
    var style = {
      top: this.props.appendToBody ? '-100%' : '-99999px',
      left: this.props.appendToBody ? '-100%' : '-99999px',
      opacity: 0,
      position: this.props.appendToBody ? 'fixed' : 'absolute'
    }

    if (this.state.showing) {
      style.top = this._tooltipPlacement.top;
      style.left = this._tooltipPlacement.left;
      style.opacity = 0.9;
    }

    return style;
  }

  renderTooltip = () => {
    const cx = classNames.bind(style);
    const tooltipShowingClass = this.state.showing ? style['tooltip-showing'] : '';
    const tooltipClass = cx(style['tooltip-component'], this.props.optClass, tooltipShowingClass, style[this.props.tooltipPlacement]);
    const styles = this.getStyles();

    return (
      <div className={tooltipClass} style={styles}>
        {this.props.content}
      </div>
    )
  }

  render() {
    return (
      <span onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip} ref={(c) => this._triggerElement = c}>
        {this.props.children}
        {this.props.appendToBody ? <RenderToLayer render={this.renderTooltip} open={true} /> : this.renderTooltip()}
      </span>
    )
  }
}

export default Tooltip
