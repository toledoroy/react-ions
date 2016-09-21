import React from 'react'
import ReactDOM from 'react-dom'
import enhanceWithClickOutside from 'react-click-outside'
import style from './style.scss'
import classNames from 'classnames/bind'
import Immutable from 'immutable'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isOpened: false
  }

  static propTypes = {
    /**
     * A callback function to be called when dropdown isOpen state changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Whether the dropdown is visible.
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
     * Optional array of items used in a dropdown list
     */
     listItems: React.PropTypes.array
  }

  state = {
    isOpened: this.props.isOpened,
    listItems: this.props.listItems ? Immutable.fromJS(this.props.listItems) : Immutable.fromJS([])
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

    if (nextProps.listItems && !Immutable.is(Immutable.fromJS(nextProps.listItems), this.state.listItems)) {
      this.setState({listItems: Immutable.fromJS(nextProps.listItems)})
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.isOpened !== this.state.isOpened
           ||
           !Immutable.is(nextState.listItems, this.state.listItems)
  }

  toggleDropdown = (e) => {
    e.preventDefault()
    this.setState({isOpened: !this.state.isOpened}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened)
      }
    })
  }

  handleClickOutside = () => {
    if (!this.state.isOpened) return

    this.setState({isOpened: false}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened)
      }
    })
  }

  listItemCallback = (item) => {
    this.setState({isOpened: false})

    if (typeof item.callback === 'function') {
      item.callback(item.name)
    }
  }

  render() {
    const cx = classNames.bind(style)
    const isOpenedClass = this.state.isOpened ? style['is-opened'] : null
    const dropdownClasses = cx(style['dropdown-component'], this.props.optClass, isOpenedClass)
    const dropdownWrapperClasses = cx(style['dropdown-wrapper'], (this.props.listItems ? style['dropdown-wrapper-flush'] : null))

    const listItems = this.state.listItems.toJS()
    const listItemNodes = listItems instanceof Array
      ? listItems.map((item, index) =>
          <li key={index} onClick={this.listItemCallback.bind(this, item)}>{item.name}</li>
        )
      : []

    return (
      <div className={dropdownClasses}>
        <span
          className={style.trigger} onClick={this.toggleDropdown}>{this.props.trigger}</span>
        <div className={dropdownWrapperClasses}>
          {listItemNodes.length > 0
            ? <ul className={style['list-wrapper']}>
                {listItemNodes}
              </ul>
            : this.props.children
          }
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(Dropdown)
