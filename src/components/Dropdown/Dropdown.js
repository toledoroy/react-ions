import React from 'react'
import ReactDOM from 'react-dom'
import enhanceWithClickOutside from 'react-click-outside'
import Button from '../Button/Button'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import classNames from 'classnames/bind'
import Immutable from 'immutable'

const style = prefix(rawStyle)

export class Dropdown extends React.Component {
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
    listItems: this.props.listItems ? Immutable.fromJS(this.props.listItems) : Immutable.fromJS([]),
    clickedItem: null
  }

  componentWillMount = () => {
    if (this.props.isOpened) {
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

    this.setState({isOpened: false, confirmationOverlayOpen: false, clickedItem: null}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened)
      }
    })
  }

  listItemCallback = (item) => {
    this.setState({isOpened: false, confirmationOverlayOpen: false, clickedItem: null})

    if (typeof item.callback === 'function') {
      item.callback(item.name)
    }
  }

  handleConfirmation = (confirm) => {
    if (confirm) {
      this.listItemCallback(this.state.clickedItem)
    }
    else {
      this.setState({ confirmationOverlayOpen: false, clickedItem: null })
    }
  }

  handleItemClick = (item) => {
    if (item.callbackConfirmation) {
      this.setState({ confirmationOverlayOpen: true, clickedItem: item })
    }
    else {
      this.listItemCallback(item)
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
          <li key={index} onClick={this.handleItemClick.bind(this, item)}>{item.name}</li>
        )
      : []

    return (
      <div className={dropdownClasses}>
        <span className={style.trigger} onClick={this.toggleDropdown}>{this.props.trigger}</span>
        <div className={dropdownWrapperClasses}>
          {
            listItemNodes.length > 0 && !this.state.confirmationOverlayOpen
            ? <ul className={style['list-wrapper']}>
                {listItemNodes}
              </ul>
            : this.props.children
          }
          {
            this.state.confirmationOverlayOpen
            ? <div className={style.overlay}>
                <span>Are you sure?</span>
                <div className={style['button-wrapper']}>
                  <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
                  <Button onClick={this.handleConfirmation.bind(this, true)}>Yes</Button>
                </div>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(Dropdown)
