import React from 'react'
import ReactDOM from 'react-dom'
import enhanceWithClickOutside from 'react-click-outside'
import style from './style.scss'
import classNames from 'classnames/bind'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isOpened: false
  }

  static propTypes = {
    /**
     * Whether the dropdown is visible
     */
    isOpened: React.PropTypes.bool,
    /**
     * Optional styles to add to the button.
     */
    optClass: React.PropTypes.string,
    /**
     * An element to pass as a target (number, string, node).
     */
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
      React.PropTypes.node
    ]),
    /**
     * A callback function to be called when dropdown isOpen state changes
     */
    changeCallback: React.PropTypes.func
  }

  state = {
    isOpened: this.props.isOpened
  }

  componentWillMount = () => {
    if (this.props.isOpened === true) {
      this.setState({isOpened: true})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isOpened !== this.state.isOpened) {
      this.setState({isOpened: !!nextProps.isOpened})
    }
  }

  toggleDropdown = (e) => {
    e.preventDefault()
    this.setState({isOpened: !this.state.isOpened}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened);
      }
    })
  }

  handleClickOutside() {
    this.setState({isOpened: false}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened);
      }
    })
  }

  render() {
    const cx = classNames.bind(style)
    const isOpenedClass = this.state.isOpened ? style['is-opened'] : null
    const dropdownClasses = cx(style['dropdown-component'], this.props.optClass, isOpenedClass)

    return (
      <div className={dropdownClasses}>
        <span
          className={style.trigger} onClick={this.toggleDropdown}>{this.props.trigger}</span>
        <div className={style['dropdown-wrapper']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(Dropdown)
