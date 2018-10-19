import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import classNames from 'classnames/bind'
import Popover from '../Popover/Popover'
import Button from '../Button'

class Toggle extends PureComponent {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false,
    value: false,
    hasText: false
  }

  state = {
    value: this.props.value,
    text: ['Yes', 'No'],
    confirmIsOpen: false
  }

  static propTypes = {
    /**
     * Name of the toggle.
     */
    name: PropTypes.string,
    /**
     * Value of the toggle.
     */
    value: PropTypes.bool,
    /**
     * Text displayed with the toggle.
     */
    label: PropTypes.string,
    /**
     * Whether the toggle is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Optional styles to add to the toggle.
     */
    optClass: PropTypes.string,
    /**
     * A callback function to be called when the toggle changes.
     */
    changeCallback: PropTypes.func,
    /**
    * Boolean used to signify if text is used on the toggle
    */
    hasText: PropTypes.bool,
    /**
    * Prop to signify if the toggle should have a confirmation when toggled on or off (or both)
    */
    confirm: PropTypes.oneOf(['on', 'off', 'both']),
  }

  handleChange = () => {
    if (this.props.disabled) return

    if (this.props.confirm === 'both') {
      this.setState({ confirmIsOpen: true })
    }
    else if (this.props.confirm === 'on' && !this.state.value) {
      this.setState({ confirmIsOpen: true })
    }
    else if (this.props.confirm === 'off' && this.state.value) {
      this.setState({ confirmIsOpen: true })
    }
    else {
      this.toggleValue()
    }
  }

  toggleValue = () => {
    this.setState({ value: !this.state.value, confirmIsOpen: false }, () => {
      this.props.changeCallback &&
        this.props.changeCallback({
            target: {
              name: this.props.name,
              value: this.state.value
            }
        })
    })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  toggleText = isOn => {
    if (!this.props.hasText) return ''

    return isOn ? this.state.text[0] : this.state.text[1]
  }

  togglePopover = () => {
    this.setState({ confirmIsOpen: !this.state.confirmIsOpen })
  }

  getPopoverContent = () => (
    <div>
      <Button onClick={() => this.setState({ confirmIsOpen: false })} optClass='danger-alt'>Cancel</Button>
      <Button onClick={this.toggleValue} optClass='change-this'>Yes</Button>
    </div>
  )

  getToggle = () => {
    const cx = classNames.bind(style)
    const onClass = this.state.value ? style.on : ''
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    const textClasses = cx(style.text, onClass)
    const hasTextClass = this.props.hasText ? style['has-text'] : style['no-text']
    const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    const toggleWrapper = cx(style['toggle-wrapper'], hasTextClass)
    const toggleClass = cx(style['toggle-component'], disabledClass, this.props.optClass)
    const toggleText = this.toggleText(onClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        { this.props.label && <label>{this.props.label}</label> }

        <div className={toggleWrapper}>
          <div className={outerClasses} />
           {this.props.hasText && <span className={textClasses}>{toggleText}</span>}
          <div className={innerClasses} />
        </div>
      </div>
    )
  }

  render = () => {
    return (
      this.props.confirm ?
        <Popover
          showing={this.state.confirmIsOpen}
          defaultPosition='bottom'
          content={this.getPopoverContent()}
          maxHeight='280px'
          onRequestClose={this.togglePopover}>

          {this.getToggle()}

        </Popover>
  
      : this.getToggle()
    )
  }
}

export default Toggle
