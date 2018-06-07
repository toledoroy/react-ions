import React from 'react'
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import StyledDiv from '../StyledDiv'
import styles from './styles.css'

export class Popover extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    position: this.props.defaultPosition
  }

  static propTypes = {
    /**
     * Whether to show the popover.
     */
    showing: PropTypes.bool,
    /**
     * The default position of the popover.
     */
    defaultPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /**
     * The content to display inside the popover.
     */
    content: PropTypes.node,
    /**
     * Optional styles to add to the popover.
     */
    optClass: PropTypes.string,
    /**
     * The method to be triggered on close.
     */
    onRequestClose: PropTypes.func
  }

  static defaultProps = {
    defaultPosition: 'bottom',
    showing: false
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.showing !== nextProps.showing) return true
    if (this.props.content !== nextProps.content) return true
    if (this.state.position !== nextState.position) return true

    return false
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.showing) {
      this._parentRect = this._popoverWrapper.getBoundingClientRect()
      this._boudingRect = this._popoverElement.getBoundingClientRect()

      this.setState({ position: this.dynamicResposition(nextProps.defaultPosition) })
    }
  }

  dynamicResposition = defaultPosition => {

    switch (defaultPosition) {
      case 'top':
        if (this._boudingRect.top < 0) return 'bottom'
        break
      case 'bottom':
        if (this._boudingRect.bottom > window.innerHeight) return 'top'
        break
      case 'left':
        if (this._boudingRect.left < 0) return 'right'
        break
      case 'right':
        if (this._boudingRect.right > window.innerWidth) return 'left'
        break
    }
    return defaultPosition
  }

  handleClickOutside = () => {
    if (this.props.showing && this.props.onRequestClose) this.props.onRequestClose()
  }

  render = () => (
    <StyledDiv
      css={styles({ ...this.props, ...this.state, parent: this._parentRect })}
      className={this.props.optClass}
      innerRef={p => {this._popoverWrapper = p}}
    >
      <div
        className='popoverInner'
        ref={c => (this._popoverElement = c)}
      >
        <div className='popoverContent'>
          {this.props.content}
        </div>
      </div>
      { this.props.children }

    </StyledDiv>
  )
}

export default enhanceWithClickOutside(Popover)
