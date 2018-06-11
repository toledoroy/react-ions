import React from 'react'
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import StyledDiv from '../StyledDiv'
import styles from './styles.css'

export class Popover extends React.Component {
  constructor(props) {
    super(props)
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
    * The width of the popover, in any unit supported in css
    */
    width: PropTypes.string,
    /**
     * Optional class to add to the popover.
     */
    optClass: PropTypes.string,
    /**
     * Optional class to add to the popover.
     */
    className: PropTypes.string,
    /**
     * The method to be triggered on close.
     */
    onRequestClose: PropTypes.func
  }

  static defaultProps = {
    defaultPosition: 'bottom',
    width: '300px',
    showing: false
  }

  state = {
    position: this.props.defaultPosition
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
    return this.state.position
  }

  handleClickOutside = () => {
    if (this.props.showing && this.props.onRequestClose) this.props.onRequestClose()
  }

  render = () => (
    <StyledDiv
      css={styles({ ...this.props, ...this.state, parent: this._parentRect })}
      className={this.props.optClass + ' ' + this.props.className}
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
      {this.props.children}

    </StyledDiv>
  )
}

export default enhanceWithClickOutside(Popover)
