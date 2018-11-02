import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader'
import style from './style.scss'
import Popover from '../Popover/Popover'
import ConfirmationOverlay from '../internal/ConfirmationOverlay'
import optclass, { mapOptClass } from '../internal/OptClass'
import colors from '../internal/colors'

class Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The size of button.
     */
    size: PropTypes.string,
    /**
     * Whether the button is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Whether the loading spinner is displayed.
     */
    loading: PropTypes.bool,
    /**
     * Whether to display only an icon on small screens
     */
    collapse: PropTypes.bool,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    /**
     * A function to be called onClick
     */
    onClick: PropTypes.func,
    /**
     * A function to be called onMouseEnter
     */
    onMouseEnter: PropTypes.func,
    /**
     * A function to be called onMouseLeave
     */
    onMouseLeave: PropTypes.func,
    /**
     * A function to be called onMouseDown
     */
    onMouseDown: PropTypes.func,
    /**
     * A function to be called onMouseOut
     */
    onMouseOut: PropTypes.func,
    /**
     * A function to be called onMouseOver
     */
    onMouseOver: PropTypes.func,
    /**
     * A function to be called onMouseUp
     */
    onMouseUp: PropTypes.func,
    /**
     * The type of button.
     */
    type: PropTypes.string,
    /**
     * A string to allow for inline styles
     */
    style: PropTypes.string,
    /**
     * A class name to be used for local styles or integrations (required to support styled-components)
     **/
    className: PropTypes.string,
    /**
     * A valid css color to set the color of the loader (if applicable).
     **/
    loaderColor: PropTypes.string,
    /**
     * Prop to add a confirmation to the button when clicked
    */
    confirm: PropTypes.bool,
    /**
     * Position of the confirmation popover
     */
    confirmPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /**
    * Text in the confirmation popover
    */
    confirmText: PropTypes.string,
    /**
    * The width of the confirmation popover
    */
    confirmWidth: PropTypes.string
  }

  static defaultProps = {
    confirmPosition: 'bottom',
    type: 'button'
  }

  state = {
    confirmIsOpen: false
  }

  handleConfirmation = confirm => {
    if (confirm) this.props.onClick && this.props.onClick()

    this.setState({ confirmIsOpen: false })
  }

  handleClick = () => {
    if (this.props.confirm) {
      this.setState({ confirmIsOpen: true })
    }
    else {
      this.props.onClick && this.props.onClick()
    }
  }

  render = () => {
    const styles = mapOptClass(this.props.optClass, {
      secondary: {
        color: colors.primary4
      },
      warning: {
        color: colors.white
      },
      inverted: {
        color: colors.primary1
      },
      danger: {
        color: colors.white
      },
      'danger-alt': {
        color: colors.danger
      },
      success: {
        color: colors.white
      },
      flat: {
        color: colors.neutral4
      },
      info: {
        color: colors.white
      },
      plain: {
        color: colors.primary4
      },
      'plain-light': {
        color: '#7b96b5'
      },
      default: {
        color: colors.white
      }
    })

    const spinnerOptions = {
      lines: 10,
      length: 4,
      width: 3,
      radius: 5,
      color: this.props.loaderColor || styles.color
    }

    const collapseClass = this.props.collapse ? 'collapse' : null
    const loaderClasses = this.props.loading ? 'loading' : null
    const btnClasses = optclass(style, [style.btn, this.props.size, loaderClasses, collapseClass], this.props.optClass, this.props.className)

    const button = (
      <button
        type={this.props.type}
        style={this.props.style}
        className={btnClasses}
        disabled={this.props.disabled || this.props.loading}
        aria-disabled={this.props.disabled || this.props.loading}
        onClick={this.handleClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseDown={this.props.onMouseDown}
        onMouseOut={this.props.onMouseOut}
        onMouseOver={this.props.onMouseOver}
        onMouseUp={this.props.onMouseUp}>
        { this.props.loading && <Loader loaded={false} options={spinnerOptions} /> }
        <em>{this.props.children}</em>
      </button>
    )

    return (

      this.props.confirm ?
        <Popover
          showing={this.state.confirmIsOpen}
          defaultPosition={this.props.confirmPosition}
          content={
            <ConfirmationOverlay
              handleConfirmation={this.handleConfirmation}
              prompt={this.props.confirmText} />
          }
          width={this.props.confirmWidth + 'px'}
          onRequestClose={() => this.setState({ confirmIsOpen: false }) }>

          {button}

        </Popover>

      : button
    )
  }
}

export default Button
