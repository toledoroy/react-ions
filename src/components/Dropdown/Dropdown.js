import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import Button from '../Button/Button'
import StyledDiv from '../StyledDiv'
import styles from './styles.css'
import Immutable from 'immutable'

export class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    if (props.optClass && process.env.NODE_ENV !== 'production') {
      console.warn('Dropdown: Use of optClass will be deprecated as of react-ions 6.0.0, please use `className` instead')
    }
  }

  static defaultProps = {
    isOpened: false
  }

  static propTypes = {
    /**
     * A callback function to be called when dropdown isOpen state changes.
     */
    changeCallback: PropTypes.func,
    /**
     * Whether the dropdown is visible.
     */
    isOpened: PropTypes.bool,
    /**
     * The alignment of the dropdown with respect to the trigger.
     */
    alignment: PropTypes.oneOf(['left', 'right']),
    /**
     * Optional styles to add to the button.
     */
    optClass: PropTypes.string,
    /**
     * An element to pass as a target (number, string, node).
     */
    trigger: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.node
    ]),
    /**
     * Optional array of items used in a dropdown list
     */
    listItems: PropTypes.array,
    /**
     * Optional class to add to the popover.
     */
    className: PropTypes.string
  }

  static defaultProps = {
    alignment: 'left'
  }

  state = {
    isOpened: this.props.isOpened,
    listItems: this.props.listItems ? Immutable.fromJS(this.props.listItems) : Immutable.fromJS([]),
    clickedItem: null
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isOpened !== this.state.isOpened) {
      this.setState({ isOpened: !!nextProps.isOpened })
    }

    if (nextProps.listItems && !Immutable.is(Immutable.fromJS(nextProps.listItems), this.state.listItems)) {
      this.setState({ listItems: Immutable.fromJS(nextProps.listItems) })
    }
  }

  toggleDropdown = e => {
    e.preventDefault()
    this.setState({ isOpened: !this.state.isOpened }, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened)
      }
    })
  }

  handleClickOutside = () => {
    if (!this.state.isOpened) return

    this.setState({ isOpened: false, confirmationOverlayOpen: false, clickedItem: null }, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.state.isOpened)
      }
    })
  }

  listItemCallback = item => {
    this.setState({ isOpened: false, confirmationOverlayOpen: false, clickedItem: null })

    if (typeof item.callback === 'function') {
      item.callback(item.name)
    }
  }

  handleConfirmation = confirm => {
    if (confirm) {
      this.listItemCallback(this.state.clickedItem)
    } else {
      this.setState({ confirmationOverlayOpen: false, clickedItem: null })
    }
  }

  handleItemClick = item => {
    if (item.callbackConfirmation) {
      this.setState({ confirmationOverlayOpen: true, clickedItem: item })
    } else {
      this.listItemCallback(item)
    }
  }

  render = () => {
    const listItems = this.state.listItems.toJS()
    const listItemNodes = listItems instanceof Array
      ? listItems.map((item, index) =>
          <li key={index} onClick={this.handleItemClick.bind(this, item)}>{item.name}</li>
        )
      : []

    return (
      <StyledDiv
        css={styles({ ...this.props, isOpened: this.state.isOpened })}
        className={[this.props.optClass, this.props.className].join(' ').trim()}>

        <span className='trigger' onClick={this.toggleDropdown}>
          {this.props.trigger}

          <div className='dropdown-wrapper'>
            {
              listItemNodes.length > 0 && !this.state.confirmationOverlayOpen
              ? <ul className='list-wrapper'>
                  {listItemNodes}
                </ul>
              : this.props.children
            }
            {
              this.state.confirmationOverlayOpen &&
                <div className='overlay'>
                  <span>Are you sure?</span>
                  <div className='button-wrapper'>
                    <Button onClick={this.handleConfirmation.bind(this, false)} optClass='danger-alt'>Cancel</Button>
                    <Button onClick={this.handleConfirmation.bind(this, true)}>Yes</Button>
                  </div>
                </div>
            }
          </div>
        </span>
      </StyledDiv>
    )
  }
}

export default enhanceWithClickOutside(Dropdown)
