import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Tab extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
  }

  static propTypes = {
    /**
     * Whether the tab is active. Set by the tab wrapper component.
     */
    active: React.PropTypes.bool,
    /**
     * Whether the tab is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * The tab count.
     */
    count: React.PropTypes.number,
    /**
     * Optional styles to add to the tab header.
     */
    optClass: React.PropTypes.string,
    /**
     * Optional styles to add to the tab content.
     */
    optTabContentClass: React.PropTypes.string,
    /**
     * The tab title.
     */
    title: React.PropTypes.string.isRequired,
    /**
     * Optional title prefix renders in front of the title.
     */
    titlePrefix: React.PropTypes.node
  }

  formatCount = () => {
    // Add thousands separator (',')
    return this.props.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  handleClick = (event) => {
    if (this.props.onClick && !this.props.disabled) {
      this.props.onClick(event, this)
    }
  }

  render() {
    const cx = classNames.bind(style)
    const tabActiveClass = (this.props.active) ? 'active' : null
    const tabDisabledClass = (this.props.disabled) ? 'disabled' : null
    const tabClasses = cx(style.tab, this.props.optClass, tabActiveClass, tabDisabledClass)

    return (
      <div className={tabClasses} onClick={this.handleClick} aria-selected={this.props.active}>
        {this.props.titlePrefix}
        {this.props.title} {this.props.count
          ? <span className={style.count}>({this.formatCount()})</span>
          : null}
      </div>
    )
  }
}

export default Tab
