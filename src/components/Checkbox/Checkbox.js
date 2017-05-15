import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false,
    iconName: 'icon-check-1-1',
    locked: false
  }

  state = {
    value: this.props.value,
    iconName: this.props.iconName
  }

  static propTypes = {
    /**
     * Whether the checkbox is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value of the input. Sets whether the component is checked or not.
     */
    value: React.PropTypes.bool,
    /**
     * Text displayed with the checkbox.
     */
    label: React.PropTypes.string,
    /**
     * Optional styles to add to the checkbox.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the checkbox changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Icon to be used in the checkbox.
     */
    iconName: React.PropTypes.string,
    /**
     * Whether the checkbox is locked from change outside of receiving props.
     */
    locked: React.PropTypes.bool,
    /**
     * Optional description that appears below the label.
     */
    description: React.PropTypes.string
  }

  handleChange = (event) => {
    event.persist()

    // Allow user to interact with locked checkboxes only if the value is false (unchecked)
    if (!this.props.locked || !this.props.value) {
      this.setState({ value: event.target.checked }, () => {
        if (typeof this.props.changeCallback === 'function') {
          this.props.changeCallback(event)
        }
      })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    let newState = {}

    if (nextProps.value !== this.props.value) {
      newState.value = nextProps.value
    }

    if (nextProps.iconName !== this.state.iconName) {
      newState.iconName = nextProps.iconName
    }

    this.setState(newState)
  }

  getLabel = () => {
    if (this.props.label && this.props.description) {
      return <div className={style['label-wrapper']}>
        <label>
          <span className={style['label-title']}>{this.props.label}</span>
          <span className={style['label-description']}>{this.props.description}</span>
        </label>
      </div>
    }

    if (this.props.label) {
      return <label>{this.props.label}</label>
    }

    return null
  }

  render() {
    const {
      optClass,
      changeCallback,
      ...other
    } = this.props

    const cx = classNames.bind(style)
    const disabledClass = this.props.disabled ? style['checkbox-disabled'] : ''
    const checkboxClass = cx(style['checkbox-component'], optClass, disabledClass)
    const inputFillColor = this.props.disabled ? '#9198A0' : '#3C97D3'
    const labelWrapperClass = this.props.description ? style['label-group'] : null

    return (
      <div className={checkboxClass}>
        <input type="checkbox" checked={this.state.value} onChange={this.handleChange} {...other}></input>
        <div className={labelWrapperClass}>
          <div className={style['checkbox-input']}>
            <Icon name={this.state.iconName} fill={inputFillColor} />
          </div>
          {this.getLabel()}
        </div>
      </div>
    )
  }
}

export default Checkbox
